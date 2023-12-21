import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";

import { changeActiveStatus } from '../../../store/reducers/stateMenu';
import { changeActiveColors } from '../../../store/reducers/stateAnnotations';

import s from '../Menu.module.scss';

MenuBtn.propTypes = {
    item: PropTypes.object,
};

export default function MenuBtn({ item }) {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const btnHandler = () => {
        dispatch(changeActiveStatus(item.id));
        dispatch(changeActiveColors(item))
    }

    return (
        <button
            className={item.active ? s.btn : s.btn + ' ' + s.disabled}
            onClick={() => btnHandler(item)} type='button'
        >
            <span className={s.text}> {t(`menu.${item.name}`)} </span>
            <span
                className={s.image}
                style={{ backgroundImage: `url(./img/menu/${item.name}.svg)`, backgroundColor: `${item.color}` }}>
            </span>
        </button>
    )
}