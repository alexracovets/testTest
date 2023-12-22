import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";

import { setPanoramMask } from '../../../store/reducers/stateAnnotationsPopUp';

import s from './PanoramPopUp.module.scss';

export default function PanoramPopUp() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(false);
    const state = useSelector((state) => state.stateAnnotationsPopUp);
    const isPanorama = useSelector((state) => state.statePanorama.isActive)

    const closePopUp = () => {
        dispatch(setPanoramMask(false))
    }

    useEffect(() => {
        isPanorama === false && closePopUp()
    }, [isPanorama])

    useEffect(() => {
        setIsActive(state.isPanoramMask)
    }, [state])

    return (
        <aside className={isActive ? s.popUp + ' ' + s.active : s.popUp}>
            <div className={s.wrapper}>
                <button className={s.cross} type="button" onClick={() => closePopUp()}>
                    <RxCross2 />
                </button>
                <h4>{t(`annotation.${state.content}.title`)}</h4>
                <p>{t(`annotation.${state.content}.tag`)}</p>
            </div>
        </aside>
    )
} 