import { Sphere } from "@react-three/drei";
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { gsap } from 'gsap';

PanoramaSphere.propTypes = {
    id: PropTypes.number,
    texture: PropTypes.object,
    isShow: PropTypes.bool
};
export default function PanoramaSphere({ id, texture, isShow }) {
    const [animParam, setAnimParam] = useState({
        opacity: 0
    })

    const animOpcity = (opacity) => {
        gsap.to(animParam, {
            duration: .6,
            opacity: opacity,
            ease: "sine.inOut",
            onUpdate: () => setAnimParam({ ...animParam })
        })
    }

    useEffect(() => {
        isShow ? animOpcity(1) : animOpcity(0);
    }, [isShow])

    return (
        <Sphere args={[350 - id, 60, 60]} scale={[1, 1, 1]} position={[0, 100, 0]}>
            <meshStandardMaterial map={texture} side={THREE.BackSide} transparent opacity={animParam.opacity} />
        </Sphere>
    )
}