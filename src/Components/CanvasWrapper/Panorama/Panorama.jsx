import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useMemo } from "react";
import { Sphere } from "@react-three/drei";
import * as THREE from 'three';

import { setIsLoad } from '../../../store/reducers/statePanorama';

import Arrows from "../Models/Arrows/Arrows";

export default function Panorama() {
    const dispatch = useDispatch();
    const panorama = useSelector((state) => state.statePanorama);
    const textureLoader = useMemo(() => new THREE.TextureLoader(), []);
    const [material, setMaterial] = useState([]);
    const [texturesLoaded, setTexturesLoaded] = useState([]);

    const loadTextures = async (panorama, textureLoader) => {
        const newArray = await Promise.all(
            panorama.panoramCurrent.map(async (item) => {
                const texture = await textureLoader.loadAsync(item.current);
                setTexturesLoaded((prevTextures) => [...prevTextures, true]);
                return { current: texture };
            })
        );
        setMaterial((prevMaterial) => [...prevMaterial, ...newArray]);
    };

    useEffect(() => {
        if (!panorama.isActive) {
            setTexturesLoaded([]);
            setMaterial([]);
        }
    }, [panorama])

    useEffect(() => {
        panorama.isActive &&
            !panorama.isLoad &&
            panorama.panoramCurrent.length &&
            panorama.panoramCurrent.length > 0 &&
            loadTextures(panorama, textureLoader);
    }, [panorama, textureLoader]);

    useEffect(() => {
        if (texturesLoaded.length === panorama.panoramCurrent.length && texturesLoaded.length > 0 && texturesLoaded.every((loaded) => loaded === true)) {
            setTimeout(() => {
                dispatch(setIsLoad(true));
            }, 2000)
        }

    }, [texturesLoaded, panorama.panoramCurrent.length, dispatch]);
    console.log(texturesLoaded)
    return (
        <>
            {
                panorama.isLoad && <>
                    <Sphere args={[700, 60, 60]} visible={panorama.isActive}>
                        {material.map((item, index) => <meshStandardMaterial key={index} map={item.current} side={THREE.BackSide} />)}
                    </Sphere>
                    <Arrows position={[0, 50, -100]} />
                </>
            }
        </>
    )
}