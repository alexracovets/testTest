import { useLoader } from '@react-three/fiber';
import PropTypes from 'prop-types';
import * as THREE from 'three';

import Arrow from './Arrow';
import ArrowsTrans from './ArrowsTrans';
import matcapYellow from '/material/yellow3.png';

Arrows.propTypes = {
    setLoad: PropTypes.func,
    position: PropTypes.array
};

export default function Arrows({ position }) {
    const [yellowTexture] = useLoader(THREE.TextureLoader, [matcapYellow]);

    return (
        <group position={position} scale={[2, 2, 2]}>
            <Arrow position={[-10, 0, 0]} texture={yellowTexture} />
            <ArrowsTrans position={[-5, 0, 0]} texture={yellowTexture} />
            <ArrowsTrans position={[-0, 0, 0]} texture={yellowTexture} />
        </group>
    );
} 