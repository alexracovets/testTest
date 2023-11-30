import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";

import { changeActiveStatus } from '../../../store/reducers/stateMenu.js';

import s from '../Menu.module.scss';

MenuBtn.propTypes = {
    item: PropTypes.object,
};

export default function MenuBtn({ item }) {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const btnHandler = () => {
        dispatch(changeActiveStatus(item.id))
    }

    return (
        <button className={item.active ? s.btn : s.btn + ' ' + s.disabled} onClick={btnHandler}>
            <span className={s.text}> {t(item.text)} </span>
            <span className={s.image + ' ' + s[item.className]} style={{ backgroundImage: `url(${item.image})` }}></span>
        </button>
    )
}