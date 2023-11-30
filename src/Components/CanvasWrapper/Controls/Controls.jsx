import { useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";

export default function Controls() {
    const {
        camera,
        gl: { domElement },
    } = useThree();
    const controls = useRef();
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