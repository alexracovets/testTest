import { useGLTF } from '@react-three/drei'
import PropTypes from 'prop-types';

Arrow.propTypes = {
    position: PropTypes.array,
    texture: PropTypes.object
};

export default function Arrow({ position, texture }) {
    const { nodes } = useGLTF('models/arrows/arrow.glb')
    return (
        <group position={position} scale={[2, 0.5, 2]}>
            <mesh name="Plane" geometry={nodes.Plane.geometry} position={[5.122, -0.5, 0]} rotation={[0, Math.PI / 4, 0]} scale={[0.5, 1, 1.35]} >
                <meshMatcapMaterial matcap={texture} transparent={true} opacity={0.9} />
            </mesh>
        </group>
    );
}

useGLTF.preload('models/arrows/arrow.glb')