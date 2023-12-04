import { useSelector, useDispatch } from 'react-redux';
import { OrbitControls } from "@react-three/drei";
import { useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

import { setActiveAnimation } from '../../../store/reducers/stateCamera';

export default function Controls() {
    const controls = useRef();
    const dispatch = useDispatch();
    const { camera, gl: { domElement } } = useThree();
    const cameraParameter = useSelector((state) => state.stateCamera);
    const isAnnotation = useSelector((state) => state.stateAnnotationsPopUp.isActive);

    useEffect(() => {
        if (cameraParameter.isAnimation) {
            gsap.to(controls.current.target, {
                duration: 1,
                x: cameraParameter.target[0],
                y: cameraParameter.target[1],
                z: cameraParameter.target[2],
                ease: "expoScale(0.5,7,none)",
            });
            gsap.to(controls.current, {
                duration: 1,
                minDistance: isAnnotation ? 0 : 120,
                ease: "expoScale(0.5,7,none)",
            });
            gsap.to(camera.position, {
                duration: 1,
                x: cameraParameter.position[0],
                y: cameraParameter.position[1],
                z: cameraParameter.position[2],
                ease: "expoScale(0.5,7,none)",
                onUpdate: () => {
                    controls.current.enabled = false;
                    controls.current.update();
                },
                onComplete: () => {
                    controls.current.enabled = true;
                    controls.current.update();
                    dispatch(setActiveAnimation(false));
                }
            });
        }

    }, [cameraParameter.position, cameraParameter.target, cameraParameter.isAnimation, camera.position, isAnnotation, dispatch])

    return (
        <OrbitControls
            ref={controls}
            args={[camera, domElement]}
            minPolarAngle={-Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            zoomSpeed={2}
            panSpeed={0.8}
            rotateSpeed={0.3}
            autoRotate={false}
            autoRotateSpeed={0.5}
            enableZoom={true}
            enablePan={false}
            target={[10, 0, 0]}
            maxDistance={200}
            minDistance={120}
        />
    )
}