import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";
import { useEffect, useState, useCallback } from 'react';

import { setActiveStatus, setIsLoad, setPanoram } from '../../../store/reducers/statePanorama';
import { setDefault } from '../../../store/reducers/stateCamera';
import annotationPopUp from '../../../static/annotationPopUp';

import s from './ToBackPopUp.module.scss';

export default function ToBackPopUp() {
    const timeInitial = useSelector((state) => state.stateToBackPopUp.time);
    const timeShow = useSelector((state) => state.stateToBackPopUp.showTime);
    const panoram = useSelector((state) => state.statePanorama);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [time, setTime] = useState(timeInitial);
    const [isActive, setIsActive] = useState(true);
    const [timerStart, setTimerStart] = useState(false);

    //форматування часу
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    //до початкової позиції сайту
    const toDefault = useCallback(() => {
        annotationPopUp(dispatch, false);
        dispatch(setActiveStatus(false));
        dispatch(setIsLoad(false));
        dispatch(setPanoram([]));
        dispatch(setDefault());
        setTime(timeInitial);
    }, [dispatch, timeInitial]);

    // встановлення часу
    const initTime = useCallback(() => {
        console.log(time)
        const intervalId = setTimeout(() => setTime(time - 1), 1000);
        return time > 0 ? () => clearTimeout(intervalId) : toDefault();
    }, [time, toDefault]);

    // початок дії таймеру, з затримкою
    useEffect(() => {
        if (panoram.isLoad) {
            const timeoutId = setTimeout(() => setTimerStart(true), panoram.delayStart);
            return () => clearTimeout(timeoutId);
        } else {
            setTimerStart(false);
            setTime(timeInitial);
        }
    }, [panoram, timeInitial])

    //відображення таймеру
    useEffect(() => {
        setIsActive(time <= timeShow ? true : false);
    }, [time, timeShow])

    // відлік/початковий час таймеру та повернення на головну при відсутності дій
    useEffect(() => {
        if (timerStart) {
            return initTime()
        } else {
            setTime(timeInitial);
        }
    }, [timerStart, time, initTime, timeInitial]);

    //оновлення таймера при дії користувача
    useEffect(() => {
        if (!isActive && panoram.isActive) {
            const handleMouseMove = () => setTime(timeInitial);

            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('click', handleMouseMove);
            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('click', handleMouseMove);
            };
        }

    }, [isActive, panoram, timeInitial]);

    return (
        <aside className={isActive ? s.popUp + ' ' + s.active : s.popUp}>
            <h4 className={s.title}>{t(`toBackPopUp.isHere`)}</h4>
            <div className={s.timer}>{formatTime(time)}</div>
            <button className={s.button} onClick={() => setTime(timeInitial)}>{t(`toBackPopUp.yes`)}</button>
        </aside>
    )
} 