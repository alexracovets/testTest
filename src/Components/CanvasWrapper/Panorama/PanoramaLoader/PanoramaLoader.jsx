import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import logoUa from '/img/logo/logo_ua.svg';

import s from './PanoramaLoader.module.scss';

export default function PanoramaLoader() {
    const [isActive, setActive] = useState();
    const panorama = useSelector((state) => state.statePanorama);

    useEffect(() => {
        panorama.isActive && !panorama.isLoad ? setActive(true) : setActive(false)
    }, [panorama])
    return (
        <div className={isActive ? s.panorama__load + ' ' + s.active : s.panorama__load}>
            <div className={s.panorama__wrapper}>
                <img src={logoUa} alt="logo" />
                <p>Завантаження віртуальної екскурсії...</p>
            </div>
        </div>
    )
}