import React from 'react'
import { Cloud } from '@react-three/drei'

export default function CloudScene() {
  return (
    <>
      <Cloud
        position={[0, 10, 0]}
        scale={[1, 1, 1]}
        texture="assets/cloud.png"
      />
      <Cloud
        position={[0, 10, 0]}
        scale={[1, 1, 1]}
        texture="assets/cloud.png"
      />
      <Cloud
        position={[20, 0, 0]}
        scale={[1, 1, 1]}
        texture="assets/cloud.png"
      />
      <Cloud
        position={[10, 10, 10]}
        scale={[10, 10, 10]}
        texture="assets/cloud.png"
      />
    </>
  )
}
