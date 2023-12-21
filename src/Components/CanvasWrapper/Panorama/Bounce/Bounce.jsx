import { Cylinder, Sphere, Torus } from "@react-three/drei";
import { useLoader } from '@react-three/fiber';
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { gsap } from 'gsap';

import cursor from '../../../../static/cursor';
import { setCameraPosition } from '../../../../store/reducers/statePanorama';

Bounce.propTypes = {
    item: PropTypes.object,
    setMaterial: PropTypes.func
};

export default function Bounce({ item, setMaterial }) {
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(false);
    const [texture] = useLoader(THREE.TextureLoader, ['/material/yellow3.png']);
    const [texture2] = useLoader(THREE.TextureLoader, ['/material/white.png']);
    const [isDown, setIsDown] = useState(false);
    const [renderParameters, setRenderParameters] = useState({
        scale: {
            x: 1,
            y: 1,
            z: 1
        },
        position: {
            y: 30
        }
    })

    const animation = (isDown, transitionY, scale) => {
        gsap.to(renderParameters.position, {
            duration: 1,
            ease: isDown ? "power4.inOut" : "power4.inOut",
            y: transitionY,
            onUpdate: () => setRenderParameters({
                ...renderParameters
            }),
            onComplete: () => {
                setIsDown(renderParameters.position.y === 0 ? true : false)
            }
        })
        gsap.to(renderParameters.scale, {
            duration: .5,
            delay: isDown ? .1 : .6,
            ease: "bounce.out",
            x: scale[0],
            y: scale[1],
            z: scale[2]
        })
    }

    useEffect(() => {
        isDown ? animation(isDown, 30, [1, 1, 1]) : animation(isDown, 0, [3, .1, 3]);
    }, [isDown]);

    const teleport = (event, id, camera) => {
        event.stopPropagation();
        dispatch(setCameraPosition(camera));
        setMaterial((prevMaterial) => {
            return prevMaterial.map((item) => {
                if (item.id === id) {
                    return { ...item, isShow: true }
                } else return { ...item, isShow: false }
            });
        });
    };

    useEffect(() => {
        cursor(isActive);
    }, [isActive]);

    return (
        <group
            onPointerLeave={() => setIsActive(false)}
            onPointerMove={() => setIsActive(true)}
            position={item.position}
            rotation={item.rotation}
            // onClick={(event) => teleport(event, item.to, item.camera)}
        >
            <Sphere args={[3, 60, 60]} position={[0, renderParameters.position.y, 0]} scale={[renderParameters.scale.x, renderParameters.scale.y, renderParameters.scale.z]} >
                <meshMatcapMaterial matcap={texture} />
            </Sphere>
            <Torus args={[10, 0.5, 60, 60]} position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <meshMatcapMaterial matcap={texture2} />
            </Torus>
            <Cylinder args={[10, 10, 30, 10, 10, false]} position={[0, 15, 0]}>
                <meshMatcapMaterial visible={false} />
            </Cylinder>
        </group>
    )
}