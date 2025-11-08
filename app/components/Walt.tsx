import { useGLTF } from "@react-three/drei";

function Walter() {
  const { nodes, materials } = useGLTF("/walter.gltf");
  console.log(nodes);

  return (
    <group>
      <mesh
        geometry={nodes.WalterBody?.geometry}
        material={materials.WalterMaterial}
      />
      <mesh
        geometry={nodes.Umbrella?.geometry}
        material={materials.UmbrellaMaterial}
        position={[0, 2, 0]}
      />
    </group>
  );
}
