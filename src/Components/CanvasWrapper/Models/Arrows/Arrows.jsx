import { useLoader } from '@react-three/fiber';
import PropTypes from 'prop-types';
import * as THREE from 'three';

import Arrow from './Arrow';
import ArrowsTrans from './ArrowsTrans';
import matcapYellow from '/material/white.png';
import { Plane } from '@react-three/drei';

Arrows.propTypes = {
    setLoad: PropTypes.func,
    position: PropTypes.array,
    rotation: PropTypes.array
};

export default function Arrows({ position, rotation }) {
    const [texture] = useLoader(THREE.TextureLoader, [matcapYellow]);

    return (
        <group position={position} rotation={rotation} scale={[2, 2, 2]}>
            <Arrow position={[-10, 0, 0]} texture={texture} />
            <ArrowsTrans position={[-5, 0, 0]} texture={texture} />
            <ArrowsTrans position={[-0, 0, 0]} texture={texture} />
            <Plane args={[17, 9]} position={[5, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} visible={false} />
        </group>
    );
} 