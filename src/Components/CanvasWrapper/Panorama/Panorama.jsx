import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useMemo } from "react";
import * as THREE from 'three';

import Arrows from "../Models/Arrows/Arrows";
import PanoramaSphere from './PanoramaSphere/PanoramaSphere';
import { setIsLoad } from '../../../store/reducers/statePanorama';

export default function Panorama() {
    const dispatch = useDispatch();
    const panorama = useSelector((state) => state.statePanorama);
    const textureLoader = useMemo(() => new THREE.TextureLoader(), []);
    const [material, setMaterial] = useState([]);
    const [texturesLoaded, setTexturesLoaded] = useState([]);

    const loadTextures = async (panorama, textureLoader) => {
        const newArray = await Promise.all(
            panorama.panoramCurrent.map(async (item, index) => {
                const texture = await textureLoader.loadAsync(item.current);
                setTexturesLoaded((prevTextures) => [...prevTextures, true]);
                return {
                    current: texture,
                    cameraPosition: panorama.panoramCurrent[index].cameraPosition,
                    isShow: panorama.panoramCurrent[index].isShow,
                    interactive: panorama.panoramCurrent[index].interactive,
                    id: panorama.panoramCurrent[index].id
                };
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
            setTimeout(() => dispatch(setIsLoad(true)), 2000)
        }
    }, [texturesLoaded, panorama.panoramCurrent.length, dispatch]);

    const teleport = (event, id) => {
        event.stopPropagation();
        setMaterial((prevMaterial) => {
            return prevMaterial.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        isShow: true,
                    };
                }
                return {
                    ...item,
                    isShow: false,
                };
            });
        });
        console.log(id);
    };

    return (
        <>
            {
                panorama.isLoad && material.map((item) => {
                    return (
                        <group key={item.id}>
                            <PanoramaSphere id={item.id} texture={item.current} isShow={item.isShow} />
                            {item.isShow &&
                                item.interactive.arrow.map((item, index) => {
                                    return (
                                        <group key={index} onClick={(event) => teleport(event, item.to)}>
                                            <Arrows position={item.position} rotation={item.rotation} />
                                        </group>
                                    )
                                })
                            }
                        </group>
                    )
                })
            }
        </>
    )
}