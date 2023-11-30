import { useState } from "react";
import PropTypes, { element } from 'prop-types';
import { useSnapshot } from "valtio";
import { useTranslation } from "react-i18next";

import { stateMenu } from "../../../store/stateMenu";

import s from '../Menu.module.scss';

MenuBtn.propTypes = {
    item: PropTypes.object,
};

export default function MenuBtn({ item }) {
    const { t } = useTranslation();
    const snapMenu = useSnapshot(stateMenu);
    const [isActive] = useState(item.active)

    const btnHandler = () => {
        snapMenu.btns.map((btn) => {
            if (btn.id === item.id) {
                btn = { ...btn, active: !btn.active }
            }

        })
    }
    console.log(isActive)
    return (
        <button className={item.active ? s.btn : s.btn + ' ' + s.disabled} disabled={!item.active} onClick={btnHandler}>
            <span className={s.text}> {t(item.text)} </span>
            <span className={s.image + ' ' + s[item.className]} style={{ backgroundImage: `url(${item.image})` }}></span>
        </button>
    )
}