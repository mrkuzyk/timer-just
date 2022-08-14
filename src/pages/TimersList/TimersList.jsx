
import { useState } from "react";
import { Link } from 'react-router-dom';
import { getAllTimers } from "helpers";
import s from './timersList.module.scss';


const TimersList = () => {
    const [timers] = useState(() => getAllTimers);

    return (
        <div>
            {timers ?
                <>
                    <ul className={s.list}>
                        {timers.map(({ id, name, sum }) =>
                            <li key={id} className={s.items}>
                                <Link
                                    to={`/timers/${id}`}
                                    className={s.link}
                                    // state={{ from: location }}
                                >
                                    {name}/
                                    {sum}
                                </Link>
                            </li>
                        )}
                    </ul>
                    <Link to={`/`} > Home </Link>
                </>
                :
                <h1>555</h1>
            }
        </div>
    );
};

export default TimersList;