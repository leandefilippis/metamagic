import { OrbitControls, Stage } from "@react-three/drei";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader';


export const ModelRender = () => {
  const containerRef = useRef();
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer();

  useEffect(() => {
    // Configuración de la cámara
    camera.position.z = 5;

    // Configuración del renderizador
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Carga el modelo GLTF
    const loader = new GLTFLoader();

    loader.load('../assets/models/spear_fantasy/scene.gltf', (gltf) => {
      const model = gltf.scene;
      scene.add(model);
    });

    // Agregar iluminación (opcional)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    scene.add(directionalLight);

    // Función de animación
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotación o cualquier otra animación que desees aplicar al modelo
      // model.rotation.x += 0.01;
      // model.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Manejar el cambio de tamaño de la ventana
    // window.addEventListener('resize', () => {
    //   const newWidth = window.innerWidth;
    //   const newHeight = window.innerHeight;

    //   camera.aspect = newWidth / newHeight;
    //   camera.updateProjectionMatrix();

    //   renderer.setSize(newWidth, newHeight);
    // });

    // return () => {
    //   // Limpiar recursos cuando el componente se desmonte
    //   window.removeEventListener('resize', handleResize);
    // };
  }, []);

  return <div ref={containerRef} />;
}

// export const CharacterCreation = () => {
//     return (
//         <>
        
//             <Stage
//                 intensity={1.5}
//                 environment="city"
//                 shadows={{
//                     type: "accumulative",
//                     color: "#fafafa",
//                     colorBlend: 2,
//                     opacity: 2,
//                 }}
//                 adjustCamera={0.9}
//             >
//             <mesh castShadow>
//                 <meshNormalMaterial />
//                 <boxGeometry />
//             </mesh>
//             </Stage>
//             <OrbitControls 
//                 makeDefault
//                 minPolarAngle={0}
//                 maxPolarAngle={Math.PI / 2}
//             />
//         </>
//     );
// };
