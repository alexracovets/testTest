import { useTranslation } from "react-i18next";
import { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';

import musicOn from '/img/music/off.svg';
import musicOff from '/img/music/on.svg';

import s from './Music.module.scss';

export default function Music() {
    const content = useSelector((state) => state.stateAnnotationsPopUp.content);
    const panorama = useSelector((state) => state.statePanorama);
    const [isActive, setIsActive] = useState(false);
    const [isMusic, setIsMusic] = useState(true);
    const isPopUp = useSelector((state) => state.stateAnnotationsPopUp.isPanoramMask);
    const [audio, setAudio] = useState(null);
    const { i18n } = useTranslation();

    const getAudioObject = useCallback(() => {
        audio && audio.pause();
        setAudio(null);
        const audioObject = new Audio(`./music/${i18n.language}/${content}.mp3`);
        audioObject && setAudio(audioObject);
    }, [i18n.language, content]);

    //відображення компоненту
    useEffect(() => {
        if (panorama.isActive && panorama.isLoad) {
            const timeoutId = setTimeout(() => setIsActive(true), panorama.delayStart);
            return () => clearTimeout(timeoutId);
        } else {
            setIsActive(false);
            audio && audio.pause();
            setIsMusic(true);
        }
    }, [panorama, audio]);

    // завантаження аудіо
    useEffect(() => {
        isActive ? getAudioObject() : setAudio(null);
    }, [getAudioObject, isActive]);

    // пауза при натискані на ПопАп
    useEffect(() => {
        if (isPopUp && audio) {
            audio.pause();
            setIsMusic(false);
        }
    }, [isPopUp, audio]);

    // пауза при виході з панорам
    useEffect(() => {
        if (isActive && audio !== null) {
            // прив'язка вкл/викл диктора до кнопки
            if (isMusic) {
                audio.play();
                // зміна стану кнопки при закінченні музики
                audio.addEventListener("ended", () => setIsMusic(false));
            } else {
                audio.pause()
            }
        }
    }, [isActive, isMusic, audio]);

    return (
        <img
            alt="music"
            className={isActive ? s.music + ' ' + s.active : s.music}
            src={isMusic ? musicOn : musicOff}
            onClick={() => setIsMusic(!isMusic)}
        />
    )
}