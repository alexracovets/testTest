import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useMemo } from "react";
import * as THREE from 'three';

import Arrows from "../Models/Arrows/Arrows";
import loadTextures from '../../../static/loadTextures';
import PanoramaSphere from './PanoramaSphere/PanoramaSphere';
import { setIsLoad } from '../../../store/reducers/statePanorama';

export default function Panorama() {
    const dispatch = useDispatch();
    const panorama = useSelector((state) => state.statePanorama);
    const textureLoader = useMemo(() => new THREE.TextureLoader(), []);
    const [material, setMaterial] = useState([]);
    const [texturesLoaded, setTexturesLoaded] = useState([]);

    useEffect(() => {
        if (!panorama.isActive) {
            setTexturesLoaded([]);
            setMaterial([]);
        }
    }, [panorama])

    useEffect(() => {

        panorama.isActive &&
            !panorama.isLoad &&
            panorama.panoramCurrent &&
            panorama.panoramCurrent.length &&
            panorama.panoramCurrent.length > 0 &&
            loadTextures(panorama, textureLoader, setTexturesLoaded, setMaterial);

    }, [panorama, textureLoader]);

    useEffect(() => {

        texturesLoaded.length &&
            texturesLoaded.length === panorama.panoramCurrent.length &&
            texturesLoaded.length > 0 &&
            texturesLoaded.every((loaded) => loaded === true) &&
            setTimeout(() => dispatch(setIsLoad(true)), 2000)

    }, [texturesLoaded, panorama.panoramCurrent, dispatch]);

    const teleport = (event, id) => {
        event.stopPropagation();
        setMaterial((prevMaterial) => {
            return prevMaterial.map((item) => {
                if (item.id === id) {
                    return { ...item, isShow: true }
                } else return { ...item, isShow: false }
            });
        });
    };

    return (
        <>
            {
                panorama.isLoad && material.map((item) => {
                    return (
                        <group key={item.id}>
                            <PanoramaSphere id={item.id} texture={item.current} isShow={item.isShow} />
                            {item.isShow &&
                                item.interactive.arrow.map((item, index) =>
                                    <group key={index} onClick={(event) => teleport(event, item.to)}>
                                        <Arrows position={item.position} rotation={item.rotation} />
                                    </group>
                                )
                            }
                        </group>
                    )
                })
            }
        </>
    )
}