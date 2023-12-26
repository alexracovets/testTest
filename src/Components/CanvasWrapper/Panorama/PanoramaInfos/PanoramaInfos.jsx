import PropTypes from 'prop-types';
import Info from '../../Models/Info/Info';
import { useState, useEffect } from 'react';

import cursor from '../../../../static/cursor';
import { Circle } from '@react-three/drei';
import { useControls } from 'leva';

PanoramaInfos.propTypes = {
    item: PropTypes.object
};

export default function PanoramaInfos({ item }) {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        cursor(isActive);
    }, [isActive])

    // const testing = useControls({
    //     positionX: 70,
    //     positionY: 100,
    //     positionZ: -60,
    //     rotationX: 0,
    //     rotationY: 0.5,
    //     rotationZ: 0,
    //     scale: 10
    // })

    return (
        <>
            {
                item && <group
                    position={item.position}
                    rotation={item.rotation}
                    scale={[item.scale, item.scale, item.scale]}
                >
                    <Info />
                    <Circle args={[1.5, 10]} position={[0, 0, 0]} rotation={[0, -Math.PI / 2, -Math.PI]}
                        onPointerLeave={() => setIsActive(false)}
                        onPointerMove={() => setIsActive(true)}
                        visible={false}
                    />
                </group>
            }
        </>
    );
} 