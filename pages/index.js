import React from 'react'
import { Flex } from '@chakra-ui/react'
import Title from '../components/title'
import SpinningLogo from '../components/spinningLogo.js'

export default function Index() {
  return (
    <Flex
      direction="column"
      backgroundSize="cover"
      width="100vw"
      height="100vh"
      bg="black"
      overflow="hidden"
    >
      <Title />
      <SpinningLogo />
    </Flex>
  )
}
