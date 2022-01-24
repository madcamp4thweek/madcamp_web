/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/mac-draco.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-1.58, 9.21, -0.1]}>
        <mesh geometry={nodes.Cube008.geometry} material={nodes.Cube008.material} />
        <mesh geometry={nodes.Cube008_1.geometry} material={materials['matte.001']} />
        <mesh geometry={nodes.Cube008_2.geometry} material={materials['screen.001']} />
      </group>
      <mesh geometry={nodes.keyboard.geometry} material={materials.keys} position={[-1.26, 1.9, 5.86]} />
      <group position={[-1.35, 1.85, 10.43]}>
        <mesh geometry={nodes.Cube002.geometry} material={nodes.Cube002.material} />
        <mesh geometry={nodes.Cube002_1.geometry} material={materials.trackpad} />
      </group>
      <mesh geometry={nodes.touchbar.geometry} material={materials.touchbar} position={[-1.42, 1.81, 2.28]} />
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} />
    </group>
  )
}

useGLTF.preload('/mac-draco.gltf')
