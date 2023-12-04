import { gsap } from 'gsap';
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
    const [isAnimation, setAnimation] = useState(false);
    const [renderColors, setRenderColors] = useState([]);
    const [renderParameters, setRenderParameters] = useState({
        thetaRing: Math.PI * 2,
        radiusCircle: 5,
        svgOpacity: 1,
        heightRod: 13.4,
    });

    const openPopUp = (event) => {
        event.stopPropagation();
        annotationPopUp(dispatch, true, item.id);
    }

    const animationHide = (thetaRing, radiusCircle, svgOpacity, heightRod) => {
        const tl = gsap.timeline({
            onUpdate: () => setRenderParameters({
                ...renderParameters
            }),
        })
        tl.to(renderParameters, {
            duration: .3,
            svgOpacity: svgOpacity,
            ease: "sine.inOut",
        })
        tl.to(renderParameters, {
            delay: .2,
            duration: .3,
            radiusCircle: radiusCircle,
            ease: "sine.inOut",
        })
        tl.to(renderParameters, {
            duration: .6,
            thetaRing: thetaRing,
            ease: "sine.inOut",
        })
        tl.to(renderParameters, {
            duration: .3,
            heightRod: heightRod,
            ease: "sine.inOut",
        })
    }

    const animationShow = (thetaRing, radiusCircle, svgOpacity, heightRod) => {
        const tl = gsap.timeline({
            onUpdate: () => setRenderParameters({
                ...renderParameters
            }),
        })
        tl.to(renderParameters, {
            duration: .3,
            heightRod: heightRod,
            ease: "sine.inOut",
        })
        tl.to(renderParameters, {
            duration: .6,
            thetaRing: thetaRing,
            ease: "sine.inOut",
        })
        tl.to(renderParameters, {
            delay: .2,
            duration: .3,
            radiusCircle: radiusCircle,
            ease: "sine.inOut",
        })
        tl.to(renderParameters, {
            duration: .3,
            svgOpacity: svgOpacity,
            ease: "sine.inOut",
        })
    }

    useEffect(() => {
        if (item.color.length === 0) {
            setAnimation(true)
        } else if (item.color.length > 0) {
            setAnimation(false);
            setRenderColors(item.color)
        }

    }, [item.color])

    useEffect(() => {
        isAnimation ? animationHide(0, 0, 0, 2) : animationShow(Math.PI * 2, 5, 1, 13.4)
    }, [isAnimation])

    return (
        <group position={item.position}
            onPointerLeave={() => cursor(false)}
            onPointerMove={() => cursor(true)}
            onPointerUp={(event) => openPopUp(event)}
        >
            <TopSide
                colors={renderColors}
                radiusCircle={renderParameters.radiusCircle}
                thetaRing={renderParameters.thetaRing}
                svgOpacity={renderParameters.svgOpacity}
                heightRod={renderParameters.heightRod}
            />
            <Rod heightRod={renderParameters.heightRod} />
        </group>
    );
}
