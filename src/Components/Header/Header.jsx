import headerBg from '/img/header.svg';

import s from './Header.module.scss';

export default function Header() {
    return (
        <header className={s.header} style={{ backgroundImage: `url(${headerBg})` }}></header>
    )
}