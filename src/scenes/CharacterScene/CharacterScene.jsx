import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import './CharacterScene.scss'

const CharacterScene = ({ children }) => {
  return (
    <Suspense fallback={null}>
      <Canvas 
        shadows
        camera={{position: [0, 30, 60], fov: 15}}
      >
        {children}
      </Canvas>
    </Suspense>
  )
}

export default CharacterScene