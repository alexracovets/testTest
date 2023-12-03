import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import Rod from './Rod/Rod';
import TopSide from './TopSide/TopSide';
import cursor from '../../../../static/cursor';
import annotationPopUp from '../../../../static/annotationPopUp';

Annotation.propTypes = {
    item: PropTypes.object,
};

export default function Annotation({ item }) {
    const dispatch = useDispatch();
    const [animStatus, setAnimStatus] = useState('normal');

    const openPopUp = (event) => {
        event.stopPropagation();
        annotationPopUp(dispatch, true, item.id);
    }

    useEffect(() => {
        if (item.color.length === 0) {
            setAnimStatus('hide');
        } else if (item.color.length > 0 && animStatus === 'hide') {
            setAnimStatus('show');
        }

    }, [item.color, animStatus])

    return (
        <group position={item.position}
            onPointerLeave={() => cursor(false)}
            onPointerMove={() => cursor(true)}
            onPointerUp={(event) => openPopUp(event)}
        >
            <TopSide colors={item.color} animStatus={animStatus} />
            <Rod animStatus={animStatus} />
        </group>
    );
}
