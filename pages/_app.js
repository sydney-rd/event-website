import React, { useState, useEffect } from 'react'
import { ChakraProvider, Progress } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Layout from '../components/layouts/main'
import '../styles.css'

const Website = ({ Component, pageProps, router }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress(prevProgress => prevProgress + 33.33)
    }, 1000)

    setTimeout(() => {
      clearInterval(timer)
      setIsLoading(false)
    }, 3000)
  }, [])

  const pageVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  }

  const pageTransition = {
    duration: 1
  }

  return (
    <ChakraProvider>
      {isLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100vw',
            height: '100vh',
            backgroundColor: '#8cacc4',
            color: 'white',
            fontSize: '2rem'
          }}
        >
          <Progress
            value={loadingProgress}
            size="sm"
            w="20%"
            colorScheme="blue"
          />
        </div>
      ) : (
        <div style={{ backgroundColor: '#8cacc4' }}>
          <motion.div
            key={router.route}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={pageTransition}
          >
            <Layout router={router}>
              <Component {...pageProps} key={router.route} />
            </Layout>
          </motion.div>
        </div>
      )}
    </ChakraProvider>
  )
}

export default Website
