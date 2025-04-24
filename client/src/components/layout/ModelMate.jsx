import { Canvas } from "@react-three/fiber";
import { Matecito } from "./model/Matecito";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Environment } from "@react-three/drei";

const ModelMate = () => {
  
  return (
    <div className="mate-contain">
    <Canvas camera={{zoom:1.3, position: [0, 0, 5] }} className="matecito">
        <ambientLight intensity={0.3} />
        <directionalLight intensity={0.8} position={[5, 5, 5]} />
        <directionalLight intensity={1} position={[-5, -5, -5]} />
        <directionalLight intensity={0.8} position={[35, 35, 35]} />
        <directionalLight intensity={0.8} position={[-35, -35, -35]} />
        <directionalLight intensity={0.8} position={[105, 105, 105]} />
        <directionalLight intensity={0.8} position={[-105, -105, -105]} />

        <Environment preset="sunset" />
        <Suspense fallback={null}>
            <Matecito rotation={[0, Math.PI / 4, 0]}   />
        </Suspense>
     <OrbitControls  enableZoom={true}
          autoRotate={true} 
          autoRotateSpeed={2} />
    </Canvas>
  </div>
  )
}

export default ModelMate