import React from 'react'
import { Box, Text, useBreakpointValue, useMediaQuery } from '@chakra-ui/react'
import MobileAboutNavBar from '../components/mobileAboutNavBar.js'
import AboutNavbar from '../components/aboutNavbar'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import {
  EffectComposer,
  Vignette,
  HueSaturation
} from '@react-three/postprocessing'
import CloudScene from '../components/scenes/cloudScene.js'

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
      <Canvas
        camera={{ position: [0, 5, 30] }}
        style={{ width: '100vw', height: '100vh' }}
      >
        <OrbitControls autoRotate autoRotateSpeed={0.3} maxDistance={60} />
        <EffectComposer disableNormalPass multisampling={0}>
          <Vignette offset={0.8} darkness={0.25} />
          <HueSaturation hue={0.1} saturation={0.4} />
        </EffectComposer>
        <Environment
          ground={{ height: 20, scale: 100 }}
          files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/kloppenheim_06_puresky_1k.hdr"
        />
        {CloudScene()}
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
          color="blue"
          textAlign="center"
          position="fixed"
          top="1rem"
          maxW={responsiveStyles?.titleMaxW}
        >
          EVENT MANAGEMENT
        </Box>
        <Box
          color="blue"
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
              the community. Here I learned how to code, while building upon my
              BD and networking skills!
              <br />
              <br />
            </Text>
            <br />
            <br />
            <a
              href="https://sydneyrd-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>
                <u>Check out my tech website!</u>
              </strong>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
