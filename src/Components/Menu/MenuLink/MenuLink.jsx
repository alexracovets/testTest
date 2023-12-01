import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";

import { changeActiveStatus } from '../../../store/reducers/stateMenu.js';
import { changeActiveColors } from '../../../store/reducers/stateAnnotations.js';

import s from '../Menu.module.scss';

MenuLink.propTypes = {
    item: PropTypes.object,
};

export default function MenuLink({ item }) {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const btnHandler = () => {
        dispatch(changeActiveStatus(item.id));
        dispatch(changeActiveColors(item))
    }

    return (
        <button className={item.active ? s.btn : s.btn + ' ' + s.disabled} onClick={btnHandler} type='button' disabled>
            <span className={s.text}> {t(`menu.${item.name}`)} </span>
            <span
                className={s.image}
                style={{ backgroundImage: `url(./img/menu/${item.name}.svg)`, backgroundColor: `${item.color}` }}>
            </span>
        </button>
    )
}