import { useTranslation } from "react-i18next";

import s from '../Menu.module.scss';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    // Зміна мови
    const change = async (language) => {
        try {
            await i18n.changeLanguage(language);
        } catch (error) {
            console.error("Error changing language:", error);
        }
    };

    return (
        <article className={s.swither}>
            <button onClick={() => change('en')}>EN</button>
            <span className={s.spliter}></span>
            <button onClick={() => change('ua')}>UA</button>
        </article>

    )
}
