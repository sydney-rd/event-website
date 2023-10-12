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
      textFontSize: '.75rem',
      maxW: '18rem',
      summaryPaddingTop: '.5rem'
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
          EVENTS ⟷ TECH
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
              Hi - I&apos;m Sydney.
              <br />
              <br />
              I am deeply passionate about the creative aspects of event
              management and the continous learning opportunities within the
              tech industry. Because of this, I decided to blend my two
              passions, cultivating transferable skills that span both the
              realms of events and software development.
              <br />
              <br />
              My journey began in the dynamic world of Hospitality and Events,
              where I honed my skills working for industry titans such as
              Hyundai Genesis, WeWork, and ViacomCBS. During my tenure at
              WeWork, I not only fostered meaningful relationships with over 100
              businesses but also orchestrated three major events with over 200+
              persons in attendance. My trajectory then led me to ViacomCBS,
              where I helped manage million-dollar events for Comedy Central,
              Paramount Network, and TVLand. I&apos;ve been hands-on in
              creating, executing, and supervising activations at major events
              such as the World Pride Parade, Comic-Con, various festivals, and
              conventions, showcasing my versatility and adaptability in diverse
              environments.
              <br />
              <br />
              While you will find me coding cool projects day to day, I also
              have a passion for cars, travel, and studying maps and geography.
              I am also an animal lover - cats and my Pitbull mix have my heart!
            </Text>
            <br />
            <br />
            <strong>
              Check out my Tech website where I showcase my coding projects!
            </strong>
            <a
              href="https://sydneyrd-portfolio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <br />
              <br />
              <strong>
                <u>My Tech Website</u>
              </strong>
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
