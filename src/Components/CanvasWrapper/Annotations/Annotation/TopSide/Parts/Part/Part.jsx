import { useLoader } from '@react-three/fiber';
import PropTypes from 'prop-types';
import * as THREE from 'three';

import { Cylinder, Ring } from '@react-three/drei';
import matcapWhite from '/material/white.png';

Part.propTypes = {
    index: PropTypes.number,
    color: PropTypes.string,
    thetaLength: PropTypes.number,
    length: PropTypes.number,
    radius: PropTypes.number,
};

export default function Part({ index, color, thetaLength, length, radius }) {
    const [whiteTexture] = useLoader(THREE.TextureLoader, [matcapWhite]);
    
    return (
        <group>
            <Ring args={[5 - radius, 5, 50, 50, thetaLength * index, thetaLength]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
                <meshStandardMaterial color={color} side={THREE.DoubleSide} />
            </Ring>
            {length > 1 &&
                <group rotation={[-Math.PI / 2, 0, thetaLength * index]}>
                    <Cylinder args={[0.2, 0.2, 5, 20, 20, false,]} position={[0, -2.5, 0]} rotation={[0, 0, 0]}>
                        <meshMatcapMaterial matcap={whiteTexture} />
                    </Cylinder>
                </group>
            }
        </group>
    );
}
