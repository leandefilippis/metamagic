//////////////////////////////////////////////// 3D ////////////////////////////////////////////////
import CharacterScene from '../scenes/CharacterScene/CharacterScene'
import { Environment, OrbitControls, Stars } from '@react-three/drei'
import Sphere from '../scenes/models/Sphere'
import Model from '../scenes/models/Model'
import Cylinder from '../scenes/models/Cylinder'
import Cube from '../scenes/models/Box'
import D20 from '../scenes/models/D20'
//////////////////////////////////////////////// 3D ////////////////////////////////////////////////
import Header from '../components/Header'

const Roll = () => {
  return (
    <div className='root'>
        <Header title="Roll" />
        <div className="escena">
            <CharacterScene>
                
            </CharacterScene>
            {/* <CharacterScene>
                <color attach="background" args={['#161c24']} />
                <Sphere color='#fafafa' position={[-3, 0, 0]} />
                <Sphere color='#ff0000' position={[3, 0, 0]}/>
                <Sphere color='#0000ff' position={[0, 0, -3]}/>
                <Sphere color='#f51f7f' position={[0, 0, 3]}/>
                <ambientLight />
                <OrbitControls />
                <Environment preset='city'/>
                <group position={[0, -3, 0]}>
                    <Cylinder color='black' envMapIntensity={1} position={[0, -6, 0]} args={[15, 15, 15, 64]}/>
                    <Cube color='#7a4f82' position={[0, 2.04, 0]} args={[10, 10]} rotation={[-7.855, 0, 0.1]}/>
                    <Cube color='white' position={[0, 2.02, 0]} args={[11, 11]} rotation={[-7.855, 0, 0.1]}/>
                </group>
                <D20 color="#8e00f4" envMapIntensity={0.3} rougness={0} metalness={0} />
                <Stars factor={3} fade speed={1} radius={50}/>
            </CharacterScene> */}
        </div>
    </div>
  )
}

export default Roll