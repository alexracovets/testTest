import { useTranslation } from "react-i18next";
import { useSelector } from 'react-redux';

import MenuBtn from "./MenuBtn/MenuBtn";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";

import s from './Menu.module.scss';

export default function Menu() {
    const stateMenu = useSelector((state) => state.stateMenu);
    const { t } = useTranslation();

    const renderBtn = () => stateMenu.btns.map((button) =>
        <MenuBtn item={button} key={button.id} />
    );

    const renderLink = () => stateMenu.links.map((button) =>
        <MenuBtn item={button} key={button.id} />
    );

    return (
        <aside className={s.menu__wrapper}>
            <button className={s.menu}>{t('menu.menu')}</button>
            <span className={s.line}></span>
            {renderBtn()}
            {renderLink()}
            <LanguageSwitcher />
        </aside>
    )
}
