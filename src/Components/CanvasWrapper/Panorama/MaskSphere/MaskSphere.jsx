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
    const [isActive, setIsActive] = useState(false);
    const [animParam, setAnimParam] = useState({
        opacity: 0
    })

    const openPopUp = () => {
        dispatch(setPanoramMask(true))
    }
    
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
                onClick={() => openPopUp()}
                visible={false}
            />
            <Sphere args={[340 - id, 60, 20]} position={[0, 100, 0]}>
                <meshStandardMaterial map={texture} side={THREE.BackSide} transparent opacity={animParam.opacity} />
            </Sphere>
        </>

    )
}