
import TimerTypeDefinition from "components/TimerTypeDefinition";
import { useState } from "react";
import { Link } from 'react-router-dom';
import s from './timersList.module.scss';

const TimersList = () => {
    const [timers] = useState(() => JSON.parse(localStorage.getItem('timers')));

    return (
        <div>
            {timers ?
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
                    <Link to={`/`}> Home </Link>
                </>
                :
                <h1>555</h1>
            }
        </div>
    );
};

export default TimersList;