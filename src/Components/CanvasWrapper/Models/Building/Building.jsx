import { useGLTF } from "@react-three/drei";
import PropTypes from 'prop-types';
import { useEffect } from "react";

Building.propTypes = {
    setLoad: PropTypes.func,
};


export default function Building({ setLoad }) {
    const { nodes, materials } = useGLTF("models/building/scene.gltf");
    useEffect(() => {
        nodes && materials && setLoad(false);
    }, [nodes, materials, setLoad])

    return (
        <group dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh geometry={nodes.Object_2.geometry} material={materials.tex_u1_v1} />
                <mesh geometry={nodes.Object_3.geometry} material={materials.tex_u1_v1} />
                <mesh geometry={nodes.Object_4.geometry} material={materials.tex_u1_v1} />
                <mesh geometry={nodes.Object_5.geometry} material={materials.tex_u1_v1} />
                <mesh geometry={nodes.Object_6.geometry} material={materials.tex_u1_v1} />
                <mesh geometry={nodes.Object_7.geometry} material={materials.tex_u1_v1} />
            </group>
        </group>
    );
}

useGLTF.preload("models/building/scene.gltf");
