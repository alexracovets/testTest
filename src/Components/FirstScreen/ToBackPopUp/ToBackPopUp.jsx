import { useTranslation } from "react-i18next";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import s from './ToBackPopUp.module.scss';

export default function ToBackPopUp() {
    const timeInitial = useSelector((state) => state.stateToBackPopUp.time);
    const timeShow = useSelector((state) => state.stateToBackPopUp.showTime);
    const panoram = useSelector((state) => state.statePanorama);
    const { t } = useTranslation();
    const [time, setTime] = useState(timeInitial);
    const [isActive, setIsActive] = useState(true);
    const [timerStart, setTimerStart] = useState(false)

    //форматування часу
    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    // початок дії таймеру, з затримкою
    useEffect(() => {
        if (panoram.isLoad) {
            const timeoutId = setTimeout(() => setTimerStart(true), panoram.delayStart);
            return () => clearTimeout(timeoutId);
        } else setTimerStart(false);
    }, [panoram])

    //відображення таймеру
    useEffect(() => {
        setIsActive(time <= timeShow ? true : false);
    }, [time, timeShow])

    // відлік/початковий чай таймеру
    useEffect(() => {
        if (timerStart) {
            if (time > 0) {
                const intervalId = setInterval(() => {
                    setTime(time - 1);
                }, 1000);
                return () => clearInterval(intervalId);
            }

        } else {
            setTime(timeInitial)
        }

    }, [timerStart, time, timeInitial]);

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

    }, [timeInitial, isActive, panoram]);

    return (
        <aside className={isActive ? s.popUp + ' ' + s.active : s.popUp}>
            <h4 className={s.title}>{t(`toBackPopUp.isHere`)}</h4>
            <div className={s.timer}>{formatTime(time)}</div>
            <button className={s.button} onClick={() => setTime(timeInitial)}>{t(`toBackPopUp.yes`)}</button>
        </aside>
    )
} 