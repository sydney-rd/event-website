import React from 'react'
import { Box, Text, useBreakpointValue, useMediaQuery } from '@chakra-ui/react'
import MobileAboutNavBar from '../components/mobileAboutNavBar.js'
import { OrbitControls, Sky, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import AboutNavbar from '../components/aboutNavbar'

export default function About() {
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  const responsiveStyles = useBreakpointValue({
    base: {
      titleFontSize: '1.5rem',
      titleText: 'Software Developer',
      textFontSize: '.7rem',
      maxW: '16rem',
      secTitleFontSize: '1.1rem',
      codeDescriptionFontSize: '.8rem',
      codePaddingTop: '.3rem',
      summaryPaddingTop: '4rem',
      codeTitlePaddingTop: '.2rem',
      textShadow: 'none'
    },
    sm: {
      titleFontSize: '2rem',
      titleText: 'Software\nDeveloper',
      textFontSize: '.8rem',
      maxW: '26rem',
      secTitleFontSize: '1.1rem',
      codeDescriptionFontSize: '.8rem',
      codePaddingTop: '.6rem',
      summaryPaddingTop: '4rem',
      codeTitlePaddingTop: '.6rem',
      textShadow: 'none',
      titleMaxW: '30rem'
    },
    md: {
      titleFontSize: '2.7rem',
      titleText: 'Events→Software Developer',
      textFontSize: '.9rem',
      maxW: '35rem',
      secTitleFontSize: '2rem',
      codeDescriptionFontSize: '.9rem',
      codePaddingTop: '1rem',
      summaryPaddingTop: '5rem',
      codeTitlePaddingTop: '1rem',
      textShadow: '1px 2px 2px pink',
      titleMaxW: '60rem'
    }
  })

  return (
    <Box position="relative" height="100vh">
      {!isMobile && <AboutNavbar />}
      {isMobile && <MobileAboutNavBar />}
      <Canvas style={{ width: '100vw', height: '100vh' }}>
        <OrbitControls autoRotate autoRotateSpeed={0.3} maxDistance={60} />
        <Sky sunPosition={[0, 0, 0]} />
        <Stars fade />
      </Canvas>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          userSelect: 'none'
        }}
      >
        <Box
          letterSpacing="1rem"
          fontWeight="bold"
          fontFamily="Ailerons"
          fontSize={responsiveStyles?.titleFontSize}
          textShadow={responsiveStyles?.textShadow}
          color="white"
          textAlign="center"
          position="fixed"
          top="1rem"
          maxW={responsiveStyles?.titleMaxW}
        >
          {responsiveStyles?.titleText}
        </Box>
        <Box
          color="white"
          fontSize={responsiveStyles?.textFontSize}
          fontFamily="Verdana, Geneva, Tahoma, sans-serif"
          paddingTop={responsiveStyles?.summaryPaddingTop}
          maxW={responsiveStyles?.maxW}
          textAlign="center"
        >
          <Box>
            <Text>
              <br />
              Hi - I am a Software Developer from NYC. My journey began with a
              simple HTML tutorial and since that moment, I challenged myself
              with a career transition to the ever-changing field of tech. I
              took this path because I wanted to continuously learn new things
              every day. I am self-taught and have recently graduated General
              Assembly&apos;s Software Engineering Bootcamp as of May 2023!
              <br />
              <br />
              My background is in Events and Hospitality. I&apos;ve worked with
              companies such as WeWork and ViacomCBS, for Comedy Central,
              Paramount Network, and TVLand. I have worked hands on at
              activations such as the World Pride Parade, Comic-Con, festivals,
              conventions, and more. While you will find me coding day to day, I
              also have a passion for cars, travel, and studying maps and
              geography. I am also an animal lover - cats and my Pitbull mix
              have my heart!
              <br />
              <br />
            </Text>
          </Box>
        </Box>
        <Text
          fontSize={responsiveStyles?.secTitleFontSize}
          fontFamily="Ailerons"
          color="white"
          fontWeight="bold"
          textShadow={responsiveStyles?.textShadow}
          paddingTop={responsiveStyles?.codeTitlePaddingTop}
        >
          What you&apos;ll find me coding in
        </Text>
        <Text
          color="white"
          fontSize={responsiveStyles?.codeDescriptionFontSize}
          fontFamily="verdana, Geneva, Tahoma, sans-serif"
          maxW="40rem"
          textAlign="center"
          paddingTop={responsiveStyles?.codePaddingTop}
        >
          <strong>Languages</strong> <br /> JavaScript, Python, C/C++
          <br />
          <br />
          <strong>Databases</strong> <br /> MongoDB, SQL
          <br />
          <br />
          <strong>Web Dev</strong> <br /> React, Next.js, Express,
          <br /> React-Three-Fiber, HTML, <br /> CSS, Tailwind, Chakra-UI,
          Framer Motion
        </Text>
      </Box>
    </Box>
  )
}
