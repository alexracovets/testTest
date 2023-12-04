import { useLoader } from '@react-three/fiber';
import { Capsule, Sphere } from '@react-three/drei';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import * as THREE from 'three';

import matcapGray from '/material/gray.png';
import matcapYellow from '/material/yellow3.png';

Rod.propTypes = {
    height: PropTypes.number,
    wrapperYPossition: PropTypes.number
};

export default function Rod({ height }) {
    const [grayTexture] = useLoader(THREE.TextureLoader, [matcapGray]);
    const [yellowTexture] = useLoader(THREE.TextureLoader, [matcapYellow]);
    const meshRef = useRef();
    const radius = 0.3;

    return (
        <>
            <Capsule ref={meshRef} args={[radius, height, 10, 10]} position={[0, height / 2 + 1, 0]} rotation={[0, 0, 0]} computeBoundingBox>
                <meshMatcapMaterial matcap={grayTexture} />
            </Capsule>
            <Sphere args={[1, 20, 20]} position={[0, 1, 0]}>
                <meshMatcapMaterial matcap={yellowTexture} />
            </Sphere>
        </>

    );
} 