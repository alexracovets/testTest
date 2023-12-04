
import { useThree, useFrame } from '@react-three/fiber';
import { dampLookAt } from "maath/easing";
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

import Parts from './Parts/Parts';
import Ring from './Ring/Ring';
import Svg from './Svg/Svg';

TopSide.propTypes = {
    colors: PropTypes.array,
    radiusCircle: PropTypes.number,
    thetaRing: PropTypes.number,
    svgOpacity: PropTypes.number,
    heightRod: PropTypes.number,
    id: PropTypes.number,
};

export default function TopSide({ colors, thetaRing, radiusCircle, svgOpacity, heightRod, id, isHover }) {
    const { camera } = useThree();
    const groupRef = useRef();
    const [isScale, setIsScale] = useState();

    useFrame((state, delta) => {
        dampLookAt(groupRef.current, camera.position, 0.25, delta);
    });

    const hoverAnimation = (kill) => {
        gsap.to(groupRef.current.scale, {
            duration: 0.6,
            x: 1.3,
            y: 1.3,
            z: 1.3,
            ease: "bounce.out"
        })
    }
    const standartAnimation = () => {
        gsap.to(groupRef.current.scale, {
            duration: 1,
            x: isScale ? 1 : 1.1,
            y: isScale ? 1 : 1.1,
            z: isScale ? 1 : 1.1,
            ease: "power1.out",
            onComplete: () => {
                setIsScale(!isScale)
            }
        });
    }

    useEffect(() => {
        if (isHover) {
            hoverAnimation()
        } else {
            standartAnimation()
        }

    }, [isScale, id, isHover])

    return (
        <group ref={groupRef} position={[0, heightRod + 6.8, 0]} scale={[1.1, 1.1, 1.1]}>
            <group rotation={[Math.PI / 2, 0, 0]}>
                <Parts colors={colors} radius={radiusCircle} />
                <Ring theta={thetaRing} />
                <Svg colors={colors} opacity={svgOpacity} />
            </group>
        </group>
    );
}
