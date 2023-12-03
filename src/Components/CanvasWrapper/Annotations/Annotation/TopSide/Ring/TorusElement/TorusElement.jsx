import { Torus } from '@react-three/drei';
import PropTypes from 'prop-types';
import * as THREE from 'three';

TorusElement.propTypes = {
    whiteTexture: PropTypes.object,
    radius: PropTypes.number,
    width: PropTypes.number,
    radiusCircle: PropTypes.number
};

export default function TorusElement({ whiteTexture, radius, width, radiusCircle }) {

    return (
        <Torus args={[radiusCircle, width, 20, 80, radius]} rotation={[Math.PI / 2, 0, (Math.PI - radius) / 2]}>
            <meshMatcapMaterial matcap={whiteTexture} side={THREE.DoubleSide} />
        </Torus>
    );
}
