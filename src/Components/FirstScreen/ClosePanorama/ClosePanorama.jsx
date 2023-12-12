import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';

import { setActiveStatus, setIsLoad, setPanoram } from '../../../store/reducers/statePanorama';
import { setDefault } from '../../../store/reducers/stateCamera';

import s from './ClosePanorama.module.scss';

export default function ClosePanorama() {
    const dispatch = useDispatch();
    const isPanorama = useSelector((state) => state.statePanorama.isActive);

    const closePanorama = () => {
        dispatch(setActiveStatus(false));
        dispatch(setDefault());
        dispatch(setIsLoad(false));
        dispatch(setPanoram([]))
    }
    return (
        <>
            <button className={isPanorama ? s.cross + ' ' + s.active : s.cross} type="button" onClick={() => closePanorama()}>
                <RxCross2 />
            </button>
        </>
    )
}