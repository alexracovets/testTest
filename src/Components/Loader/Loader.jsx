import s from './Loader.module.scss';

export default function Loader() {
    return (
        <div className={s.loader}>
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
    );
}
