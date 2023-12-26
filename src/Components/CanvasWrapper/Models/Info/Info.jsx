import { useGLTF, useAnimations } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { useRef, useEffect } from "react";
import * as THREE from 'three';

import matcapWhite from '/material/white.png';
import matcapRed from '/material/red.png';

export default function Info() {
    const group = useRef();
    const { nodes, animations } = useGLTF("models/info/info.gltf");
    const { actions, names } = useAnimations(animations, group);
    const [textureWhite] = useLoader(THREE.TextureLoader, [matcapWhite]);
    const [textureRed] = useLoader(THREE.TextureLoader, [matcapRed]);

    useEffect(() => {
        actions[names[0]].reset().fadeIn(0.5).play();
    }, [actions, names]);

    return (
        <group ref={group} rotation={[Math.PI / 2.2, 0, Math.PI / 2]}>
            <group name="Curve" position={[0.02, -0.002, -0.082]} scale={11.236}>
                <mesh name="Curve_1" geometry={nodes.Curve_1.geometry} morphTargetDictionary={nodes.Curve_1.morphTargetDictionary} morphTargetInfluences={nodes.Curve_1.morphTargetInfluences}>
                    <meshMatcapMaterial matcap={textureWhite} side={THREE.DoubleSide} />
                </mesh>
                <mesh name="Curve_2" geometry={nodes.Curve_2.geometry} morphTargetDictionary={nodes.Curve_2.morphTargetDictionary} morphTargetInfluences={nodes.Curve_2.morphTargetInfluences}>
                    <meshMatcapMaterial matcap={textureRed} side={THREE.DoubleSide} />
                </mesh>
                <mesh name="Curve_3" geometry={nodes.Curve_3.geometry} morphTargetDictionary={nodes.Curve_3.morphTargetDictionary} morphTargetInfluences={nodes.Curve_3.morphTargetInfluences} >
                    <meshMatcapMaterial matcap={textureWhite} side={THREE.DoubleSide} />
                </mesh>
            </group>
        </group>
    );
}

useGLTF.preload('models/arrows/arrow.glb')