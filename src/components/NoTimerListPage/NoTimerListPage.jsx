import { NavLink } from 'react-router-dom';
import s from './noTimerListPage.module.scss';

const NoTimerListPage = () => {
    return (
        <div className={s.container}>
            <NavLink to='/' className={s.btn} > Назад </NavLink>
            {/* <h1 className={s.tittle}>У тебе немає жодного збереженого таймера</h1> */}
            <h1 className={s.info}>
                <NavLink
                    to='/login'
                    className={s.infoAccent}
                >
                    Увійди 
                </NavLink>
                <p className={s.text}>щоб побачити збережені таймери </p>
            </h1>
        </div>
    )
};

export default NoTimerListPage;