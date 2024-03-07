import {
  Modal,
  ModalContent,
  ModalHeader,
  Box,
  ModalCloseButton,
  ModalOverlay,
  useBreakpointValue
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
const MotionModal = motion(Modal)
const MotionModalContent = motion(ModalContent)

const ProjectModal = ({ isOpen, onClose, project }) => {
  const { name, description, projectBg, color } = project

  const responsiveStyles = useBreakpointValue({
    base: {
      titleFontSize: '3.5rem',
      picHeight: '30vh',
      picWidth: '79vw',
      top: '25.5rem',
      contentFontSize: '.9rem',
      showBorder: true,
      descriptionWidth: '17rem',
      picMarginTop: '1rem',
      titlePaddingTop: '1.3rem'
    },
    sm: {
      titleFontSize: '6rem',
      picHeight: '45vh',
      picWidth: '70vw',
      contentFontSize: '1rem',
      descriptionWidth: '29rem'
    },
    md: {
      titleFontSize: '7rem',
      picHeight: '58vh',
      picWidth: '53vw',
      contentFontSize: '1rem',
      descriptionWidth: '40rem',
      picMarginTop: '.1rem',
      titlePaddingTop: '-.2rem'
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
    >
      <ModalOverlay />
      <MotionModalContent
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        // transition={{ duration: 0.3, delay: 0.1 }}
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
          {/* <Carousel
            showStatus={false}
            showThumbs={false}
            transitionTime={1800}
            autoPlay
            interval={4500}
            emulateTouch
            stopOnHover={false}
          > */}
          {projectBg.map((imageUrl, index) => (
            <div key={index}>
              <img
                src={imageUrl}
                alt={`Slide ${index}`}
                style={{
                  height: responsiveStyles?.picHeight,
                  width: responsiveStyles?.picWidth,
                  borderRadius: '2rem',
                  marginTop: responsiveStyles?.picMarginTop
                }}
              />
            </div>
          ))}
          {/* </Carousel> */}
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
