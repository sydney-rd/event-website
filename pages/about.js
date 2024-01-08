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
      titleFontSize: '1.5rem',
      textFontSize: '.7rem',
      maxW: '18rem',
      summaryPaddingTop: '.5rem',
      titleMaxW: '10rem'
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
          letterSpacing="1rem"
          fontWeight="bold"
          fontFamily="Ailerons"
          fontSize={responsiveStyles?.titleFontSize}
          color="white"
          textAlign="center"
          position="fixed"
          textShadow="3px 3px 6px #5F1DA9"
          top="1rem"
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
              I embarked on my professional journey in the vibrant world of
              hospitality and events, working for industry giants like Hyundai
              Genesis, WeWork, and ViacomCBS for Comedy Central, TVLand, and
              Paramount Network. My experience spans from building events from
              the ground up to managing the execution of multi-million dollar
              productions, both which fueled my passion for events.
              <br />
              <br />I thrive on creativity and immersing myself in the world of
              experiential marketing, partnerships, and business development.
              Working in events is not just a job but a gratifying journey,
              witnessing the tangible results of hard work and seeing it come to
              life.
              <br />
              <br />I am also a co-founder to Kalyani, a healthy-lifestyle
              community in the wellness and charity tech space, currently in
              stealth mode, that provides a mobile platform and digital tools
              for its members to track their growth journey and overflow back to
              the community. Here I learned how to code, which has been a very
              rewarding skill, while leading business development, partnerships,
              and events.
              <br />
              <br />
              While you&apos;ll find me reminiscing about the amazing memories
              I&apos;ve made producing events, I also continue to code daily and
              create really cool projects (including this one!) I also have a
              passion for studying geography and cultures, cars, cats, and my
              pitbull-mix!
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
