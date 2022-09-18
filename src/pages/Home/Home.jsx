import HomeTimerList from 'components/HomeTimerList/HomeTimerList';
import WarTime from 'components/WarTime';
import useWindowWidth from 'hooks';
import { Link, NavLink } from 'react-router-dom';
import s from './home.module.scss';

const Home = () => {
    const windowWidth = useWindowWidth();
    
    return (
        <div className={s.container} >
            {/* <NavLink to='/' className={s.navLink}> Головна </NavLink> */}
            <div className={s.boxAuthorization}>
                <NavLink to='/login' className={s.authorization} > Увійти </NavLink>
                <NavLink to='/register' className={s.authorization} > Зареєструватися </NavLink>
            </div>
            <div className={s.boxCreate}>
                <h2 className={s.createTitle}>Створити таймер</h2>
                <ul className={s.createList}>
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
            {windowWidth < 1024
                ?
                    <div className={s.box}>
                        <NavLink to='/timers' className={s.saved} > Збережені таймери </NavLink>
                        {windowWidth > 480 && <WarTime />}
                    </div>
                :
                <>
                    <div className={s.boxSaved}>
                        <h2 className={s.savedTitle}>Збережені таймери</h2>
                        <HomeTimerList/>
                    </div>
                    <div className={s.boxWar}>
                        <WarTime />
                    </div>
                </>
            }
            <WarTime />
        </div>
    );
}

export default Home;