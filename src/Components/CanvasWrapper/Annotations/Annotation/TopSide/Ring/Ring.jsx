import { useLoader } from '@react-three/fiber';
import { Torus } from '@react-three/drei';
import PropTypes from 'prop-types';
import * as THREE from 'three';

import matcapWhite from '/material/white.png';

Ring.propTypes = {
    sections: PropTypes.arrayOf(PropTypes.any),
};

export default function Ring() {
    const [whiteTexture] = useLoader(THREE.TextureLoader, [matcapWhite])

    return (
        <Torus args={[5, 0.4, 20, 80]} rotation={[Math.PI / 2, 0, 0]}>
            <meshMatcapMaterial matcap={whiteTexture} />
        </Torus>
    );
}
