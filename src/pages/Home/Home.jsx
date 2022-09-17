
import { Link, NavLink } from 'react-router-dom';
import s from './home.module.scss';

const Home = () => {
    return (
        <div className={s.container} >
            {/* <NavLink to='/' className={s.navLink}> Головна </NavLink> */}
            <div className={s.boxCreate}>
                <h2 className={s.createTitle}>Створити таймер</h2>
                    <ul  className={s.createList}>
                        <li className={s.createItems}>
                            <Link
                                to='create/simple'
                                className={s.navLink}
                            >
                                Простий таймер
                            </Link>
                        </li>
                        <li className={s.createItems}>
                            <Link
                                to='create/interval'
                                className={s.navLink}
                            >
                                Інтервальний таймер
                            </Link>
                        </li>
                        <li className={s.createItems}>
                            <Link
                                to='create/stopwatch'
                                className={s.navLink}
                            >
                                Секундомір
                            </Link>
                        </li>
                        <li className={s.createItems}>
                            <Link
                                to='/create'
                                className={s.navLink}
                                // className={s.create}
                            >
                                <span className={s.createSpan}>...</span>
                            </Link>
                        </li>
                    </ul>
            </div>
            <NavLink to='/timers' className={s.saved} > Збережені таймери </NavLink>
            {/* <NavLink to='/login' className={s.navLink} > Увійти </NavLink> */}
            {/* <NavLink to='/register' className={s.navLink} > Зареєструватися </NavLink> */}
        </div>
    );
}

export default Home;