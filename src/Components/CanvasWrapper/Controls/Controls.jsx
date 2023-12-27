import { useSelector } from 'react-redux';
import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Controls() {
    const annotation = useSelector((state) => state.stateAnnotationsPopUp);
    const cameraParameter = useSelector((state) => state.stateCamera);
    const panorama = useSelector((state) => state.statePanorama);
    const [lastInteractionTime, setLastInteractionTime] = useState(Date.now());
    const { camera, gl: { domElement } } = useThree();
    const [isRotate, setIsRotate] = useState(false);
    const controls = useRef();

    // оновлення останього часу руху користувача
    const logInteraction = () => setLastInteractionTime(Date.now());

    // анімація переміщення по 3д мапі
    const animationCamera = (cameraParameter, camera, annotation) => {
        gsap.to(controls.current.target, {
            duration: 1,
            x: cameraParameter.target[0],
            y: cameraParameter.target[1],
            z: cameraParameter.target[2],
            ease: "expoScale(0.5,7,none)",
        });
        gsap.to(controls.current, {
            duration: 1,
            minDistance: annotation ? 0 : cameraParameter.default.minDistance,
            ease: "expoScale(0.5,7,none)",
        });
        gsap.to(camera.position, {
            duration: 1,
            x: cameraParameter.position[0],
            y: cameraParameter.position[1],
            z: cameraParameter.position[2],
            ease: "expoScale(0.5,7,none)"
        });
    }

    //анімація переміщення по панорамі
    const animationCameraPanorama = (camera, panorama) => {
        controls.current.target.set(0, 100, 0)
        controls.current.maxDistance = 100;
        gsap.to(camera.position, {
            duration: .6,
            x: panorama.cameraPosition[0],
            y: panorama.cameraPosition[1],
            z: panorama.cameraPosition[2],
            onComplete: () => controls.current.maxDistance = 0.1
        });
    }

    //анімації камери
    useEffect(() => {
        panorama.isActive ? animationCameraPanorama(camera, panorama) : animationCamera(cameraParameter, camera, annotation.isActive);
    }, [cameraParameter, camera, panorama, annotation.isActive]);

    // встановлення події на оновлення часу користувача
    useEffect(() => {
        domElement.addEventListener('pointerdown', logInteraction);
        domElement.addEventListener('mousemove', logInteraction);
        return () => {
            domElement.removeEventListener('pointerdown', logInteraction);
            domElement.removeEventListener('mousemove', logInteraction);
        }
    }, [domElement]);

    useFrame(() => {
        //перевірка часу останьої події користувача
        const timeSinceInteraction = Date.now() - lastInteractionTime;
        !panorama.isActive && !annotation.isActive && setIsRotate(timeSinceInteraction > 5000 ? true : false)
    });

    return (
        <OrbitControls
            ref={controls}
            args={[camera, domElement]}
            minPolarAngle={panorama.isActive ? Math.PI / 2.6 : -Math.PI / 2}
            maxPolarAngle={panorama.isActive ? Math.PI / 1.65 : Math.PI / 2.1}
            zoomSpeed={3}
            rotateSpeed={panorama.isActive ? -0.3 : 0.3}
            autoRotate={isRotate}
            autoRotateSpeed={0.5}
            enableZoom={true}
            enablePan={true}
            target={[10, 0, 0]}
            maxDistance={panorama.isActive ? 0 : 165}
            minDistance={120}
        />
    )
}