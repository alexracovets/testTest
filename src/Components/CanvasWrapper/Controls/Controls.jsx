import { useSelector } from 'react-redux';
import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Controls() {
    const controls = useRef();
    const { camera, gl: { domElement } } = useThree();
    const cameraParameter = useSelector((state) => state.stateCamera);
    const isAnnotation = useSelector((state) => state.stateAnnotationsPopUp.isActive);
    const panorama = useSelector((state) => state.statePanorama);

    const animationCamera = (cameraParameter, camera, isAnnotation) => {
        gsap.to(controls.current.target, {
            duration: 1,
            x: cameraParameter.target[0],
            y: cameraParameter.target[1],
            z: cameraParameter.target[2],
            ease: "expoScale(0.5,7,none)",
        });
        gsap.to(controls.current, {
            duration: 1,
            minDistance: isAnnotation ? 0 : cameraParameter.default.minDistance,
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

    const animationCameraPanorama = (camera, panorama) => {
        controls.current.target.set(0, 100, 0)
        controls.current.minDistance = 0.1;
        gsap.to(camera.position, {
            duration: .6,
            x: panorama.cameraPosition[0],
            y: panorama.cameraPosition[1],
            z: panorama.cameraPosition[2],
        });
    }

    useEffect(() => {
        panorama.isActive ? animationCameraPanorama(camera, panorama) : animationCamera(cameraParameter, camera, isAnnotation);
    }, [cameraParameter, camera, panorama, isAnnotation])

    useFrame(() => {
        // console.log(camera.position)
    })

    return (
        <OrbitControls
            ref={controls}
            args={[camera, domElement]}
            minPolarAngle={panorama.isActive ? Math.PI / 2.6 : -Math.PI / 2}
            maxPolarAngle={panorama.isActive ? Math.PI / 1.65 : Math.PI / 2.1}
            zoomSpeed={3}
            rotateSpeed={-0.3}
            autoRotate={false}
            autoRotateSpeed={0.5}
            enableZoom={true}
            enablePan={true}
            maxDistance={panorama.isActive ? 0 : 165}
            minDistance={120}
        />
    )
}