import { Sphere } from "@react-three/drei";
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

import texture from '/panoram/1.jpg';
import { useSelector } from "react-redux";

export default function Panorama() {
    const isPanorama = useSelector((state) => state.statePanorama.isActive);
    const [grayTexture] = useLoader(THREE.TextureLoader, [texture]); 

    return (
        <>
            <Sphere args={[600, 60, 60]} visible={isPanorama}>
                <meshBasicMaterial map={grayTexture} side={THREE.BackSide} />
            </Sphere>
        </>
    )
}