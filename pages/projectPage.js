import React, { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, Sky, Html, Cloud } from '@react-three/drei'
import {
  EffectComposer,
  Vignette,
  HueSaturation
} from '@react-three/postprocessing'

import { projects } from '../utilities/projects'
import { motion } from 'framer-motion'
import ProjectCategories from '../components/projectCategories'
import ProjectModal from '../components/projectmodal'
import NavBar from '../components/navBar'
import {
  Flex,
  useDisclosure,
  VStack,
  Link as ChakraLink,
  useBreakpointValue
} from '@chakra-ui/react'

const MotionChakraLink = motion(ChakraLink)

export default function ProjectPage() {
  const [selectedCategory, setSelectedCategory] = useState('VIACOM')
  const [hoveredItem] = useState('')
  const [selectedProject, setSelectedProject] = useState(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  // Modal
  const handleClick = project => {
    setSelectedProject(project)
    onOpen()
  }

  const filteredProjects = projects.filter(
    project => project.category === selectedCategory
  )

  const responsiveStyles = useBreakpointValue({
    base: {
      projectFontSize: '7rem',
      projectPaddingRight: '12rem'
    },
    md: {
      projectFontSize: '9rem',
      projectPaddingRight: '7rem'
    }
  })
  return (
    <>
      {!isOpen && <NavBar />}
      <Flex
        minHeight="100vh"
        width="100vw"
        position="relative"
        overflow="hidden"
      >
        {!isOpen && (
          <ProjectCategories
            selectedCategory={selectedCategory}
            onCategoryClick={setSelectedCategory}
          />
        )}
        <Canvas
          // shadows
          // gl={{ toneMappingExposure: 0.7 }}
          dpr={1}
          camera={{ position: [0, 30, 70], fov: 35 }}
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

          <Cloud
            position={[0, 10, 0]}
            scale={[1, 1, 1]}
            texture="assets/cloud.png"
          />
          <Cloud
            position={[20, 10, 0]}
            scale={[1, 1, 3]}
            texture="assets/cloud.png"
          />
          <Cloud
            position={[50, 30, 0]}
            scale={[1, 10, 3]}
            texture="assets/cloud.png"
          />
          <Html fullscreen transform>
            <VStack
              align="flex-end"
              pr={responsiveStyles?.projectPaddingRight}
              zIndex={0}
              maxH="130vh"
              position="relative"
              visibility={isOpen ? 'hidden' : 'visible'}
              userSelect="none"
            >
              {!isOpen &&
                filteredProjects.map((project, index) => (
                  <MotionChakraLink
                    key={index}
                    sx={{
                      opacity: '1',
                      fontFamily: 'Ailerons',
                      fontSize: responsiveStyles?.projectFontSize,
                      whiteSpace: 'nowrap',
                      cursor: 'crosshair',
                      filter: 'brightness(150%)',
                      color: project.color,
                      WebkitTextStroke: '2px',
                      textShadow: `2px 2px 8px ${project.color}`,
                      WebkitTextStrokeColor: project.color,
                      _hover: {
                        color: project.color,
                        textShadow: `2px 2px 8px ${project.color}`,
                        transition: '1s'
                      }
                    }}
                    onClick={() => handleClick(project)}
                  >
                    {project.name}
                  </MotionChakraLink>
                ))}
            </VStack>
          </Html>
        </Canvas>
        {selectedProject && (
          <ProjectModal
            isOpen={isOpen}
            onClose={onClose}
            project={selectedProject}
            zIndex={10}
          />
        )}
      </Flex>
    </>
  )
}
