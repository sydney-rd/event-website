import Head from 'next/head'

import { Flex, Box } from '@chakra-ui/react'
const Main = ({ children }) => {
  return (
    <Flex as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title> Sydney - website </title>
      </Head>
      <Box>{children}</Box>
    </Flex>
  )
}

export default Main
