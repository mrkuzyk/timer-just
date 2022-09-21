
import { NoTimerListPage } from "components/PagesMessage";
import TimerTypeDefinition from "components/TimerTypeDefinition";
import { pathDefinition } from "helpers";
import useWindowWidth from "hooks";
import { useState, useEffect } from "react";
import { Navigate, NavLink, Outlet, useLocation } from 'react-router-dom';
import s from './timersList.module.scss';

const TimersList = () => {
    const [timers] = useState(() => JSON.parse(localStorage.getItem('timers')));
    const [firstRender, setFirstRender] = useState(true);
    const {pathname} = useLocation();
    const windowWidth = useWindowWidth();

    useEffect(() => {
        if (firstRender) {
            setFirstRender(false);
        };
    }, [firstRender]);
    
    const path = pathDefinition({timers, pathname});

    return (
        <>
            <div className={timers?.length ? `${s.container} ${s.line}` : s.container}>
                {timers?.length ?
                    <>
                        {windowWidth < 1024 && <NavLink to='/' className={s.btn} > Назад </NavLink>}
                        {firstRender && windowWidth > 1023 && <Navigate to={path} />}
                        <ul className={s.list}>
                            {timers.map(({ id, name, totalTimeSum, typeTimer }) =>
                                <li key={id} className={s.items}>
                                    <TimerTypeDefinition
                                        id={id}
                                        typeTimer={typeTimer}
                                        page={'list'}
                                    >
                                        {name ? name : 'Timer'}<br/>{totalTimeSum} / {typeTimer}
                                    </TimerTypeDefinition>
                                </li>
                            )}
                        </ul>
                    </>
                    :
                    <NoTimerListPage/>
                }
            </div>
            <Outlet />
        </>
    );
};

export default TimersList;