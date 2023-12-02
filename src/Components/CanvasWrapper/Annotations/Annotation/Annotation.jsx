import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import Rod from './Rod/Rod';
import TopSide from './TopSide/TopSide';
import cursor from '../../../../static/cursor';
import annotationPopUp from '../../../../static/annotationPopUp';

Annotation.propTypes = {
    item: PropTypes.object,
};

export default function Annotation({ item }) {
    const dispatch = useDispatch();

    const openPopUp = (event) => {
        event.stopPropagation();
        annotationPopUp(dispatch, true, item.id); 
    }

    return (
        <group position={item.position}
            onPointerLeave={() => cursor(false)}
            onPointerMove={() => cursor(true)}
            onPointerUp={(event) => openPopUp(event)}
        >
            <TopSide colors={item.color} />
            <Rod />
        </group>
    );
}
