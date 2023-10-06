import {
  Modal,
  ModalContent,
  ModalHeader,
  Box,
  ModalCloseButton,
  ModalOverlay,
  Flex,
  useBreakpointValue
} from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionModal = motion(Modal)
const MotionModalContent = motion(ModalContent)

const ProjectModal = ({ isOpen, onClose, project }) => {
  const { name, description, projectBg, color } = project

  const responsiveStyles = useBreakpointValue({
    base: {
      titleFontSize: '3.5rem',
      gifHeight: '24vh',
      gifWidth: '72vw',
      top: '19.5rem',
      contentFontSize: '.9rem',
      showBorder: true,
      descriptionWidth: '12rem',
      gifMarginTop: '0rem',
      titlePaddingTop: '1.3rem'
    },
    sm: {
      titleFontSize: '6rem',
      gifHeight: '45vh',
      gifWidth: '70vw',
      contentFontSize: '1rem',
      descriptionWidth: '29rem'
    },
    md: {
      titleFontSize: '7rem',
      gifHeight: '53vh',
      gifWidth: '48vw',
      contentFontSize: '1rem',
      descriptionWidth: '43rem',
      gifMarginTop: '-.6rem',
      titlePaddingTop: '-.5rem'
    }
  })
  return (
    <MotionModal
      isOpen={isOpen}
      onClose={onClose}
      size="full"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4 }}
    >
      <ModalOverlay />
      <MotionModalContent
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        textAlign="center"
        backgroundColor="transparent"
        border="solid"
        borderColor={color}
        borderRadius="2rem"
        zIndex={1}
        position="relative"
        userSelect="none"
      >
        <ModalHeader
          sx={{
            fontFamily: 'Ailerons',
            fontSize: responsiveStyles?.titleFontSize,
            textAlign: 'center',
            color: color,
            textShadow: `0px 0px 4px ${color}`,
            paddingTop: responsiveStyles?.titlePaddingTop
          }}
        >
          {name}
        </ModalHeader>
        <ModalCloseButton
          sx={{
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            left: '49.5%',
            transform: 'translateX(-50%)',
            size: 'xl',
            cursor: 'crosshair',
            color: color,
            zIndex: 10,
            '&:focus': {
              boxShadow: 'none'
            }
          }}
        />
        {/* picture */}
        <Box display="flex" justifyContent="center">
          <Box
            sx={{
              backgroundImage: `url(${projectBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: responsiveStyles?.gifHeight,
              width: responsiveStyles?.gifWidth,
              borderRadius: '2rem',
              zIndex: 2,
              marginTop: responsiveStyles?.gifMarginTop
            }}
          />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: responsiveStyles?.top,
            bottom: '.2rem',
            fontSize: responsiveStyles?.contentFontSize,
            color: 'white',
            fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            overflowY: responsiveStyles?.showBorder ? 'scroll' : 'visible',
            borderTop: responsiveStyles?.showBorder
              ? `1px solid ${color}`
              : 'none',
            borderBottom: responsiveStyles?.showBorder
              ? `1px solid ${color}`
              : 'none',
            padding: responsiveStyles?.showBorder ? '.5rem' : 0
          }}
        >
          <p
            style={{
              width: responsiveStyles?.descriptionWidth,
              paddingBottom: '1rem'
            }}
          >
            {description}
          </p>
        </Box>
      </MotionModalContent>
    </MotionModal>
  )
}

export default ProjectModal
