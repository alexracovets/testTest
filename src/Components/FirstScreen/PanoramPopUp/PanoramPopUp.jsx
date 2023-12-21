import { useSelector } from 'react-redux';

import s from './PanoramPopUp.module.scss';
import { useState } from 'react';

export default function PanoramPopUp() {
    const [isActive, setIsActive] = useState(false);

    const closePopUp = () => {
        setIsActive(false)
    };

    const openPanorama = () => {

    }

    return (
        <aside className={isActive ? s.popUp + ' ' + s.active : s.popUp}>
            <div className={s.wrapper} onClick={closePopUp}>

            </div>
        </aside >
    )
} 