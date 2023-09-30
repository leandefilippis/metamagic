import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useLoader } from '@react-three/fiber'

const Model = () => {
    const Sword1 = useLoader(GLTFLoader, '../../models/scene.gltf')
  return (
    <primitive object={Sword1} />
  )
}

export default Model