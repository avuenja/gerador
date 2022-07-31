import { useClipboard, type ButtonProps } from '@chakra-ui/react'
import { Check, CopySimple } from 'phosphor-react'

import AppButton from './app-button'
import AppIcon from './app-icon'

interface CopyButtonProps extends ButtonProps {
  text: string
}

const CopyButton = ({ text, ...props }: CopyButtonProps) => {
  const { hasCopied, onCopy } = useClipboard(text)

  return (
    <AppButton
      motionKey={hasCopied ? 'copied' : 'copy'}
      tooltip={hasCopied ? 'Copiado!' : 'Copiar'}
      aria-label="Copiar documento gerado"
      icon={<AppIcon icon={hasCopied ? Check : CopySimple} />}
      onClick={onCopy}
      {...props}
    />
  )
}

export default CopyButton
