export function Ground() {
    
    return(
        <mesh rotation={[-Math.PI / 2, 0, 0]} castShadow >
            <planeGeometry args={[3, 3]} />
            <meshStandardMaterial color="green"/>
        </mesh>
    )
}