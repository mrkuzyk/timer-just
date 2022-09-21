import useWindowWidth from 'hooks';
import { useEffect, useState } from 'react';
import { Navigate, NavLink, Outlet, useLocation } from 'react-router-dom';
import s from './createTimers.module.scss';

const CreateTimers = () => {
    const [firstRender, setFirstRender] = useState(true);
    const windowWidth = useWindowWidth();
    const {pathname} = useLocation();

    useEffect(() => {
        if (firstRender) {
            setFirstRender(false);
        };
    }, [firstRender]);
    
    return (
        <>
            <div className={s.container}>
                <div className={s.mainCreate}>
                    { firstRender && windowWidth > 1023 && pathname === '/create' && <Navigate to='simple'/>}
                    <NavLink
                        to='simple'
                        className={({ isActive }) => isActive ? `${s.active} ${s.navLink}` : s.navLink}
                    >
                        Простий таймер
                    </NavLink>
                    <NavLink
                        to='interval'
                        className={({ isActive }) => isActive ? `${s.active} ${s.navLink}` : s.navLink}
                    >
                        Інтервальний таймер
                    </NavLink>
                    <NavLink
                        to='stopwatch'
                        className={({ isActive }) => isActive ? `${s.active} ${s.navLink}` : s.navLink}
                    >
                        Секундомір
                    </NavLink>
                </div>
                <h2 className={s.title}>Шаблони</h2>
                <div className={s.templateCreate}>
                    <NavLink
                        to='/box'
                        className={({ isActive }) => isActive ? `${s.active} ${s.navLink}` : s.navLink}
                    >
                        Бокс
                    </NavLink>
                    <NavLink
                        to='/mma'
                        className={({ isActive }) => isActive ? `${s.active} ${s.navLink}` : s.navLink}
                    >
                        MMA
                    </NavLink>
                    <NavLink
                        to='/football'
                        className={({ isActive }) => isActive ? `${s.active} ${s.navLink}` : s.navLink}
                    >
                        Футбол
                    </NavLink>
                    </div>
            </div>
            <Outlet />
        </>
    );
}

export default CreateTimers;
