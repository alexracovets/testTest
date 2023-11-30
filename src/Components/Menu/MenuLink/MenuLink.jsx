import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

import s from '../Menu.module.scss';

MenuLink.propTypes = {
    item: PropTypes.object,
};

export default function MenuLink({ item }) {
    const { t } = useTranslation();
    return (
        <button className={s.btn} id={'btn_' + item.id}>
            <span className={s.text}> {t(item.text)} </span>
            <span className={s.image + ' ' + s[item.className]} style={{ backgroundImage: `url(${item.image})` }}></span>
        </button>
    )
}