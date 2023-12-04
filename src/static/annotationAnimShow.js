import { gsap } from 'gsap';

const animationHide = (renderParameters, setRenderParameters, theta, radius, svgOpacity) => {
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
        duration: 1,
        theta: theta,
        radius: radius,
        ease: "sine.inOut",
    })
}

export default animationHide;