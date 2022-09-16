import { NavLink } from 'react-router-dom';
import s from './home.module.scss';

const Home = () => {
    return (
        <div className={s.container} >
            {/* <NavLink to='/' className={s.navLink}> Головна </NavLink> */}
            <NavLink to='/create' className={s.navLink} > Створити таймер </NavLink>
            <NavLink to='/timers' className={s.navLink} > Збережені таймери </NavLink>
            <NavLink to='/login' className={s.navLink} > Увійти </NavLink>
            <NavLink to='/register' className={s.navLink} > Зареєструватися </NavLink>
        </div>
    );
}

export default Home;