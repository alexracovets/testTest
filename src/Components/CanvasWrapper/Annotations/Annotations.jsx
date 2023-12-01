import { useSelector } from 'react-redux';

import Annotation from "./Annotation/Annotation";

export default function Annotations() {
    const stateAnnotations = useSelector((state) => state.stateAnnotations);

    return (
        <>
            {
                stateAnnotations.annotation.map((item, index) => {
                    return <Annotation key={index} item={item} />
                })
            }
        </>
    );
}