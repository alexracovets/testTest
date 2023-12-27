import { Plane, Sphere } from "@react-three/drei";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { gsap } from 'gsap';

import cursor from '../../../../static/cursor';
import { setPanoramMask } from '../../../../store/reducers/stateAnnotationsPopUp';

MaskSphere.propTypes = {
    id: PropTypes.number,
    texture: PropTypes.object,
    args: PropTypes.object
};

export default function MaskSphere({ id, texture, args }) {
    const dispatch = useDispatch();
    const [opacity, setOpacity] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const animParam = { opacity: isActive ? 0 : 1 };
        const animOpacity = (opacity) => {
            gsap.to(animParam, {
                duration: .3,
                opacity: opacity,
                ease: "sine.inOut",
                onUpdate: () => setOpacity(animParam.opacity)
            });
        };

        cursor(isActive);
        isActive ? animOpacity(1) : animOpacity(0);
    }, [isActive]);

    return (
        <>
            <Plane
                args={[args.width, args.height]}
                position={args.position}
                rotation={args.rotation}
                onPointerLeave={() => setIsActive(false)}
                onPointerMove={() => setIsActive(true)}
                onClick={() => dispatch(setPanoramMask(true))}
                visible={false}
            />
            <Sphere args={[340 - id, 60, 20]} position={[0, 100, 0]}>
                <meshStandardMaterial map={texture} side={THREE.BackSide} transparent opacity={opacity} />
            </Sphere>
        </>

    )
}