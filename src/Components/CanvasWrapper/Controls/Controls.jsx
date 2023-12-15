import { useSelector, useDispatch } from 'react-redux';
import { OrbitControls } from "@react-three/drei";
import {  useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import { setActiveAnimation } from '../../../store/reducers/stateCamera';

export default function Controls() {
    const controls = useRef();
    const dispatch = useDispatch();
    const { camera, gl: { domElement } } = useThree();
    const cameraParameter = useSelector((state) => state.stateCamera);
    const isAnnotation = useSelector((state) => state.stateAnnotationsPopUp.isActive);
    const panorama = useSelector((state) => state.statePanorama);

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
        if (panorama.isActive) { 
            controls.current.target.set(0, 100, 0)
            controls.current.minDistance = 0.1;
            gsap.to(camera.position, {
                duration: .6,
                x: panorama.cameraPosition[0],
                y: panorama.cameraPosition[1],
                z: panorama.cameraPosition[2]
            });
        }
    }, [panorama, camera.position])

    return (
        <OrbitControls
            ref={controls}
            args={[camera, domElement]}
            minPolarAngle={panorama.isActive ? Math.PI / 2.7 : -Math.PI / 2}
            maxPolarAngle={panorama.isActive ? Math.PI / 1.65 : Math.PI / 2.1}
            zoomSpeed={3}
            rotateSpeed={-0.3}
            autoRotate={false}
            autoRotateSpeed={0.5}
            enableZoom={true}
            enablePan={true}
            target={[10, 0, 0]}
            maxDistance={panorama.isActive ? 0 : 200}
            minDistance={120}
        />
    )
}