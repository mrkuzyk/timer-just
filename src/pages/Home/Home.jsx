import { NavLink } from 'react-router-dom';
import s from './home.module.scss';

const Home = () => {
    return (
        <div 
            className={s.container}
        >
            <NavLink
                to='/'
                className={s.navLink}
            >
                Home
            </NavLink>
            <NavLink
                to='/create'
                className={s.navLink}
            >
                New timer
            </NavLink>
            <NavLink
                to='/timers'
                className={s.navLink}
            >
                My Timers
            </NavLink>
            <NavLink
                to='/experiment'
                className={s.navLink}
            >
                Exp
            </NavLink>
        </div>
    );
}

export default Home;