import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CameraModes, useConfigurator } from "../contexts/Configurator";
import * as THREE from 'three'

const cameraPositions = {
    [CameraModes.HEAD]: {
        position: new THREE.Vector3(-0.5, 1.5, 1),
        target: new THREE.Vector3(0, 1.5, 0)
    },
    [CameraModes.TOP]: {
        position: new THREE.Vector3(-0.5, 0.8, 2),
        target: new THREE.Vector3(0, 0.2, 0)
    },
    [CameraModes.BOTTOM]: {
        position: new THREE.Vector3(-0, -1, 3),
        target: new THREE.Vector3(0, -1.5, 0)
    }
}

export const CameraControls = () => {
    const {cameraMode, setCameraMode} = useConfigurator()
    const orbitControls = useRef()

    useFrame((state, delta) => {
        if(cameraMode === CameraModes.FREE){
            return
        }
        state.camera.position.lerp(cameraPositions[cameraMode].position, 3 * delta)
        orbitControls.current.target.lerp(cameraPositions[cameraMode].target, 3 * delta)
    })

    return(
        <>
            <OrbitControls 
                ref={orbitControls} 
                onStart={() => {
                    setCameraMode(CameraModes.FREE)
                }}
            />
        </>
    )
}