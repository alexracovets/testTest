import { useLoader } from '@react-three/fiber';
import { Capsule } from '@react-three/drei';
import PropTypes from 'prop-types';
import { useRef } from 'react';
import * as THREE from 'three';

import matcapGray from '/material/gray.png';

Rod.propTypes = {
    sections: PropTypes.array,
};

export default function Rod() {
    const [grayTexture] = useLoader(THREE.TextureLoader, [matcapGray]);
    const meshRef = useRef();
    const height = 13.4;
    const radius = 0.3;

    return (
        <Capsule ref={meshRef} args={[radius, height, 10, 10]} position={[0, 1 + height / 2, 50]} rotation={[0, 0, 0]} computeBoundingBox>
            <meshMatcapMaterial matcap={grayTexture} />
        </Capsule>
    );
} 