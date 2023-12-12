import { useState } from "react";

import AnnotationPopUp from "./AnnotationPopUp/AnnotationPopUp";
import CanvasWrapper from "../CanvasWrapper/CanvasWrapper";
import ClosePanorama from "./ClosePanorama/ClosePanorama";
import Loader from "../Loader/Loader";
import Menu from "../Menu/Menu";

import s from './FirstScreen.module.scss';
import PanoramaLoader from "../CanvasWrapper/Panorama/PanoramaLoader/PanoramaLoader";

export default function FirstScreen() {
    const [isLoad, setLoad] = useState(true);

    return (
        <section className={s.first__screen}>
            <Menu />
            <div className={s.container}>
                <CanvasWrapper setLoad={setLoad} />
                <AnnotationPopUp />
                <ClosePanorama />
                {isLoad && <Loader />}
                <PanoramaLoader />
            </div>
        </section>
    )
} 