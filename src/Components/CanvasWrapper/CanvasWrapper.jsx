import PropTypes from 'prop-types';
import { Canvas } from "@react-three/fiber";

import Building from "./Models/Building/Building";
import Controls from './Controls/Controls';
import Annotations from './Annotations/Annotations';
import { useState } from 'react';

CanvasWrapper.propTypes = {
    setLoad: PropTypes.func,
};

export default function CanvasWrapper({ setLoad }) {
    const [position, setPosition] = useState([-102, 66, 114]);
    return (
        <Canvas
            dpr={window.devicePixelRatio}
            gl={{ preserveDrawingBuffer: true }}
            camera={{ position: position, fov: 75, near: 0.1, far: 1000 }}
        >
            <ambientLight intensity={2} />
            <Controls setPosition={setPosition} />
            <Annotations />
            <Building setLoad={setLoad} />
        </Canvas>
    )
}