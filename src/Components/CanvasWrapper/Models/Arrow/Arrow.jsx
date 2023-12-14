import { useEffect, useState } from "react";
import { useGLTF } from '@react-three/drei';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';

Arrow.propTypes = {
    position: PropTypes.array,
    texture: PropTypes.object,
    isShow: PropTypes.bool
};

export default function Arrow({ position, texture, isShow }) {
    const { nodes } = useGLTF('models/arrows/arrow.glb');
    const [isActive, setIsActive] = useState(false);
    const [animParam, setAnimParam] = useState({
        opacity: 0
    })

    const animOpcity = (opacity) => {
        gsap.to(animParam, {
            duration: .3,
            delay: 0.7,
            opacity: opacity,
            ease: "sine.inOut",
            onUpdate: () => setAnimParam({ ...animParam })
        })
    }
    useEffect(() => {
        setIsActive(isShow)
    }, [isShow])

    useEffect(() => {
        isActive ? animOpcity(0.9) : animOpcity(0);
    }, [isActive])

    return (
        <group position={position} scale={[2, 0.5, 2]}>
            <mesh name="Plane" geometry={nodes.Plane.geometry} position={[5.122, -0.5, 0]} rotation={[0, Math.PI / 4, 0]} scale={[0.5, 1, 1.35]} >
                <meshMatcapMaterial matcap={texture} transparent={true} opacity={animParam.opacity} />
            </mesh>
        </group>
    );
}

useGLTF.preload('models/arrows/arrow.glb')