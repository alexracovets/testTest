import { useGLTF, Circle, Sphere } from "@react-three/drei";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from "react";
import * as THREE from 'three';

import { setLoaderStatus } from '../../../../store/reducers/stateLoader';

export default function BuildingNew() {
    const { nodes, materials } = useGLTF('models/building1/scene.gltf');
    const isPanorama = useSelector((state) => state.statePanorama.isActive);
    const [material, setMaterial] = useState();
    const dispatch = useDispatch();

    const textureLoader = new THREE.TextureLoader();

    const getMaterial = () => {
        const material = new THREE.MeshStandardMaterial({
            map: textureLoader.load('material/grass/color.jpeg'),
            metalnessMap: textureLoader.load('material/grass/roughness.png')
        })
        material.map.wrapS = THREE.RepeatWrapping;
        material.map.wrapT = THREE.RepeatWrapping;
        material.map.repeat.y = 120;
        material.map.repeat.x = 120;

        material.metalnessMap.wrapS = THREE.RepeatWrapping;
        material.metalnessMap.wrapT = THREE.RepeatWrapping;
        material.metalnessMap.repeat.y = 100;
        material.metalnessMap.repeat.x = 100;

        return setMaterial(material)
    }

    useEffect(() => {
        getMaterial()
    }, [])

    useEffect(() => {
        if (nodes && materials && material) {
            dispatch(setLoaderStatus(true))
        }
    }, [nodes, materials, material])

    return (
        <>
            <group scale={0.01} visible={!isPanorama} rotation={[-0.01, 0, 0.006]}>
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
            <Circle args={[320, 10]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.46, 0]} material={material} visible={!isPanorama} />
            <Sphere args={[300, 100]} visible={!isPanorama}>
                <meshStandardMaterial color={'#D0F5F7'} side={THREE.DoubleSide} />
            </Sphere>
        </>
    );
}

useGLTF.preload("models/building1/scene.gltf");
