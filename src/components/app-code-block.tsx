import { Box, useColorModeValue } from '@chakra-ui/react'
import GlobalTheme from '@atlaskit/theme/components'
import { CodeBlock, type SupportedLanguages } from '@atlaskit/code'

import CopyButton from './copy-button'

interface AppCodeBlockProps {
  code: string
  language: SupportedLanguages
  showLineNumbers?: boolean
}

const AppCodeBlock = ({
  code,
  language,
  showLineNumbers,
}: AppCodeBlockProps) => {
  const blockTheme = useColorModeValue('light', 'dark')

  return (
    <Box width="90vw" maxWidth="container.sm" position="relative">
      <CopyButton position="absolute" top="2" right="2" text={code} />

      <GlobalTheme.Provider value={() => ({ mode: blockTheme })}>
        <Box height="31.25rem" overflow="auto">
          <CodeBlock
            language={language}
            showLineNumbers={showLineNumbers ?? false}
            text={code}
          />
        </Box>
      </GlobalTheme.Provider>
    </Box>
  )
}

export default AppCodeBlock
