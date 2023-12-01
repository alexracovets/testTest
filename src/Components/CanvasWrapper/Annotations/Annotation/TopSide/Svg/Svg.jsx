import * as THREE from 'three';
import { useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import loadSvg from '../../../../../../static/loadSvg';

export default function Svg(color) {
    const stateMenu = useSelector((state) => state.stateMenu);
    const [image, setImage] = useState(null);
    const [shapes, setShapes] = useState([]);

    const findImage = useCallback(() => {
        const item = stateMenu.btns.find(btn => btn.color === color.color);
        setImage(item ? item.name : null);
    }, [stateMenu.btns, color.color]);

    useEffect(() => {
        image && loadSvg(image, setShapes);
    }, [image]);

    useEffect(() => {
        findImage();
    }, [findImage]);

    return (
        <group
            position={[-3.3, 0.2, -3.1]}
            scale={[0.12, 0.12, 0.12]}
            rotation={[Math.PI / 2, 0, 2 * Math.PI]}
        >
            {shapes.map((item, index) =>
                <mesh key={index}>
                    <shapeGeometry args={[item.shape]} />
                    <meshBasicMaterial color={item.color} side={THREE.DoubleSide} />
                </mesh>
            )}
        </group>
    );
}
