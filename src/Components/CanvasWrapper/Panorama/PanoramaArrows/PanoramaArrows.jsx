import { useLoader } from '@react-three/fiber';
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { Plane } from '@react-three/drei';
import PropTypes from 'prop-types';
import * as THREE from 'three';

import Arrow from '../../Models/Arrow/Arrow';
import cursor from '../../../../static/cursor';
import matcapYellow from '/material/white.png';
import ArrowsTrans from '../../Models/Arrow/ArrowTrans';

import { setCameraPosition } from '../../../../store/reducers/statePanorama';

PanoramaArrows.propTypes = {
    item: PropTypes.object,
    isShow: PropTypes.bool,
    setMaterial: PropTypes.func
};

export default function PanoramaArrows({ item, isShow, setMaterial }) {
    const [texture] = useLoader(THREE.TextureLoader, [matcapYellow]);
    const [isActive, setIsActive] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        cursor(isActive);
    }, [isActive])

    const teleport = (event, id, camera) => {
        event.stopPropagation();
        dispatch(setCameraPosition(camera));
        setMaterial((prevMaterial) => {
            return prevMaterial.map((item) => {
                if (item.id === id) {
                    return { ...item, isShow: true }
                } else return { ...item, isShow: false }
            });
        });
    };

    return (
        <group position={item.position} rotation={item.rotation} scale={[2, 2, 2]}>
            <Arrow position={[-10, 0, 0]} texture={texture} isShow={isShow} />
            <ArrowsTrans position={[-5, 0, 0]} texture={texture} isShow={isShow} />
            <ArrowsTrans position={[-0, 0, 0]} texture={texture} isShow={isShow} />
            <Plane
                args={[17, 9]}
                position={[5, 0, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                visible={false}
                onPointerLeave={() => setIsActive(false)}
                onPointerMove={() => setIsActive(true)}
                onClick={(event) => teleport(event, item.to, item.camera)}
            />
        </group>
    );
} 