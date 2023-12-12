import PropTypes from 'prop-types';
import { Canvas } from "@react-three/fiber";

import BuildingNew from "./Models/Building/BuildingNew";
import Controls from './Controls/Controls';
import Annotations from './Annotations/Annotations';
import Panorama from './Panorama/Panorama';

CanvasWrapper.propTypes = {
    setLoad: PropTypes.func,
};

export default function CanvasWrapper({ setLoad }) {
    return (
        <Canvas
            dpr={window.devicePixelRatio}
            gl={{ preserveDrawingBuffer: true }}
            camera={{ position: [-102, 66, 114], fov: 75, near: 0.1, far: 1000 }}
        >
            <ambientLight intensity={2} />
            <Controls />
            <Annotations />
            <BuildingNew setLoad={setLoad} />
            <Panorama />
        </Canvas>
    )
}