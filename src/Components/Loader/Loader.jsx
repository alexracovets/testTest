import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import s from './Loader.module.scss';

export default function Loader() {
    const isLoad = useSelector((state) => state.stateLoader.isActive);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(isLoad)
    }, [isLoad])

    return (
        <>
            {
                !isActive && <div className={s.loader}>
                    <div className={s.roller}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            }
        </>
    );
}
