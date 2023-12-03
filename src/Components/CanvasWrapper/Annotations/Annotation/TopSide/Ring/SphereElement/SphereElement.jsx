import { Sphere } from '@react-three/drei';
import PropTypes from 'prop-types';
import * as THREE from 'three';

SphereElement.propTypes = {
    whiteTexture: PropTypes.object,
    radius: PropTypes.number,
    width: PropTypes.number,
    radiusCircle: PropTypes.number
};

export default function SphereElement({ whiteTexture, radius, width, radiusCircle }) {
    return (
        <group rotation={[Math.PI / 2, 0, (Math.PI - radius) / 2]}>
            <Sphere args={[width, 10, 10]} position={[radiusCircle, 0, 0]}>
                <meshMatcapMaterial matcap={whiteTexture} side={THREE.FrontSide} />
            </Sphere>
        </group>
    );
}
