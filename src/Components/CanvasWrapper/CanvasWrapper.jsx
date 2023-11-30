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
            camera={{ position: [5, 100, 5], fov: 75, near: 0.1, far: 1000 }}
        >
            <ambientLight intensity={1} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Controls />
            <Annotations />
            <Building setLoad={setLoad} />
        </Canvas>
    )
}