import { useThree, useFrame } from '@react-three/fiber';
import { dampLookAt } from "maath/easing";
import PropTypes from 'prop-types';
import { useRef, useState, useMemo, useEffect } from 'react';
import { gsap } from 'gsap';

import Parts from './Parts/Parts';
import Ring from './Ring/Ring';
import Svg from './Svg/Svg';

TopSide.propTypes = {
    colors: PropTypes.array,
    animStatus: PropTypes.string,
    radius: PropTypes.number
};

export default function TopSide({ colors, animStatus }) {
    const mathParameters = useMemo(() => (
        {
            theta: colors.length === 0 ? 0 : Math.PI * 2,
            radius: colors.length === 0 ? 0 : 5
        }
    ), []);
    const [initialParameters, setInitialParameters] = useState({
        theta: Math.PI * 2,
        radius: 5
    });
    const { camera } = useThree();
    const groupRef = useRef();

    const [renderTheta, setRenderTheta] = useState(0);
    const [renderColors, setRenderColors] = useState([]);


    useFrame((state, delta) => {
        dampLookAt(groupRef.current, camera.position, 0.25, delta);
    });

    useEffect(() => {
        if (animStatus === 'hide') {
            setInitialParameters({
                theta: 0,
                radius: 0
            });
        } else if (animStatus === 'show') {
            setInitialParameters({
                theta: Math.PI * 2,
                radius: 5
            });
        }
    }, [animStatus]);

    useEffect(() => {
        colors.length > 0 && setRenderColors(colors)
    }, [colors])

    useEffect(() => {
        gsap.to(mathParameters, {
            duration: 1,
            theta: initialParameters.theta,
            ease: "sine.inOut",
            onUpdate: () => setRenderTheta(mathParameters.theta)
        })
    }, [initialParameters.theta, mathParameters])

    return (
        <group ref={groupRef} position={[0, 20, 50]}>
            <group rotation={[Math.PI / 2, 0, 0]}>
                <Parts colors={renderColors} radius={renderTheta} />
                <Ring radius={renderTheta} />
                {colors.length === 1 && <Svg color={colors[0]} />}
            </group>
        </group>
    );
}
