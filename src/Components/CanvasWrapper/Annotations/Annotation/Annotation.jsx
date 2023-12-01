import PropTypes from 'prop-types';

import Rod from './Rod/Rod';
import TopSide from './TopSide/TopSide';

Annotation.propTypes = {
    item: PropTypes.object,
};

export default function Annotation({ item }) {
    
    return (
        <group position={item.position}>
            <TopSide colors={item.color} />
            <Rod />
        </group>
    );
}
