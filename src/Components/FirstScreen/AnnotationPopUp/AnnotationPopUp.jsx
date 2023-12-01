import { RxCross2 } from "react-icons/rx";
import { SlArrowRight } from "react-icons/sl";
import { useSelector, useDispatch } from 'react-redux';
import annotationPopUp from '../../../static/annotationPopUp';

import s from './AnnotationPopUp.module.scss';

export default function AnnotationPopUp() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.stateAnnotationsPopUp);

    const closePopUp = () => annotationPopUp(dispatch, false);

    return (
        <aside className={state.isActive ? s.popUp + ' ' + s.active : s.popUp}>
            <div className={s.wrapper}>
                <button className={s.cross} type="button" onClick={() => closePopUp()}>
                    <RxCross2 />
                </button>
                <h3>{state.content.title}</h3>
                <p> {state.content.tag} </p>
                <p className={s.location}> {state.content.location} </p>
                <img className={s.image} src={`/img/annotation/${4}.jpg`} />
                <button type='button'>
                    <span>Відкрити</span>
                    <SlArrowRight />
                </button>
            </div>
        </aside >
    )
} 