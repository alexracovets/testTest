import { useThree, useFrame } from '@react-three/fiber';
import { dampLookAt } from "maath/easing";
import PropTypes from 'prop-types';
import { useRef } from 'react';

import Parts from './Parts/Parts';
import Ring from './Ring/Ring';

TopSide.propTypes = {
    colors: PropTypes.array,
};

export default function TopSide({ colors }) {
    const { camera } = useThree();
    const groupRef = useRef();

    useFrame((state, delta) => {
        dampLookAt(groupRef.current, camera.position, 0.25, delta);
    });

    return (
        <group ref={groupRef} position={[0, 20, 50]}>
            <group rotation={[Math.PI / 2, 0, 0]}>
                <Parts colors={colors} />
                <Ring />
            </group>
        </group>
    );
}
