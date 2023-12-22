import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';

import { setActiveStatus, setIsLoad, setPanoram } from '../../../store/reducers/statePanorama';
import { setDefault } from '../../../store/reducers/stateCamera';

import s from './ClosePanorama.module.scss';
import { useEffect, useState } from "react";

export default function ClosePanorama() {
    const dispatch = useDispatch();
    const isPanorama = useSelector((state) => state.statePanorama);
    const [isActive, setIsActive] = useState(false);

    const closePanorama = () => {
        dispatch(setActiveStatus(false));
        dispatch(setDefault());
        dispatch(setIsLoad(false));
        dispatch(setPanoram([]))
    }

    useEffect(() => {
        if (isPanorama.isActive && isPanorama.isLoad) {
            const timeoutId = setTimeout(() => setIsActive(true), 2500);
            return () => clearTimeout(timeoutId);
        } else {
            setIsActive(false)
        }
    }, [isPanorama])

    return (
        <>
            <button className={isActive ? s.cross + ' ' + s.active : s.cross} type="button" onClick={() => closePanorama()}>
                <RxCross2 />
            </button>
        </>
    )
}