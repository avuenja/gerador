import React from 'react'
import Head from 'next/head'
import { Heading, HStack, VStack } from '@chakra-ui/react'

import { onGenerateCreditCard } from '@/utils/credit-card'
import { CreditCardBrand } from '@/enums'
import { ICreditCard } from '@/interfaces'

import { ArrowsClockwise } from 'phosphor-react'
import CopyButton from '@/components/copy-button'
import CreditCardComponent from '@/components/credit-card'
import CardBrandsButton from '@/components/card-brands-button'
import AppButton from '@/components/app-button'
import AppIcon from '@/components/app-icon'
import TextAnimated from '@/components/text-animated'

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
        <CardBrandsButton
          brandType={creditCard.brand}
          onGenerate={onGenerate}
        />

        <CreditCardComponent brand={creditCard.brand}>
          <VStack alignItems="stretch" spacing={5}>
            <HStack spacing={5} alignItems="center">
              <TextAnimated motionKey={creditCard.number}>
                <Heading as="h2" size="md" fontFamily="mono">
                  {creditCard.number}
                </Heading>
              </TextAnimated>
              <CopyButton variant="ghost" size="sm" text={creditCard.number} />
            </HStack>

            <HStack spacing={5} alignItems="center">
              <TextAnimated motionKey={creditCard.expirity}>
                <Heading as="h2" size="md" fontFamily="mono">
                  {creditCard.expirity}
                </Heading>
              </TextAnimated>
              <CopyButton
                variant="ghost"
                size="sm"
                text={creditCard.expirity}
              />
            </HStack>

            <HStack spacing={5} alignItems="center">
              <TextAnimated motionKey={creditCard.cvv}>
                <Heading as="h2" size="md" fontFamily="mono">
                  {creditCard.cvv}
                </Heading>
              </TextAnimated>
              <CopyButton variant="ghost" size="sm" text={creditCard.cvv} />
            </HStack>
          </VStack>
        </CreditCardComponent>

        <HStack>
          <AppButton
            motionKey={creditCard.number}
            tooltip="Gerar novo cartão de crédito"
            aria-label="Re:Gerar"
            icon={<AppIcon icon={ArrowsClockwise} />}
            onClick={() => onGenerate(creditCard.brand)}
          />
        </HStack>
      </VStack>
    </>
  )
}

export default CreditCard
