import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";

import MenuBtn from "./MenuBtn/MenuBtn";
import MenuLink from "./MenuLink/MenuLink";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";

import { setActiveStatus, setIsLoad, setPanoram } from '../../store/reducers/statePanorama';
import { setDefault } from '../../store/reducers/stateCamera';
import annotationPopUp from '../../static/annotationPopUp';

import s from './Menu.module.scss';

export default function Menu() {
    const stateMenu = useSelector((state) => state.stateMenu);
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const renderBtn = () => stateMenu.btns.map((button) => <MenuBtn item={button} key={button.id} />);
    const renderLink = () => stateMenu.links.map((button) => <MenuLink item={button} key={button.id} />);

    const toDefault = () => {
        annotationPopUp(dispatch, false);
        dispatch(setActiveStatus(false));
        dispatch(setIsLoad(false));
        dispatch(setPanoram([]));
        dispatch(setDefault());
    }

    return (
        <aside className={s.menu__wrapper}>
            <button className={s.menu} onClick={() => toDefault()}>{t('menu.menu')}</button>
            <span className={s.line}></span>
            {renderBtn()}
            {renderLink()}
            <LanguageSwitcher />
        </aside>
    )
}
