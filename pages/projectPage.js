import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sky, Stars, Html } from '@react-three/drei'
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
          camera={{ position: [0, 5, 30] }}
          style={{ width: '100vw', height: '100vh' }}
        >
          <OrbitControls autoRotate autoRotateSpeed={0.3} maxDistance={60} />
          <Sky sunPosition={[0, 0, 0]} />
          <Stars fade />
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
                      color:
                        hoveredItem === project.name
                          ? project.color
                          : 'transparent',
                      WebkitTextStroke: '2px',
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
