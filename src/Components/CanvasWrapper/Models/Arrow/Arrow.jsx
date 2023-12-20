import { useGLTF } from '@react-three/drei';
import PropTypes from 'prop-types';
import * as THREE from 'three'

Arrow.propTypes = {
    position: PropTypes.array,
    texture: PropTypes.object,
    opacity: PropTypes.number
};

export default function Arrow({ position, texture, opacity }) {
    const { nodes } = useGLTF('models/arrows/arrow.glb');

    return (
        <group position={position} scale={[2, 0.5, 2]}>
            <mesh geometry={nodes.Plane.geometry} position={[5.122, -0.5, 0]} rotation={[0, Math.PI / 4, 0]} scale={[0.5, 1, 1.35]}>
                <meshMatcapMaterial matcap={texture} side={THREE.DoubleSide} transparent={true} opacity={opacity} visible={opacity === 0 ? false : true} />
            </mesh>
        </group>
    );
}

useGLTF.preload('models/arrows/arrow.glb')