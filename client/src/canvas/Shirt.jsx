import React from 'react'
import { easing } from 'maath';
import { useSnapshot } from 'valtio';
import { useFrame } from '@react-three/fiber';
import { Decal, useGLTF, useTexture } from '@react-three/drei';

import state from '../store';

const Shirt = () => {
    const snap = useSnapshot(state);
    const { nodes, materials } = useGLTF('/shirt.glb');

    const LogoTexture = useTexture(snap.logoDecal);
    const fullTexture = useTexture(snap.fullDecal);
  return (
    <group>
        <mesh
            castShadow
            geometry={nodes.T_Shirt_0.geometry}
        >

        </mesh>
    </group>
  )
}

export default Shirt