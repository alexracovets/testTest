import { RxCross2 } from "react-icons/rx";
import { SlArrowRight } from "react-icons/sl";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from 'react-redux';

import annotationPopUp from '../../../static/annotationPopUp';
import { setActiveStatus } from '../../../store/reducers/statePanorama';
import { changeActiveStatus } from '../../../store/reducers/stateAnnotationsPopUp';

import s from './AnnotationPopUp.module.scss';

export default function AnnotationPopUp() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const state = useSelector((state) => state.stateAnnotationsPopUp);

    const closePopUp = () => {
        annotationPopUp(dispatch, false);
    };

    const openPanorama = () => {
        dispatch(changeActiveStatus(false));
        dispatch(setActiveStatus(true));
    }

    return (
        <aside className={state.isActive ? s.popUp + ' ' + s.active : s.popUp}>
            <div className={s.wrapper}>
                <button className={s.cross} type="button" onClick={() => closePopUp()}>
                    <RxCross2 />
                </button>
                <h3> {t(`annotation.${state.content}.title`)} </h3>
                <p> {t(`annotation.${state.content}.tag`)} </p>
                <p className={s.location}> {t(`annotation.${state.content}.location`)} </p>
                <img className={s.image} src={`/img/annotation/${state.content}.jpg`} />
                <button type='button' onClick={() => openPanorama()}>
                    <span>Відкрити</span>
                    <SlArrowRight />
                </button>
            </div>
        </aside >
    )
} 