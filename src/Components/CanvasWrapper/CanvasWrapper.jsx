import { Canvas } from "@react-three/fiber";
import { VRButton, XR } from '@react-three/xr'

import Annotations from './Annotations/Annotations';
import Building from "./Models/Building/Building";
import Controls from './Controls/Controls';
import Panorama from './Panorama/Panorama';
export default function CanvasWrapper() {
    return (
        <>   <VRButton />
            <Canvas
                dpr={window.devicePixelRatio}
                gl={{ preserveDrawingBuffer: true }}
                camera={{ fov: 90, near: 0.1, far: 1000, position: [0, 100, 0] }}
            >

                <ambientLight intensity={2} />
                {/* <Controllers /> */}
                {/* <Controls /> */}
                <XR>
                    <Panorama />
                    <Annotations />
                    <Building />
                </XR>


            </Canvas>
        </>

    )
}