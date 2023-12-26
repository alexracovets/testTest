import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";

import logoUa from '/img/logo/logo_ua.svg';

import s from './PanoramaLoader.module.scss';

export default function PanoramaLoader() {
    const { t } = useTranslation();
    const [isActive, setActive] = useState(false);
    const panorama = useSelector((state) => state.statePanorama);
    const loaderStatus = useSelector((state) => state.stateLoaderMain.isActive);

    useEffect(() => {
        if (panorama.isActive && !panorama.isLoad) {
            setActive(true)
        } else {
            const timeoutId = setTimeout(() => setActive(false), 2000);
            return () => clearTimeout(timeoutId);
        }
    }, [panorama])

    useEffect(() => {
        if (loaderStatus) {
            setActive(true)
        } else {
            const timeoutId = setTimeout(() => setActive(false), 2000);
            return () => clearTimeout(timeoutId);
        }
    }, [loaderStatus])

    return (
        <div className={isActive ? s.panorama__load + ' ' + s.active : s.panorama__load}>
            <div className={s.panorama__wrapper}>
                <img src={logoUa} alt="logo" />
                <p>{t(panorama.isActive ? 'load_panoram' : 'load_report')}</p>
            </div>
        </div>
    )
}