import PropTypes from 'prop-types';
import { Canvas } from "@react-three/fiber";

import Building from "./Models/Building/Building";
import Controls from './Controls/Controls';
import Annotations from './Annotations/Annotations';

CanvasWrapper.propTypes = {
    setLoad: PropTypes.func,
};

export default function CanvasWrapper({ setLoad }) {
    return (
        <Canvas
            dpr={window.devicePixelRatio}
            gl={{ preserveDrawingBuffer: true }}
            camera={{ position: [-102, 66, 114], fov: 60, near: 0.1, far: 1000 }}
        >
            <ambientLight intensity={2} />
            <Controls />
            <Annotations />
            <Building setLoad={setLoad} />
        </Canvas>
    )
}