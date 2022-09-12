import NoTimerListPage from "components/NoTimerListPage";
import TimerTypeDefinition from "components/TimerTypeDefinition";
import useWindowWidth from "hooks";
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import s from './timersList.module.scss';

const TimersList = () => {
    const [timers] = useState(() => JSON.parse(localStorage.getItem('timers')));
    const windowWidth = useWindowWidth();
    // console.log(timers.length);

    return (
        <div className={s.container}>
            {windowWidth < 1024 && <NavLink to='/' className={s.btn} > Назад </NavLink>}
            {timers.length > 0 ?
                <>
                    <ul className={s.list}>
                        {timers.map(({ id, name, totalTimeSum, typeTimer }) =>
                            <li key={id} className={s.items}>
                                <TimerTypeDefinition
                                    id={id}
                                    typeTimer={typeTimer}
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
    );
};

export default TimersList;