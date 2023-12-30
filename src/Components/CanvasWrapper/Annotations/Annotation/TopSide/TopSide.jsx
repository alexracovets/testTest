
import { useThree, useFrame } from '@react-three/fiber';
import { dampLookAt } from "maath/easing";
import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import Parts from './Parts/Parts';
import Ring from './Ring/Ring';
import SvgImage from './SvgImage/SvgImage';

TopSide.propTypes = {
    colors: PropTypes.array,
    radiusCircle: PropTypes.number,
    thetaRing: PropTypes.number,
    svgOpacity: PropTypes.number,
    heightRod: PropTypes.number,
    isHover: PropTypes.bool,
};

export default function TopSide({ colors, thetaRing, radiusCircle, svgOpacity, heightRod, isHover }) {
    const { camera } = useThree();
    const groupRef = useRef();
    const groupInnerRef = useRef();


    useFrame((state, delta) => {
        dampLookAt(groupRef.current, camera.position, 0.25, delta);
    });

    useEffect(() => {
        gsap.to(groupRef.current.scale, {
            duration: 1,
            x: 1.1,
            y: 1.1,
            z: 1.1,
            repeat: -1,
            ease: "power1.out",
            yoyo: true
        });
    }, []);

    useEffect(() => {
        gsap.to(groupInnerRef.current.scale, {
            duration: 1,
            x: isHover ? 1.3 : 1,
            y: isHover ? 1.3 : 1,
            z: isHover ? 1.3 : 1,
        });
    }, [isHover])

    return (
        <group ref={groupRef} position={[0, heightRod + 6.8, 0]} scale={[1, 1, 1]}>
            <group ref={groupInnerRef} rotation={[Math.PI / 2, 0, 0]}>
                <Parts colors={colors} radius={radiusCircle} />
                <Ring theta={thetaRing} />
                <SvgImage colors={colors} opacity={svgOpacity} />
            </group>
        </group>
    );
}
