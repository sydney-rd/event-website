import React from 'react'
import { Box, Text, useBreakpointValue, useMediaQuery } from '@chakra-ui/react'
import MobileAboutNavBar from '../components/mobileAboutNavBar.js'
import AboutNavbar from '../components/aboutNavbar'
import { OrbitControls, Sky, Stars } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export default function About() {
  const [isMobile] = useMediaQuery('(max-width: 768px)')

  const responsiveStyles = useBreakpointValue({
    base: {
      titleFontSize: '2rem',
      textFontSize: '.7rem',
      maxW: '17rem',
      summaryPaddingTop: '.5rem',
      titleMaxW: '11rem'
    },
    sm: {
      titleFontSize: '2rem',
      textFontSize: '.8rem',
      maxW: '26rem',
      summaryPaddingTop: '4rem',
      titleMaxW: '30rem'
    },
    md: {
      titleFontSize: '4rem',
      textFontSize: '.9rem',
      maxW: '35rem',
      summaryPaddingTop: '1rem',
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
          letterSpacing=".4rem"
          fontWeight="bold"
          fontFamily="Ailerons"
          fontSize={responsiveStyles?.titleFontSize}
          color="white"
          textAlign="center"
          position="fixed"
          textShadow="2px 2px 4px #5F1DA9"
          top="2rem"
          maxW={responsiveStyles?.titleMaxW}
        >
          EVENTS
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
              <br />
              <br />
              <br />
              I embarked on journey inside the world of hospitality and events,
              working for industry giants like Hyundai Genesis, WeWork, and
              ViacomCBS for Comedy Central, TVLand, and Paramount Network. My
              experience spans from building events from the ground up to
              managing the execution of multi-million dollar productions, both
              which fueled my passion for events.
              <br />
              <br />I thrive on creativity and immersing myself in the world of
              experiential marketing, partnerships, and business development.
              Working in events is a gratifying journey, witnessing the results
              of hard work and seeing your event come to life.
              <br />
             
              <br />
              While you&apos;ll find me reminiscing about the amazing memories
              I&apos;ve made producing events, I also continue to code daily and
              create really cool projects (including this one!) I also have a
              passion for studying geography, cars, cats, and my pitbull-mix!
              <br />
              <br />
            </Text>
            <br />
            <br />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
