import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';
import flatten from 'lodash-es/flatten';

const loadSvg = async (image, setShapes) => {
    const shapesData = await new SVGLoader().loadAsync(`/img/menu/${image}.svg`);
    const flattenedShapes = flatten(shapesData.paths.map((group, index) => {
        return group.toShapes(true).map(shape => {
            const fillColor = group.userData.style.fill;
            return { shape, color: fillColor, index };
        });
    }));
    setShapes(flattenedShapes);
};

export default loadSvg;