import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

import findElement from '../../../../../../static/findElement';
import { Svg } from '@react-three/drei';

SvgImage.propTypes = {
    colors: PropTypes.array,
    opacity: PropTypes.number
};

export default function SvgImage({ colors, opacity }) {
    const stateMenu = useSelector((state) => state.stateMenu);
    const [image, setImage] = useState(null);

    useEffect(() => {
        const element = findElement(stateMenu.btns, 'color', colors[0]);
        element && setImage(element.name);
    }, [stateMenu.btns, colors]);
    const test = useRef()

    useEffect(() => {
        console.log(test)
    }, [test])
    return (
        <group
            position={[-4, 0.2, -4]}
            scale={[0.15, 0.15, 0.15]}
            rotation={[-Math.PI / 2, 0, 0]} ref={test}
        >
            {image && colors.length === 1 ? <Svg src={`/img/menu/${image}.svg`} visible={opacity === 1 ? true : false} /> : null}
        </group>
    );
}
