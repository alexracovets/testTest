import { useSnapshot } from "valtio";

import Annotation from "./Annotation/Annotation";
import { stateAnnotations } from "../../../store/stateAnnotations";

export default function Annotations() {
    const snapAnnotations = useSnapshot(stateAnnotations);

    return (
        <>
            {
                snapAnnotations.annotation.map((item, index) => {
                    return <Annotation key={index} item={item} />
                })
            }
        </>
    );
}
