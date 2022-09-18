import NoTimerListPage from "components/NoTimerListPage";
import TimerTypeDefinition from "components/TimerTypeDefinition";
import useWindowWidth from "hooks";
import { useState, useEffect } from "react";
import { Navigate, NavLink, Outlet } from 'react-router-dom';
import s from './timersList.module.scss';

const TimersList = () => {
    const [timers] = useState(() => JSON.parse(localStorage.getItem('timers')));
    const [firstRender, setFirstRender] = useState(true);

    const windowWidth = useWindowWidth();
    const {typeTimer, id} = timers[0];

    useEffect(() => {
        if (firstRender) {
            setFirstRender(false);
        };
    },[firstRender]);

    return (
        <>
            <div className={s.container}>
                {windowWidth < 1024 && <NavLink to='/' className={s.btn} > Назад </NavLink>}
                {timers.length > 0 ?
                    <>
                        {firstRender && windowWidth > 1023 && <Navigate to={`/timers/${typeTimer}/${id}`} />}
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