import AnnotationPopUp from "./AnnotationPopUp/AnnotationPopUp";
import CanvasWrapper from "../CanvasWrapper/CanvasWrapper";
import ClosePanorama from "./ClosePanorama/ClosePanorama";
import Loader from "../Loader/Loader";
import Menu from "../Menu/Menu";


import PanoramaLoader from "../CanvasWrapper/Panorama/PanoramaLoader/PanoramaLoader";
import Music from "../CanvasWrapper/Panorama/Music/Music";
import PanoramPopUp from "./PanoramPopUp/PanoramPopUp";
import ToBackPopUp from "./ToBackPopUp/ToBackPopUp";
import IFrame from "../IFrame/IFrame";

import s from './FirstScreen.module.scss';

export default function FirstScreen() {

    return (
        <section className={s.first__screen}>
            <Menu />
            <div className={s.container}>
                <CanvasWrapper />
                <Loader />
                <PanoramaLoader />
                <AnnotationPopUp />
                <PanoramPopUp />
                <ToBackPopUp />
                <Music />
                <IFrame />
                <ClosePanorama />
            </div>
        </section>
    )
} 