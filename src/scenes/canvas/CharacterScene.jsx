import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sky } from '@react-three/drei'
import { Physics } from '@react-three/cannon'
import { Ground } from '../components/Ground'
import { FPV as Fpv } from '../components/FPV'
import { Player } from '../components/Player'
import '../../scss/style.scss'

const CharacterScene = ({ children }) => {
  return (
    // <Suspense fallback={null}>
    //   <Canvas 
    //     shadows
    //     camera={{position: [0, 30, 60], fov: 15}}
    //   >
    //     {children}
    //   </Canvas>
    // </Suspense>
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <Fpv />
        <Physics>
          <Player />
          <Ground />
        </Physics>
      </Canvas>
      <div className='pointer'>+</div>
    </>
  )
}

export default CharacterScene