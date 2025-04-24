import { useGLTF } from '@react-three/drei';
export function Matecito(props) {

  const { nodes, materials } = useGLTF('/model/mate.gltf');
  
  Object.values(materials).forEach((material) => {
    material.blending = 0;  
    material.opacity = 1;
  });
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.FRENTE_MATE} />
      <mesh geometry={nodes.Object_5.geometry} material={materials['FRENTE_MATE.1']} />
      <mesh geometry={nodes.Object_6.geometry} material={materials.METAL} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.YERBA} />
      <mesh geometry={nodes.Object_11.geometry} material={materials['METAL.2']} />
    </group>
  )
}

useGLTF.preload('/model/mate.glb')
