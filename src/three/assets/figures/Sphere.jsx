import React from 'react'

const Sphere = ({ color, position, args, envMapIntensity, rougness, metalness }) => {
    return (
        <mesh position={position}>
            <sphereGeometry args={args} />
            <meshStandardMaterial 
                color={color}
                envMapIntensity={envMapIntensity}
                roughness={rougness}
                metalness={metalness}
            />
        </mesh>
    )   
}

export default Sphere