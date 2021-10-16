import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

type Props = JSX.IntrinsicElements["group"] & {
  // Can't be interface since base type includes optinal arguments
  geometry: THREE.BufferGeometry;
  position: THREE.Vector3;
  orientation: THREE.Euler;
};

const BikePart = (props: Props) => {
  const geometry = props.geometry; // Include geometry instead?
  const position = props.position;
  const orientation = props.orientation;
  const material = new THREE.MeshStandardMaterial({color: '#CB347E', roughness: 0});

  const group = useRef<THREE.Mesh>();

  //{...props}
  return (
    <group ref={group} dispose={null}>
      <mesh
        //name="FRAME"
        castShadow
        receiveShadow
        geometry={geometry}
        position={position}
        rotation={orientation}
        material={material}
      />
    </group>
  );
};

export default BikePart;
