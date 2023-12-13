import { useSelector, useDispatch } from 'react-redux';
import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import { setActiveAnimation } from '../../../store/reducers/stateCamera';

export default function Controls() {
    const controls = useRef();
    const dispatch = useDispatch();
    const { camera, gl: { domElement } } = useThree();
    const cameraParameter = useSelector((state) => state.stateCamera);
    const isAnnotation = useSelector((state) => state.stateAnnotationsPopUp.isActive);
    const isPanorama = useSelector((state) => state.statePanorama.isActive);

    useEffect(() => {
        if (cameraParameter.isAnimation) {
            const minDistance = isAnnotation ? 0 : cameraParameter.default.minDistance;
            gsap.to(controls.current.target, {
                duration: 1.2,
                x: cameraParameter.target[0],
                y: cameraParameter.target[1],
                z: cameraParameter.target[2],
                ease: "expoScale(0.5,7,none)",
            });
            gsap.to(controls.current, {
                duration: 1.2,
                minDistance: minDistance,
                ease: "expoScale(0.5,7,none)",
            });
            gsap.to(camera.position, {
                duration: 1.2,
                x: cameraParameter.position[0],
                y: cameraParameter.position[1],
                z: cameraParameter.position[2],
                ease: "expoScale(0.5,7,none)",
                onComplete: () => {
                    controls.current.enabled = true;
                    controls.current.update();
                    dispatch(setActiveAnimation(false));
                }
            });
        }

    }, [cameraParameter, camera.position, isAnnotation, dispatch])

    useEffect(() => {
        if (isPanorama) {
            gsap.to(controls.current.target, {
                duration: 1.2,
                x: 13.02,
                y: -30.74,
                z: -32.77
            });
            gsap.to(controls.current, {
                duration: 1.2,
                minDistance: 0.1
            });
            gsap.to(camera.position, {
                duration: 1.2,
                x: 13.21,
                y: -28.63,
                z: -49.76,
            });
        }
    }, [isPanorama, camera.position])
    useFrame(() => {
        console.log(camera.position)
        console.log(controls.current.target)
    })
    return (
        <OrbitControls
            ref={controls}
            args={[camera, domElement]}
            minPolarAngle={isPanorama ? Math.PI / 3.2 : -Math.PI / 2}
            maxPolarAngle={isPanorama ? Math.PI / 1.58 : Math.PI / 2.1}
            zoomSpeed={3}
            panSpeed={0.8}
            rotateSpeed={0.3}
            autoRotate={false}
            autoRotateSpeed={0.5}
            enableZoom={true}
            enablePan={true}
            target={[10, 0, 0]}
            maxDistance={isPanorama ? 0 : 200}
            minDistance={120}
        />
    )
}