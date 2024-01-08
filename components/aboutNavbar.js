import React from 'react'
import { Box, useBreakpointValue } from '@chakra-ui/react'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import NavBar from './navBar'
import { motion } from 'framer-motion'

export default function AboutNavbar() {
  const responsiveStyles = useBreakpointValue({
    base: {
      iconFontSize: '.9rem'
    },
    md: {
      iconFontSize: '1.1rem'
    }
  })

  const iconStyle = {
    fontSize: responsiveStyles?.iconFontSize,
    color: 'white',
    cursor: 'pointer'
  }

  return (
    <Box
      position="fixed"
      top="10"
      right="0"
      h="50vh"
      display="flex"
      flexDirection="column"
      paddingRight=".7rem"
      zIndex="1"
    >
      <NavBar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Box pr="7" pt="96">
          <Box pt="6">
            <a
              href="https://www.linkedin.com/in/sydneydavid/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.span whileHover={{ color: 'pink' }} style={iconStyle}>
                <FaLinkedin />
              </motion.span>
            </a>
          </Box>
        </Box>
        <Box pt="8">
          <a
            href="https://github.com/sydney-rd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.span whileHover={{ color: 'pink' }} style={iconStyle}>
              <FaGithub />
            </motion.span>
          </a>
        </Box>
        <Box pt="8">
          <a
            href="mailto:sydneydavid56@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.span whileHover={{ color: 'pink' }} style={iconStyle}>
              <FaEnvelope />
            </motion.span>
          </a>
        </Box>
      </motion.div>
    </Box>
  )
}
