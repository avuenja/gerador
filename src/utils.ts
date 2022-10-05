import { CreditCardBrand, DocumentType } from './enums'
import { ICreditCard } from './interfaces'

const initialArray = (total: number, number: number) => {
  return Array.from(Array(total), () => numberRandom(number))
}
const numberRandom = (number: number) => Math.round(Math.random() * number)
const mod = (dividend: number, divider: number) => {
  return Math.round(dividend - Math.floor(dividend / divider) * divider)
}

export const onGenerateCPF = (masked: boolean): string => {
  const total = 9
  const number = 9
  const [n1, n2, n3, n4, n5, n6, n7, n8, n9] = initialArray(total, number)

  let d1 =
    n9 * 2 +
    n8 * 3 +
    n7 * 4 +
    n6 * 5 +
    n5 * 6 +
    n4 * 7 +
    n3 * 8 +
    n2 * 9 +
    n1 * 10
  d1 = 11 - mod(d1, 11)
  if (d1 >= 10) d1 = 0

  let d2 =
    d1 * 2 +
    n9 * 3 +
    n8 * 4 +
    n7 * 5 +
    n6 * 6 +
    n5 * 7 +
    n4 * 8 +
    n3 * 9 +
    n2 * 10 +
    n1 * 11
  d2 = 11 - mod(d2, 11)
  if (d2 >= 10) d2 = 0

  if (masked) {
    return `${n1}${n2}${n3}.${n4}${n5}${n6}.${n7}${n8}${n9}-${d1}${d2}`
  }

  return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${d1}${d2}`
}

export const onGenerateCNPJ = (masked: boolean): string => {
  const total = 8
  const number = 9
  const [n1, n2, n3, n4, n5, n6, n7, n8] = initialArray(total, number)

  const n9 = 0
  const n10 = 0
  const n11 = 0
  const n12 = 1

  let d1 =
    n12 * 2 +
    n11 * 3 +
    n10 * 4 +
    n9 * 5 +
    n8 * 6 +
    n7 * 7 +
    n6 * 8 +
    n5 * 9 +
    n4 * 2 +
    n3 * 3 +
    n2 * 4 +
    n1 * 5
  d1 = 11 - mod(d1, 11)
  if (d1 >= 10) d1 = 0

  let d2 =
    d1 * 2 +
    n12 * 3 +
    n11 * 4 +
    n10 * 5 +
    n9 * 6 +
    n8 * 7 +
    n7 * 8 +
    n6 * 9 +
    n5 * 2 +
    n4 * 3 +
    n3 * 4 +
    n2 * 5 +
    n1 * 6
  d2 = 11 - mod(d2, 11)
  if (d2 >= 10) d2 = 0

  if (masked) {
    return `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}/${n9}${n10}${n11}${n12}-${d1}${d2}`
  }

  return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${n10}${n11}${n12}${d1}${d2}`
}

export const onGenerateRG = (masked: boolean): string => {
  const total = 8
  const number = 9
  const [n1, n2, n3, n4, n5, n6, n7, n8] = initialArray(total, number)

  let d1: number | string =
    n1 * 2 + n2 * 3 + n3 * 4 + n4 * 5 + n5 * 6 + n6 * 7 + n7 * 8 + n8 * 9

  d1 = 11 - mod(d1, 11)
  if (d1 === 10) d1 = 'X'
  if (d1 >= 10) d1 = 0

  if (masked) {
    return `${n1}${n2}.${n3}${n4}${n5}.${n6}${n7}${n8}-${d1}`
  }

  return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${d1}`
}

export const onSetMask = (value: string, type: DocumentType): string => {
  switch (type) {
    case DocumentType.CPF:
      return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4')

    case DocumentType.CNPJ:
      return value.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
        '$1.$2.$3/$4-$5'
      )

    case DocumentType.RG:
      return value.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/g, '$1.$2.$3-$4')

    default:
      return value
  }
}

/**
 * CREDIT CARD FUNCTIONS
 **/
export const onGenerateCreditCard = (brand: CreditCardBrand): ICreditCard => {
  let number = generateCardNumber(brand)

  while (!luhnCheck(number)) {
    number = generateCardNumber(brand)
  }

  return {
    number,
    expirity: getRamdomDateInBetween(),
    cvv: String(Math.floor(Math.random() * (999 - 100)) + 100),
    brand,
  }
}

const generateCardNumber = (brand: CreditCardBrand) => {
  let bin: string

  switch (brand) {
    case CreditCardBrand.MASTERCARD:
      bin = ['51', '55'].sort(() => 0.5 - Math.random())[0]
      break

    case CreditCardBrand.VISA:
      bin = '4'
      break

    default:
      bin = '55'
  }

  let cardNumber = bin,
    randomNumberLength = 16 - (bin.length + 1)

  for (let i = 0; i < randomNumberLength; i++) {
    let digit = Math.floor(Math.random() * 9 + 0)
    cardNumber += digit
  }

  let checkDigit = getCheckDigit(cardNumber)

  cardNumber += String(checkDigit)

  return cardNumber
}

const getCheckDigit = (number: string) => {
  let sum = 0,
    module,
    checkDigit

  for (let i = 0; i < number.length; i++) {
    let digit = parseInt(number.substring(i, i + 1))

    if (i % 2 == 0) {
      digit = digit * 2
      if (digit > 9) {
        digit = digit / 10 + (digit % 10)
      }
    }

    sum += digit
  }

  module = parseInt(String(sum)) % 10
  checkDigit = module === 0 ? 0 : 10 - module

  return checkDigit
}

const luhnCheck = (num: string): boolean => {
  let arr = (num + '')
    .split('')
    .reverse()
    .map((x) => parseInt(x))

  let lastDigit = arr.splice(0, 1)[0]

  let sum = arr.reduce(
    (acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9),
    0
  )

  sum += lastDigit

  return sum % 10 === 0
}

const getRamdomDateInBetween = (): string => {
  const start = new Date()
  const end = new Date(
    start.getFullYear() + 5,
    start.getMonth(),
    start.getDate()
  )

  const randomDate = new Date(
    Math.floor(
      Math.random() * (end.getTime() - start.getTime() + 1) + start.getTime()
    )
  )

  return `${('0' + (randomDate.getMonth() + 1)).slice(
    -2
  )}/${randomDate.getFullYear()}`
}
