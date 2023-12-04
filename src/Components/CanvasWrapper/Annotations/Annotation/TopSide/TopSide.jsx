import { useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { dampLookAt } from "maath/easing";
import PropTypes from 'prop-types';


import Parts from './Parts/Parts';
import Ring from './Ring/Ring';
import Svg from './Svg/Svg';

TopSide.propTypes = {
    colors: PropTypes.array,
    radiusCircle: PropTypes.number,
    thetaRing: PropTypes.number,
    svgOpacity: PropTypes.number,
    heightRod: PropTypes.number,
};

export default function TopSide({ colors, thetaRing, radiusCircle, svgOpacity, heightRod }) {
    const { camera } = useThree();
    const groupRef = useRef();

    useFrame((state, delta) => {
        dampLookAt(groupRef.current, camera.position, 0.25, delta);
    });
    return (
        <group ref={groupRef} position={[0, heightRod + 6.8, 50]}>
            <group rotation={[Math.PI / 2, 0, 0]}>
                <Parts colors={colors} radius={radiusCircle} />
                <Ring theta={thetaRing} />
                <Svg colors={colors} opacity={svgOpacity} />
            </group>
        </group>
    );
}
