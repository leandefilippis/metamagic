import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';

function Model() {
  const loader = new GLTFLoader();
  let model = null;

  loader.load('../assets/models/wraith/wraith.gltf', (gltf) => {
    model = gltf.scene;
  });

  return (
    <mesh>
      <primitive object={model} />
    </mesh>
  );
}

function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
}

export default Scene;