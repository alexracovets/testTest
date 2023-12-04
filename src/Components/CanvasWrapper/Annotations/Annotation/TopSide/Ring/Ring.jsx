import { useLoader } from '@react-three/fiber';
import PropTypes from 'prop-types';
import * as THREE from 'three';

import matcapWhite from '/material/white.png';
import SphereElement from './SphereElement/SphereElement';
import TorusElement from './TorusElement/TorusElement';

Ring.propTypes = {
    theta: PropTypes.number,
};

export default function Ring({ theta }) {
    const whiteTexture = useLoader(THREE.TextureLoader, matcapWhite);
    const figureParametrs = {
        width: 0.2,
        radius: 5
    }

    return (
        <>
            <TorusElement theta={theta} whiteTexture={whiteTexture} width={figureParametrs.width} radius={figureParametrs.radius} />
            <SphereElement theta={theta} whiteTexture={whiteTexture} width={figureParametrs.width} radius={figureParametrs.radius} />
            <SphereElement theta={-theta} whiteTexture={whiteTexture} width={figureParametrs.width} radius={figureParametrs.radius} />
        </>
    );
}
