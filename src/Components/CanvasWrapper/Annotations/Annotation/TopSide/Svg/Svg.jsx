import * as THREE from 'three';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import loadSvg from '../../../../../../static/loadSvg';
import findElement from '../../../../../../static/findElement';

Svg.propTypes = {
    colors: PropTypes.array,
    opacity: PropTypes.number
};

export default function Svg({ colors, opacity }) {
    const stateMenu = useSelector((state) => state.stateMenu);
    const [image, setImage] = useState(null);
    const [shapes, setShapes] = useState([]);

    useEffect(() => {
        image && loadSvg(image, setShapes);
    }, [image]);

    useEffect(() => {
        const element = findElement(stateMenu.btns, 'color', colors[0]);
        element && setImage(element.name);
    }, [stateMenu.btns, colors]);
    return (
        <group
            position={[-4, 0.2, -4]}
            scale={[0.15, 0.15, 0.15]}
            rotation={[Math.PI / 2, 0, 2 * Math.PI]}
        >
            {shapes.map((item, index) =>
                <mesh key={index}>
                    <shapeGeometry args={[item.shape]} />
                    <meshBasicMaterial color={item.color} side={THREE.BackSide} transparent={true} opacity={colors.length <= 1 ? opacity : 0} />
                </mesh>
            )}
        </group>
    );
}
