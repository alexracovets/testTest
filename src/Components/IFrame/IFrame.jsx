
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { RxCross2 } from "react-icons/rx";

import { setLoaderMainStatus } from '../../store/reducers/stateLoaderMain';
import { setLink } from '../../store/reducers/stateMenuIFrame';

import s from './IFrame.module.scss';

export default function IFrame() {
    const [isLoad, setIsLoad] = useState(false);
    const link = useSelector((state) => state.stateMenuIFrame.link);
    const dispatch = useDispatch();

    const closeIFrame = () => {
        dispatch(setLink(null))
    }

    useEffect(() => {
        isLoad && dispatch(setLoaderMainStatus(false));
    }, [isLoad])

    useEffect(() => {
        link === null && setIsLoad(false)
    }, [link])

    return (
        <div className={isLoad ? s.frame_wrapper + ' ' + s.active : s.frame_wrapper}>
            <button className={s.cross} type="button" onClick={() => closeIFrame()}>
                <RxCross2 />
            </button>
            {
                link && <iframe className={s.frame} src={link} onLoad={() => setIsLoad(true)} />
            }
        </div>
    )
}