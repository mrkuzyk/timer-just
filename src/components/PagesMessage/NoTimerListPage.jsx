import { NavLink } from 'react-router-dom';
import s from './style.module.scss';

const NoTimerListPage = () => {
    return (
        <div className={s.container}>
            <NavLink to='/' className={s.button} > Назад </NavLink>
            {/* <h1 className={s.tittle}>У тебе немає жодного збереженого таймера</h1> */}
            <h1 className={s.title}>
                <NavLink
                    to='/login'
                    className={s.titleAccent}
                >
                    Увійди 
                </NavLink>
                <p className={s.text}>щоб побачити збережені таймери </p>
            </h1>
        </div>
    )
};

export default NoTimerListPage;