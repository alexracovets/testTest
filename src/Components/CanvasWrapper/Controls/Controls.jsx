import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { useSelector } from 'react-redux';
import { damp3 } from 'maath/easing';
import { useRef } from 'react';

export default function Controls() {
    const controls = useRef();
    const { camera, gl: { domElement } } = useThree();
    const cameraParametr = useSelector((state) => state.stateCamera);

    useFrame((state, delta) => {
        if (cameraParametr.isAnimation) {
            damp3(controls.current.target, cameraParametr.target, 0.5, delta);
            damp3(camera.position, cameraParametr.position, 0.5, delta);
        }
    })

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
        />
    )
}