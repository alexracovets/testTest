import { useGLTF, Plane } from "@react-three/drei";
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useEffect } from "react";
import * as THREE from 'three';

Building.propTypes = {
    setLoad: PropTypes.func,
};


export default function Building({ setLoad }) {
    const { nodes, materials } = useGLTF("models/building0/scene.gltf");
    const isPanorama = useSelector((state) => state.statePanorama.isActive);

    const textureLoader = new THREE.TextureLoader();

    const material = new THREE.MeshStandardMaterial({
        map: textureLoader.load('material/grass/color.jpeg'),
        metalnessMap: textureLoader.load('material/grass/roughness.png')
    })

    const planeWidth = 1000;
    material.map.repeat.setScalar(planeWidth / 1000);
    material.map.wrapS = THREE.RepeatWrapping;
    material.map.wrapT = THREE.RepeatWrapping;
    material.map.repeat.y = 100;
    material.map.repeat.x = 100;

    material.metalnessMap.repeat.setScalar(planeWidth / 1000);
    material.metalnessMap.wrapS = THREE.RepeatWrapping;
    material.metalnessMap.wrapT = THREE.RepeatWrapping;
    material.metalnessMap.repeat.y = 100;
    material.metalnessMap.repeat.x = 100;

    useEffect(() => {
        nodes && materials && setLoad(false);
    }, [nodes, materials, setLoad])

    return (
        <>
            <group rotation={[-Math.PI / 2, 0, 0]} visible={!isPanorama}>
                <mesh geometry={nodes.Object_2.geometry} material={materials.tex_u1_v1} />
                <mesh geometry={nodes.Object_3.geometry} material={materials.tex_u1_v1} />
                <mesh geometry={nodes.Object_4.geometry} material={materials.tex_u1_v1} />
                <mesh geometry={nodes.Object_5.geometry} material={materials.tex_u1_v1} />
                <mesh geometry={nodes.Object_6.geometry} material={materials.tex_u1_v1} />
                <mesh geometry={nodes.Object_7.geometry} material={materials.tex_u1_v1} />
            </group>
            <Plane args={[1000, 1000]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} material={material} />
        </>
    );
}

useGLTF.preload("models/building0/scene.gltf");
