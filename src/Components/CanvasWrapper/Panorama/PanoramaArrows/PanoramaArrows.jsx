import { useLoader } from '@react-three/fiber';
import PropTypes, { bool } from 'prop-types';
import { useEffect, useState } from "react";
import { Plane } from '@react-three/drei';
import * as THREE from 'three';

import Arrow from '../../Models/Arrow/Arrow';
import cursor from '../../../../static/cursor';
import matcapYellow from '/material/white.png';
import ArrowsTrans from '../../Models/Arrow/ArrowTrans';

PanoramaArrows.propTypes = {
    position: PropTypes.array,
    rotation: PropTypes.array,
    isShow: bool
};

export default function PanoramaArrows({ position, rotation, isShow }) {
    const [texture] = useLoader(THREE.TextureLoader, [matcapYellow]);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        cursor(isActive);
    }, [isActive])

    return (
        <group position={position} rotation={rotation} scale={[2, 2, 2]}>
            <Arrow position={[-10, 0, 0]} texture={texture} isShow={isShow} />
            <ArrowsTrans position={[-5, 0, 0]} texture={texture} isShow={isShow} />
            <ArrowsTrans position={[-0, 0, 0]} texture={texture} isShow={isShow} />
            <Plane
                args={[17, 9]}
                position={[5, 0, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                visible={false}
                onPointerLeave={() => setIsActive(false)}
                onPointerMove={() => setIsActive(true)}
            />
        </group>
    );
} 