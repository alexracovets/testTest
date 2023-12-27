import { useState, useEffect } from 'react';
import { Circle } from '@react-three/drei';
import Info from '../../Models/Info/Info';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';


import cursor from '../../../../static/cursor';
import { setPanoramMask } from '../../../../store/reducers/stateAnnotationsPopUp';

PanoramaInfos.propTypes = {
    position: PropTypes.array,
    rotation: PropTypes.array,
    scale: PropTypes.number,
};

export default function PanoramaInfos({ position, rotation, scale }) {
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        cursor(isActive);
    }, [isActive])

    return (
        <>
            {
                <group
                    position={position}
                    rotation={rotation}
                    scale={[scale, scale, scale]}
                >
                    <Info />
                    <Circle args={[1.5, 10]} position={[0, 0, 0]} rotation={[0, -Math.PI / 2, -Math.PI]}
                        onPointerLeave={() => setIsActive(false)}
                        onPointerMove={() => setIsActive(true)}
                        onClick={() => dispatch(setPanoramMask(true))}
                        visible={false}
                    />
                </group>
            }
        </>
    );
} 