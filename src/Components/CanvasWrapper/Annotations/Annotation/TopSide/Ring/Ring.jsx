import { useLoader } from '@react-three/fiber';
import PropTypes from 'prop-types';
import * as THREE from 'three';

import matcapWhite from '/material/white.png';
import SphereElement from './SphereElement/SphereElement';
import TorusElement from './TorusElement/TorusElement';

Ring.propTypes = {
    radius: PropTypes.number,
};

export default function Ring({ radius }) {
    const whiteTexture = useLoader(THREE.TextureLoader, matcapWhite);
    const figureParametrs = {
        width: 0.4,
        radius: 5
    }

    return (
        <>
            <TorusElement radius={radius} whiteTexture={whiteTexture} width={figureParametrs.width} radiusCircle={figureParametrs.radius} />
            <SphereElement radius={radius} whiteTexture={whiteTexture} width={figureParametrs.width} radiusCircle={figureParametrs.radius} />
            <SphereElement radius={-radius} whiteTexture={whiteTexture} width={figureParametrs.width} radiusCircle={figureParametrs.radius} />
        </>
    );
}
