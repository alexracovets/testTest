import { Torus } from '@react-three/drei';
import PropTypes from 'prop-types';
import * as THREE from 'three';

TorusElement.propTypes = {
    whiteTexture: PropTypes.object,
    radius: PropTypes.number,
    width: PropTypes.number,
    theta: PropTypes.number
};

export default function TorusElement({ whiteTexture, theta, width, radius }) {

    return (
        <Torus args={[radius, width, 20, 80, theta]} rotation={[Math.PI / 2, 0, (Math.PI - theta) / 2]}>
            <meshMatcapMaterial matcap={whiteTexture} side={THREE.DoubleSide} />
        </Torus>
    );
}
