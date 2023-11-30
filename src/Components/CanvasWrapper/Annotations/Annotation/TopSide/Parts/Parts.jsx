import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Part from './Part/Part';

Parts.propTypes = {
    colors: PropTypes.array,
};

export default function Parts({ colors }) {

    const [thetaLength, setThetaLength] = useState(null);

    useEffect(() => {
        setThetaLength((2 * Math.PI) / colors.length);
    }, [colors, thetaLength])

    return (
        <>
            {
                colors.map((color, index) => {
                    return (
                        <Part key={index} index={index} color={color} thetaLength={thetaLength} length={colors.length} />
                    )
                })
            }
        </>
    );
}
