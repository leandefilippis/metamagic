import React from 'react'

const D20 = ({ color, position, args, envMapIntensity, rougness, metalness }) => {
    return (
        <mesh castShadow receiveShadow position={position} >
            <icosahedronGeometry />
            <meshStandardMaterial 
                color={color}
                envMapIntensity={envMapIntensity}
                roughness={rougness}
                metalness={metalness}
            />
        </mesh>
    )   
}

export default D20