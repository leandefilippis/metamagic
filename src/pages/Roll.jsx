//////////////////////////////////////////////// MODELS ////////////////////////////////////////////////
import Sphere from '../three/assets/figures/Sphere'
import Model from '../three/assets/figures/Model'
import Cylinder from '../three/assets/figures/Cylinder'
import Cube from '../three/assets/figures/Box'
import D20 from '../three/assets/figures/D20'
//////////////////////////////////////////////// THREE ////////////////////////////////////////////////
import * as THREE from 'three';
import { Environment, OrbitControls, PerspectiveCamera, SpotLight, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
//////////////////////////////////////////////// THREE ////////////////////////////////////////////////
import Header from '../components/Header'
import { useEffect, useRef, Suspense } from 'react';
import Human from '../three/assets/models/Human.jsx'
import { Ground } from '../three/components/Ground'
import { Sky } from '@react-three/drei'
import { CameraControls } from '../three/components/CameraControls'
import Interface from '../three/components/Interface'

const Roll = () => {

  return (
    <div className='root'>
        <Header title="Roll" />
          <Interface />
          <Canvas camera={{position: [1, 1.5, 6], fov: 50}} shadows className='escena'>
            <Suspense fallback={null}>
              <CameraControls />
              <ambientLight />
              <directionalLight position={[-5, 5, 5]} castShadow />
              <group position={[0, -2.5, 0]} castShadow>
                <Sky sunPosition={[100, 100, 20]} />
                <Human />
                <Ground />
              </group>
            </Suspense>
          </Canvas>
    </div>
  )
}

export default Roll