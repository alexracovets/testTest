import { useLoader } from '@react-three/fiber';
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { Plane } from '@react-three/drei';
import PropTypes from 'prop-types';
import * as THREE from 'three';
import { gsap } from 'gsap';

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
    const [isAnimate, setIsAnimate] = useState(false);
    const dispatch = useDispatch();
    const [animParameters, setAnimParameters] = useState({
        opacity: 0,
        translate: 2
    })

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

    const animation1 = (isAnimate) => {
        const tl = gsap.timeline({
            delay: .2,
            onUpdate: () => setAnimParameters({ ...animParameters }),
            onComplete: () => setIsAnimate(animParameters.translate === -10 ? true : false)
        })

        if (animParameters.opacity === 0 || animParameters.opacity === 1) {
            tl
                .to(animParameters, {
                    duration: .2,
                    opacity: !isAnimate ? 1 : 0
                })
                .to(animParameters, {
                    duration: isAnimate ? 0 : 1,
                    translate: isAnimate ? 2 : -10
                });
        }

    }

    useEffect(() => {
        cursor(isActive);
    }, [isActive])

    useEffect(() => {
        animation1(isAnimate);
    }, [isAnimate]);
    console.log(animParameters.opacity)
    return (
        <group position={item.position} rotation={item.rotation} scale={[2, 2, 2]}>
            <Arrow position={[animParameters.translate, 0, 0]} texture={texture} opacity={animParameters.opacity} />
            <ArrowsTrans position={[animParameters.translate < -5 ? -5 : animParameters.translate, 0, 0]} texture={texture} opacity={animParameters.opacity} />
            <ArrowsTrans position={[animParameters.translate < -2 ? 0 : animParameters.translate, 0, 0]} texture={texture} opacity={animParameters.opacity} />
            {/* <Plane
                args={[17, 9]}
                position={[5, 0, 0]}
                rotation={[-Math.PI / 2, 0, 0]}
                visible={false}
                onPointerLeave={() => setIsActive(false)}
                onPointerMove={() => setIsActive(true)}
                onClick={(event) => teleport(event, item.to, item.camera)}
            /> */}
        </group>
    );
} 