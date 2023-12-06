import { useGLTF } from "@react-three/drei";
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from "react";

Building.propTypes = {
    setLoad: PropTypes.func,
};


export default function Building({ setLoad }) {
    const { nodes, materials } = useGLTF("models/building/scene.gltf");
    const isPanorama = useSelector((state) => state.statePanorama.isActive);

    useEffect(() => {
        nodes && materials && setLoad(false);
    }, [nodes, materials, setLoad])

    return (
        <group rotation={[-Math.PI / 2, 0, 0]} visible={!isPanorama}>
            <mesh geometry={nodes.Object_2.geometry} material={materials.tex_u1_v1} />
            <mesh geometry={nodes.Object_3.geometry} material={materials.tex_u1_v1} />
            <mesh geometry={nodes.Object_4.geometry} material={materials.tex_u1_v1} />
            <mesh geometry={nodes.Object_5.geometry} material={materials.tex_u1_v1} />
            <mesh geometry={nodes.Object_6.geometry} material={materials.tex_u1_v1} />
            <mesh geometry={nodes.Object_7.geometry} material={materials.tex_u1_v1} />
        </group>
    );
}

useGLTF.preload("models/building/scene.gltf");
