import React from 'react'

const Box = ({ color, position, args, envMapIntensity, rougness, metalness, rotation}) => {
    return (
        <mesh castShadow receiveShadow position={position} rotation={rotation}>
            <planeGeometry args={args}/>
            <meshStandardMaterial 
                color={color}
                envMapIntensity={envMapIntensity}
                roughness={rougness}
                metalness={metalness}
            />
        </mesh>
    )   
}

export default Box