import { CreditCardBrand } from './enums'

export interface ICreditCard {
  number: string
  expirity: string
  cvv: string
  brand: CreditCardBrand
}
