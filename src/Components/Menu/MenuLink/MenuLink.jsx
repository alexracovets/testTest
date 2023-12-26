import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";

import { setLink } from '../../../store/reducers/stateMenuIFrame';
import { setLoaderMainStatus } from '../../../store/reducers/stateLoaderMain';

import s from '../Menu.module.scss';
import { useEffect, useState } from 'react';

MenuLink.propTypes = {
    item: PropTypes.object,
};

export default function MenuLink({ item }) {
    const currentLink = useSelector((state) => state.stateMenuIFrame.link);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [isDisabled, setIsDisabled] = useState(false);

    const btnHandler = () => {
        if (isDisabled) {
            dispatch(setLink(null));
            setIsDisabled(false);
            dispatch(setLoaderMainStatus(false));
        } else {
            dispatch(setLink(item.link));
            dispatch(setLoaderMainStatus(true));
        }
    }

    useEffect(() => {
        currentLink === item.link ? setIsDisabled(true) : setIsDisabled(false);
    }, [currentLink, item.link]);

    return (
        <button className={isDisabled ? s.btn + ' ' + s.disabled : s.btn} onClick={btnHandler} type='button'>
            <span className={s.text}> {t(`menu.${item.name}`)} </span>
            <span
                className={s.image}
                style={{ backgroundImage: `url(./img/menu/${item.name}.svg)`, backgroundColor: `${item.color}` }}>
            </span>
        </button>
    )
}