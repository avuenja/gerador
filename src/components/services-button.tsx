import { Button, HStack } from '@chakra-ui/react'

import { DocumentType } from '@/enums'

interface ServicesButtonProps {
  documentType: DocumentType
  onGenerate: (type: DocumentType) => void
}

const ServicesButton = ({ documentType, onGenerate }: ServicesButtonProps) => {
  return (
    <HStack>
      <Button
        isActive={documentType === DocumentType.CPF}
        onClick={() => onGenerate(DocumentType.CPF)}
      >
        CPF
      </Button>
      <Button
        isActive={documentType === DocumentType.CNPJ}
        onClick={() => onGenerate(DocumentType.CNPJ)}
      >
        CNPJ
      </Button>
      <Button disabled>RG</Button>
    </HStack>
  )
}

export default ServicesButton
