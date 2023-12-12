import { useGLTF } from '@react-three/drei'
import PropTypes from 'prop-types';
import * as THREE from 'three';

ArrowsTrans.propTypes = {
    position: PropTypes.array,
    texture: PropTypes.object
};

export default function ArrowsTrans({ position, texture }) {
    const { nodes } = useGLTF('models/arrows/arrowTrans.glb')
    return (
        <group position={position} scale={[2, 0.5, 2]}>
            <mesh geometry={nodes.PlaneTransparent1.geometry} color='black' position={[5.113, 0, 0]} rotation={[0, Math.PI / 4, 0]} scale={[0.5, 1, 1.35]}>
                <meshMatcapMaterial matcap={texture} side={THREE.DoubleSide} transparent={true} opacity={0.8} />
            </mesh>
        </group>
    );
}

useGLTF.preload('models/arrows/arrowTrans.glb')