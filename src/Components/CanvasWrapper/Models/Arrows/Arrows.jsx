import { useLoader } from '@react-three/fiber';
import PropTypes from 'prop-types';
import * as THREE from 'three';

import Arrow from './Arrow';
import ArrowsTrans from './ArrowsTrans';
import matcapYellow from '/material/white.png';

Arrows.propTypes = {
    setLoad: PropTypes.func,
    position: PropTypes.array
};

export default function Arrows({ position }) {
    const [texture] = useLoader(THREE.TextureLoader, [matcapYellow]);

    return (
        <group position={position} scale={[2, 2, 2]}>
            <Arrow position={[-10, 0, 0]} texture={texture} />
            <ArrowsTrans position={[-5, 0, 0]} texture={texture} />
            <ArrowsTrans position={[-0, 0, 0]} texture={texture} />
        </group>
    );
} 