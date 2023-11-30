import { useSnapshot } from "valtio";
import { useTranslation } from "react-i18next";

import MenuBtn from "./MenuBtn/MenuBtn";
import { stateMenu } from "../../store/stateMenu";
import LanguageSwitcher from "./LanguageSwitcher/LanguageSwitcher";

import s from './Menu.module.scss'; 

export default function Menu() {
    const { t } = useTranslation();
    const snapMenu = useSnapshot(stateMenu);

    const renderBtn = () => snapMenu.btns.map((button) =>
        <MenuBtn item={button} key={button.id} />
    );

    const renderLink = () => snapMenu.links.map((button) =>
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
