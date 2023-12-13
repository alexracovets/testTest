import { Sphere } from "@react-three/drei";
import PropTypes from 'prop-types';
import * as THREE from 'three';

PanoramaSphere.propTypes = {
    id: PropTypes.number,
    texture: PropTypes.object,
    isShow: PropTypes.bool
};
export default function PanoramaSphere({ id, texture, isShow }) {

    return (
        <Sphere args={[500 - id, 60, 60]} scale={[1, 1, 1]}>
            <meshStandardMaterial map={texture} side={THREE.BackSide} transparent opacity={isShow ? 1 : 0} />
        </Sphere>
    )
}