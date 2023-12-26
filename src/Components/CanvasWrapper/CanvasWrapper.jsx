import { Canvas } from "@react-three/fiber";

import BuildingNew from "./Models/Building/BuildingNew";
import Controls from './Controls/Controls';
import Annotations from './Annotations/Annotations';
import Panorama from './Panorama/Panorama';

export default function CanvasWrapper() {
    return (
        <Canvas
            dpr={window.devicePixelRatio}
            gl={{ preserveDrawingBuffer: true }}
            camera={{ fov: 90, near: 0.1, far: 1000 }}
        >
            <ambientLight intensity={2} />
            <Controls />
            <Annotations />
            <BuildingNew />
            <Panorama />
        </Canvas>
    )
}