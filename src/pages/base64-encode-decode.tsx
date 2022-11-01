import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import {
  Button,
  HStack,
  Textarea,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'

const Base64EncodeDecode = () => {
  const [text, setText] = React.useState('')
  const [base64, setBase64] = React.useState('')
  const [isInvalid, setIsInvalid] = React.useState(false)

  const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50')

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value === '') {
      setIsInvalid(false)
    }

    setText(e.target.value)
  }

  const handleBase64 = (type: string) => {
    try {
      let base64 = ''

      if (type === 'encode') {
        const buffer = Buffer.from(text)
        base64 = buffer.toString('base64')
      } else {
        const buffer = Buffer.from(text, 'base64')
        base64 = buffer.toString()
      }

      setBase64(base64)
    } catch (e) {
      setIsInvalid(true)
    }
  }

  const handleBack = () => {
    setBase64('')
    setIsInvalid(false)
  }

  const handleNew = () => {
    setText('')
    setBase64('')
    setIsInvalid(false)
  }

  return (
    <>
      <Head>
        <title>Gerador | Base64 Encode/Decode</title>
        <meta
          name="description"
          content="Base64 Encode e Decode, para facilitar a visualização de base64."
        />
      </Head>

      <VStack flex="1" justifyContent="center" spacing="5">
        {base64.length > 0 ? (
          <>
            <HStack spacing="5">
              <Button onClick={handleBack}>Editar</Button>
              <Button onClick={handleNew}>Novo</Button>
            </HStack>

            <Textarea
              as={motion.textarea}
              key={'base64'}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition="0.2s linear"
              maxWidth="container.sm"
              height="31.25rem"
              resize="none"
              bg={bg}
              value={base64}
            />
          </>
        ) : (
          <>
            <HStack spacing="5">
              <Button
                disabled={text.length === 0}
                onClick={() => handleBase64('encode')}
              >
                Encode
              </Button>
              <Button
                disabled={text.length === 0}
                onClick={() => handleBase64('decode')}
              >
                Decode
              </Button>
            </HStack>

            <Textarea
              as={motion.textarea}
              key={'text'}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition="0.2s linear"
              maxWidth="container.sm"
              height="31.25rem"
              resize="none"
              bg={bg}
              value={text}
              onChange={handleTextChange}
              isInvalid={isInvalid}
            />
          </>
        )}
      </VStack>
    </>
  )
}

export default Base64EncodeDecode
