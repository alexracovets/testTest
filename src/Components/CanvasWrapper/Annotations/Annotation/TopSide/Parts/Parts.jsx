import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Part from './Part/Part';

Parts.propTypes = {
    colors: PropTypes.array,
    radius: PropTypes.number
};

export default function Parts({ colors, radius }) {
    const [thetaLength, setThetaLength] = useState(null);
    

    useEffect(() => {
        const newTheta = (2 * Math.PI) / colors.length;
        isFinite(newTheta) && setThetaLength(newTheta);
    }, [colors, thetaLength])

    return (
        <>
            {
                colors.map((color, index) => {
                    return (
                        <Part key={index} index={index} color={color} thetaLength={thetaLength} length={colors.length} radius={radius} />
                    )
                })
            }
        </>
    );
}
