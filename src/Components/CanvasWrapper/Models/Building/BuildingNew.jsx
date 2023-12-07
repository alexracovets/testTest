import { useGLTF } from "@react-three/drei";
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from "react";

BuildingNew.propTypes = {
    setLoad: PropTypes.func,
};


export default function BuildingNew({ setLoad }) {
    const { nodes, materials } = useGLTF('models/building1/scene.gltf');
    const isPanorama = useSelector((state) => state.statePanorama.isActive);

    useEffect(() => {
        nodes && materials && setLoad(false);
    }, [nodes, materials, setLoad])

    return (
        <group scale={0.01} visible={!isPanorama}>
            <group scale={100}>
                <mesh geometry={nodes.Cube002_Material001_0.geometry} material={materials['Material.001']} />
                <mesh geometry={nodes.Cube002_Material001_0_1.geometry} material={materials['Material.001']} />
                <mesh geometry={nodes.Cube002_Material001_0_2.geometry} material={materials['Material.001']} />
                <mesh geometry={nodes.Cube002_Material001_0_3.geometry} material={materials['Material.001']} />
                <mesh geometry={nodes.Cube002_Material001_0_4.geometry} material={materials['Material.001']} />
                <mesh geometry={nodes.Cube002_Material001_0_5.geometry} material={materials['Material.001']} />
                <mesh geometry={nodes.Cube002_Material001_0_6.geometry} material={materials['Material.001']} />
                <mesh geometry={nodes.Cube002_Material001_0_7.geometry} material={materials['Material.001']} />
                <mesh geometry={nodes.Cube002_Material001_0_8.geometry} material={materials['Material.001']} />
                <mesh geometry={nodes.Cube002_Material001_0_9.geometry} material={materials['Material.001']} />
                <mesh geometry={nodes.Cube002_Material001_0_10.geometry} material={materials['Material.001']} />
                <mesh geometry={nodes.Cube002_Material001_0_11.geometry} material={materials['Material.001']} />
                <mesh geometry={nodes.Cube002_Material001_0_12.geometry} material={materials['Material.001']} />
                <mesh geometry={nodes.Cube002_Material001_0_13.geometry} material={materials['Material.001']} />
                <mesh geometry={nodes.Cube002_Material001_0_14.geometry} material={materials['Material.001']} />
                <mesh geometry={nodes.Cube002_Material001_0_15.geometry} material={materials['Material.001']} />
                <mesh geometry={nodes.Cube002_Material001_0_16.geometry} material={materials['Material.001']} />
                <mesh geometry={nodes.Cube002_Material001_0_17.geometry} material={materials['Material.001']} />
                <mesh geometry={nodes.Cube002_Material001_0_18.geometry} material={materials['Material.001']} />
                <mesh geometry={nodes.Cube002_Material001_0_19.geometry} material={materials['Material.001']} />
                <mesh geometry={nodes.Cube002_Material001_0_20.geometry} material={materials['Material.001']} />
                <mesh geometry={nodes.Cube002_Material001_0_21.geometry} material={materials['Material.001']} />
                <mesh geometry={nodes.Cube002_Material001_0_22.geometry} material={materials['Material.001']} />
                <mesh geometry={nodes.Cube002_Material001_0_23.geometry} material={materials['Material.001']} />
            </group>
        </group>
    );
}

useGLTF.preload("models/building1/scene.gltf");
