import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Button, Textarea, useColorModeValue, VStack } from '@chakra-ui/react'

import AppCodeBlock from '@/components/app-code-block'

const JsonPretty = () => {
  const [json, setJson] = React.useState('')
  const [prettyJson, setPrettyJson] = React.useState('')
  const [isInvalid, setIsInvalid] = React.useState(false)

  const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50')

  const handleJsonChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value === '') {
      setIsInvalid(false)
    }

    setJson(e.target.value)
  }

  const handlePrettify = () => {
    try {
      setPrettyJson(JSON.stringify(JSON.parse(json), null, 4))
    } catch (e) {
      setIsInvalid(true)
    }
  }

  const handleNew = () => {
    setJson('')
    setPrettyJson('')
    setIsInvalid(false)
  }

  return (
    <>
      <Head>
        <title>Gerador | JSON Pretty</title>
        <meta
          name="description"
          content="Gerador de JSON Pretty, para facilitar a visualização de JSONs."
        />
      </Head>

      <VStack flex="1" justifyContent="center" spacing="5">
        {prettyJson.length > 0 ? (
          <>
            <Button onClick={handleNew}>New Pretty</Button>

            <motion.div
              key={'pretty-json'}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <AppCodeBlock language="JSON" code={prettyJson} />
            </motion.div>
          </>
        ) : (
          <>
            <Button disabled={json.length === 0} onClick={handlePrettify}>
              Prettify
            </Button>

            <Textarea
              as={motion.textarea}
              key={'json'}
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition="0.2s linear"
              maxWidth="container.sm"
              height="31.25rem"
              resize="none"
              bg={bg}
              placeholder="{}"
              value={json}
              onChange={handleJsonChange}
              isInvalid={isInvalid}
            />
          </>
        )}
      </VStack>
    </>
  )
}

export default JsonPretty
