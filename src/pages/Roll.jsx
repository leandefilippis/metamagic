//////////////////////////////////////////////// MODELS ////////////////////////////////////////////////
import Sphere from '../three/assets/figures/Sphere'
import Model from '../three/assets/figures/Model'
import Cylinder from '../three/assets/figures/Cylinder'
import Cube from '../three/assets/figures/Box'
import D20 from '../three/assets/figures/D20'
//////////////////////////////////////////////// THREE ////////////////////////////////////////////////
import * as THREE from 'three';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
//////////////////////////////////////////////// THREE ////////////////////////////////////////////////
import Header from '../components/Header'
import { useEffect, useRef } from 'react';
import { Human } from '../three/assets/models/Human.jsx'

const Roll = () => {
  const ref = useRef()

  return (
    <div className='root'>
        <Header title="Roll" />
        <Canvas className='escena'>
          <mesh ref={ref}>
            <boxGeometry attach="geometry" args={[2,2,2]} />
            <Human size={[2,2,2]}/>
          </mesh>
          <ambientLight />
        <OrbitControls></OrbitControls>
        </Canvas>
    </div>
  )
}

export default Roll