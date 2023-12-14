import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useMemo } from "react";
import * as THREE from 'three';

import MaskSphere from './MaskSphere/MaskSphere';
import loadTextures from '../../../static/loadTextures';
import PanoramaArrows from './PanoramaArrows/PanoramaArrows';
import PanoramaSphere from './PanoramaSphere/PanoramaSphere';
import { setIsLoad } from '../../../store/reducers/statePanorama';

export default function Panorama() {
    const dispatch = useDispatch();
    const panorama = useSelector((state) => state.statePanorama);
    const textureLoader = useMemo(() => new THREE.TextureLoader(), []);
    const [material, setMaterial] = useState([]);
    const [texturesLoaded, setTexturesLoaded] = useState([]);

    useEffect(() => {
        if (!panorama.isActive) { setTexturesLoaded([]); setMaterial([]) }
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

    return <>
        {
            panorama.isLoad && material.map((panoram) => {
                return <group key={panoram.id}>
                    <PanoramaSphere id={panoram.id} texture={panoram.current} isShow={panoram.isShow} />
                    {
                        panoram.isShow &&
                        <>
                            {panoram.interactive.arrow.map((item, index) => <PanoramaArrows key={index} item={item} isShow={panoram.isShow} setMaterial={setMaterial} />)}
                            {panoram.interactive.mask.map((item, index) => <MaskSphere key={index} id={panoram.id + 1} texture={textureLoader.load(item.image)} args={item.args} />)}
                        </>
                    }
                </group>
            })
        }
    </>
}