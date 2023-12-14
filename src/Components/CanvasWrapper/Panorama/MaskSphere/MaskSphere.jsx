import { Plane, Sphere } from "@react-three/drei";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { gsap } from 'gsap';

import cursor from '../../../../static/cursor';

MaskSphere.propTypes = {
    id: PropTypes.number,
    texture: PropTypes.object,
    args: PropTypes.array
};
export default function MaskSphere({ id, texture, args }) {
    const [isActive, setIsActive] = useState(false);
    const [animParam, setAnimParam] = useState({
        opacity: 0
    })

    const animOpcity = (opacity) => {
        gsap.to(animParam, {
            duration: .3,
            opacity: opacity,
            ease: "sine.inOut",
            onUpdate: () => setAnimParam({ ...animParam })
        })
    }

    useEffect(() => {
        cursor(isActive);
        isActive ? animOpcity(1) : animOpcity(0);
    }, [isActive])

    return (
        <>
            <Plane
                args={[args.width, args.height]}
                position={args.position}
                rotation={args.rotation}
                onPointerLeave={() => setIsActive(false)}
                onPointerMove={() => setIsActive(true)}
                visible={false}
            />
            <Sphere args={[500 - id, 60, 60]} position={[0, 100, 0]}>
                <meshStandardMaterial map={texture} side={THREE.BackSide} transparent opacity={animParam.opacity} />
            </Sphere>
        </>

    )
}