import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Heading, HStack, VStack } from '@chakra-ui/react'
import { ArrowsClockwise, MaskHappy, MaskSad } from 'phosphor-react'

import {
  onGenerateCNPJ,
  onGenerateCPF,
  onGenerateRG,
  onSetMask,
} from '@/utils/document'
import { DocumentType } from '@/enums'

import AppIcon from '@/components/app-icon'
import AppButton from '@/components/app-button'
import ServicesButton from '@/components/services-button'
import CopyButton from '@/components/copy-button'

const Home: NextPage = () => {
  const [documentType, setDocumentType] = React.useState(DocumentType.CPF)
  const [document, setDocument] = React.useState('')
  const [mask, setMask] = React.useState(true)

  React.useEffect(() => {
    onGenerate(documentType)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onGenerate = (type: DocumentType) => {
    setDocumentType(type)
    let doc = ''

    if (type === DocumentType.CPF) {
      doc = onGenerateCPF(mask)
    } else if (type === DocumentType.CNPJ) {
      doc = onGenerateCNPJ(mask)
    } else if (type === DocumentType.RG) {
      doc = onGenerateRG(mask)
    }

    setDocument(doc)
  }

  const onToggleMask = (mask: boolean) => {
    setMask(mask)

    if (mask) {
      setDocument((document) => {
        return onSetMask(document, documentType)
      })
    } else {
      setDocument((document) => document.replace(/[^\d]/g, ''))
    }
  }

  return (
    <>
      <Head>
        <title>Gerador | CPF/CNPJ e RG</title>
        <meta
          name="description"
          content="Gerador de CPF/CNPJ/RG válidos para testes de desenvolvimento."
        />
      </Head>

      <VStack alignItems="center" justifyContent="center" flex="1" spacing="10">
        <ServicesButton documentType={documentType} onGenerate={onGenerate} />

        <Heading as="h2">{document}</Heading>

        <HStack>
          <CopyButton text={document} />
          <AppButton
            motionKey={mask ? 'mask-happy' : 'mask-sad'}
            tooltip={mask ? 'Sem máscara' : 'Com máscara'}
            aria-label="Toggle Máscara"
            icon={<AppIcon icon={mask ? MaskHappy : MaskSad} />}
            onClick={() => onToggleMask(!mask)}
          />
          <AppButton
            motionKey={document}
            tooltip="Gerar novo documento"
            aria-label="Re:Gerar"
            icon={<AppIcon icon={ArrowsClockwise} />}
            onClick={() => onGenerate(documentType)}
          />
        </HStack>
      </VStack>
    </>
  )
}

export default Home
