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
      titleText: 'Events',
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
      titleText: 'Events',
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
      titleText: 'Events',
      textFontSize: '.9rem',
      maxW: '35rem',
      secTitleFontSize: '2rem',
      codeDescriptionFontSize: '.9rem',
      codePaddingTop: '1rem',
      summaryPaddingTop: '5rem',
      codeTitlePaddingTop: '1rem',
      textShadow: '1px 2px 2px blue',
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
          color="#0437F2"
          fontSize={responsiveStyles?.textFontSize}
          fontFamily="Verdana, Geneva, Tahoma, sans-serif"
          paddingTop={responsiveStyles?.summaryPaddingTop}
          maxW={responsiveStyles?.maxW}
          textAlign="center"
        >
          <Box>
            <Text>
              <br />
              Hi - I&apos;m Sydney. I am passionate about the creative side of
              Events and the continous learning that Tech provides. I decided to
              blend my two passions, honing transferable skills into both events
              and software development. My background is in Events and
              Hospitality. I&apos;ve worked with companies such as WeWork and
              ViacomCBS, for Comedy Central, Paramount Network, and TVLand. I
              have worked hands on at activations such as the World Pride
              Parade, Comic-Con, festivals, conventions, and more. While you
              will find me coding day to day, I also have a passion for cars,
              travel, and studying maps and geography. I am also an animal lover
              - cats and my Pitbull mix have my heart! where I am self-taught
              and have recently graduated General Assembly&apos;s Software
              Engineering Bootcamp as of May 2023!
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
