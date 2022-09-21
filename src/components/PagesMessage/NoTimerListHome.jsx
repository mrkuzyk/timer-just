import s from './style.module.scss';

const NoTimerListHome = () => {
    return (
        <div className={s.containerHome}>
            <h1 className={s.titleHome}>
                У тебе ще немає збережених таймерів
            </h1>
        </div>
    )
};

export default NoTimerListHome;