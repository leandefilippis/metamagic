import React from 'react'

const Cylinder = ({ color, position, args, envMapIntensity, rougness, metalness }) => {
    return (
        <mesh position={position}>
            <cylinderGeometry args={args}/>
            <meshStandardMaterial 
                color={color}
                envMapIntensity={envMapIntensity}
                roughness={rougness}
                metalness={metalness}
            />
        </mesh>
    )   
}

export default Cylinder