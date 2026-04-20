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
          ABOUT ME
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
              My journey in hospitality and events has been fulfilling, working with industry leaders including 
              Hyundai Genesis, WeWork, and ViacomCBS (Comedy Central, TV Land, and Paramount Network). 
              From planning large-scale, multi-million-dollar productions to developing and executing 
              my own creative events, I became drawn to the energy that the industry gave me.  
              <br />
              <br />
              After several years working in the events industry, I took time to expand my skill set in tech, through coursework 
              in software engineering and financial engineering, alongisde experience at an early-stage wellness startup.
              This period of exploration helped me to build skills and a broader understanding of business development,
              products, and the tech industry. Through all of this, I became drawn back to my core 
              strengths in events, particularly within the nonprofit sector. Being surrounded by mission-driven work and people
               during my time in the startup space allowed me to explore my true passion - mission driven work. 
              <br />
              <br />
              Mission-driven work is important to me because it creates space for connection, community, and real impact. I am most 
              fulfilled when the work I do feels meaningful 
              and contributes to something larger than myself. 
              That sense of purpose is what continues to guide the direction of my career.
              <br />
              <br />
              While you&apos;ll find me reminiscing about the amazing memories
              I&apos;ve made producing events, I also continue to code and
              create really cool projects (including this one!) I also have a
              passion for studying geography, animals, traveling, and exploring my next adventure.
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
