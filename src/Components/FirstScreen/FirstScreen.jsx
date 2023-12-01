import { useState } from "react";

import AnnotationPopUp from "./AnnotationPopUp/AnnotationPopUp";
import CanvasWrapper from "../CanvasWrapper/CanvasWrapper";
import Loader from "../Loader/Loader";
import Menu from "../Menu/Menu";

import s from './FirstScreen.module.scss';

export default function FirstScreen() {
    const [isLoad, setLoad] = useState(true);

    return (
        <section className={s.first__screen}>
            <Menu />
            <div className={s.container}>
                <CanvasWrapper setLoad={setLoad} />
                <AnnotationPopUp />
                {isLoad && <Loader />}
            </div>
        </section>
    )
} 