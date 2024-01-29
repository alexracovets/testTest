import { Canvas } from "@react-three/fiber";
import { VRButton, XR, Controllers, Hands } from '@react-three/xr'

import Annotations from './Annotations/Annotations';
import Building from "./Models/Building/Building";
import Controls from './Controls/Controls';
import Panorama from './Panorama/Panorama';

export default function CanvasWrapper() {
    return (
        <>
            <VRButton />
            <Canvas
                dpr={window.devicePixelRatio}
                gl={{ preserveDrawingBuffer: true }}
                camera={{ fov: 90, near: 0.1, far: 1000 }}
            >
                <XR>
                    {/* <Controllers /> */}
                    <Hands />
                    <ambientLight intensity={2} />
                    <Controls />
                    <Annotations />
                    <Building />
                    <Panorama />
                </XR>
            </Canvas>
        </>

    )
}