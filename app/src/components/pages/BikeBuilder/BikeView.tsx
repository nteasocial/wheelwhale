
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'

import BikeFrame from './bikeFrame.gltf'

type GLTFResult = GLTF & {
  nodes: {
    Cylinder: THREE.Mesh
  }
  materials: {}
}

const BikeFrame = (props: JSX.IntrinsicElements['group']) => {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF('./../../../../public/bikeFrame.gltf') as GLTFResult
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Empty002" position={[-1.64, 0.17, 0]} />
        <group name="Empty003" position={[1.1, 0.07, 0]} />
        <group name="Empty004" position={[0.45, 1.39, 0]} rotation={[0, 0, -0.31]} />
        <group name="Empty005" position={[-1.05, 1.44, 0]} rotation={[0, 0, -0.39]} />
        <mesh
          name="Cylinder"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={nodes.Cylinder.material}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/bikeFrame.gltf')


const BikeView = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <BikeFrame />
    </Canvas>
  );
};

export default BikeView;
