import React from 'react'
import { Box, VStack, Image } from '@chakra-ui/react'
import Link from 'next/link'
import { FaLinkedin, FaGithub, FaEnvelope, FaPaperclip } from 'react-icons/fa'
import { motion } from 'framer-motion'
import Logo from '../public/assets/logo/logo.png'

const iconStyle = {
  fontSize: '1rem',
  color: 'white',
  userSelect: 'none'
}

export default function MobileAboutNavBar() {
  return (
    <div>
      <Box position="fixed" zIndex="1" top=".5rem" right=".3rem">
        <Link href="/" passHref>
          <Image
            src={Logo.src}
            alt="Logo"
            w="100px"
            style={{ cursor: 'crosshair' }}
          />
        </Link>
      </Box>
      <VStack
        spacing={8}
        position="absolute"
        flexDirection="row"
        bottom=".5rem"
        zIndex="2"
        left="50%"
        transform="translateX(-50%)"
      >
        <a
          href="https://www.linkedin.com/in/sydneydavid/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.span whileHover={{ color: 'pink' }} style={iconStyle}>
            <FaLinkedin />
          </motion.span>
        </a>
        <a
          href="https://github.com/sydney-rd"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.span whileHover={{ color: 'pink' }} style={iconStyle}>
            <FaGithub />
          </motion.span>
        </a>
        <a
          href="mailto:sydneydavid56@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.span whileHover={{ color: 'pink' }} style={iconStyle}>
            <FaEnvelope />
          </motion.span>
        </a>
        <a
          href="/assets/Sydney-David-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.span whileHover={{ color: 'pink' }} style={iconStyle}>
            <FaPaperclip />
          </motion.span>
        </a>
      </VStack>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        style={iconStyle}
      ></motion.div>
    </div>
  )
}
