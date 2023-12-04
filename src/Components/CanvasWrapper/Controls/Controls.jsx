import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { useSelector } from 'react-redux';
import { damp3 } from 'maath/easing';
import { useRef } from 'react';

export default function Controls() {
    const cameraParametr = useSelector((state) => state.stateCamera);
    const controls = useRef();
    const {
        camera,
        gl: { domElement },
    } = useThree();

    useFrame((state, delta) => {
        damp3(controls.current.target, cameraParametr.target, 0.5, delta);
        // console.log(camera.position)
        // camera.position.x += 0.1
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