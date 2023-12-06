import { useSelector } from 'react-redux';

import Annotation from "./Annotation/Annotation";

export default function Annotations() {
    const stateAnnotations = useSelector((state) => state.stateAnnotations);
    const isPanorama = useSelector((state) => state.statePanorama.isActive);

    return (
        <group visible={!isPanorama}>
            {
                stateAnnotations.annotation.map((item, index) => {
                    return <Annotation key={index} item={item} />
                })
            }
        </group>
    );
}
