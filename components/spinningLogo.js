import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html } from '@react-three/drei'
import Logo from '../public/assets/logo/logo.png'
import { ChakraProvider, useBreakpointValue } from '@chakra-ui/react'

const SpinningLogo = () => {
  const responsiveStyles = useBreakpointValue({
    base: {
      logoPaddingRight: '2.5rem',
      logoWidth: '50%',
      logoHeight: '50%',
      logoPaddingTop: '3rem'
    },
    md: {
      logoPaddingRight: '4rem',
      logoWidth: '30%',
      logoHeight: '30%',
      logoPaddingTop: '11rem'
    }
  })
  return (
    <ChakraProvider>
      <Canvas style={{ zIndex: '1', position: 'absolute', top: 0, left: 0 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls autoRotate autoRotateSpeed={3.5} />
        <Html position={[0, 0, 0]} transform>
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              userSelect: 'none',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <img
              src={Logo.src}
              alt="SDLogo"
              style={{
                width: responsiveStyles?.logoWidth,
                height: responsiveStyles?.logoHeight,
                paddingRight: responsiveStyles?.logoPaddingRight,
                paddingTop: responsiveStyles?.logoPaddingTop
              }}
            />
          </div>
        </Html>
      </Canvas>
    </ChakraProvider>
  )
}

export default SpinningLogo
