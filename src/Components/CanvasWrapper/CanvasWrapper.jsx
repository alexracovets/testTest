import { Canvas } from "@react-three/fiber";

import Annotations from './Annotations/Annotations';
import Building from "./Models/Building/Building";
import Controls from './Controls/Controls';
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
            <Building />
            <Panorama />
        </Canvas>
    )
}