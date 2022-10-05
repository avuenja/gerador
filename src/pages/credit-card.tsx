import React from 'react'
import { Button, Heading, HStack, VStack } from '@chakra-ui/react'
import Head from 'next/head'

import { onGenerateCreditCard } from '@/utils'
import { CreditCardBrand } from '@/enums'
import { ICreditCard } from '@/interfaces'

import CopyButton from '@/components/copy-button'
import CreditCardComponent from '@/components/credit-card'

const CreditCard = () => {
  const [creditCard, setCreditCard] = React.useState<ICreditCard>({
    number: '**** **** **** ****',
    expirity: '**/****',
    cvv: '***',
    brand: CreditCardBrand.MASTERCARD,
  })

  React.useEffect(() => {
    onGenerate(CreditCardBrand.MASTERCARD)
  }, [])

  const onGenerate = (brand: CreditCardBrand) => {
    const card = onGenerateCreditCard(brand)

    setCreditCard(card)
  }

  return (
    <>
      <Head>
        <title>Gerador | Cartão de Crédito</title>
        <meta
          name="description"
          content="Gerador de Cartão de Crédito para testes de desenvolvimento de software."
        />
      </Head>

      <VStack justifyContent="center" flex="1" spacing="10">
        <HStack>
          <Button onClick={() => onGenerate(CreditCardBrand.MASTERCARD)}>
            Mastercard
          </Button>
          <Button onClick={() => onGenerate(CreditCardBrand.VISA)}>Visa</Button>
        </HStack>

        <CreditCardComponent brand={creditCard.brand}>
          <VStack alignItems="stretch" spacing={5}>
            <HStack spacing={5} alignItems="center">
              <Heading as="h2" size="md" fontFamily="mono">
                {creditCard.number}
              </Heading>
              <CopyButton variant="ghost" size="sm" text={creditCard.number} />
            </HStack>

            <HStack spacing={5} alignItems="center">
              <Heading as="h2" size="md" fontFamily="mono">
                {creditCard.expirity}
              </Heading>
              <CopyButton
                variant="ghost"
                size="sm"
                text={creditCard.expirity}
              />
            </HStack>

            <HStack spacing={5} alignItems="center">
              <Heading as="h2" size="md" fontFamily="mono">
                {creditCard.cvv}
              </Heading>
              <CopyButton variant="ghost" size="sm" text={creditCard.cvv} />
            </HStack>
          </VStack>
        </CreditCardComponent>
      </VStack>
    </>
  )
}

export default CreditCard
