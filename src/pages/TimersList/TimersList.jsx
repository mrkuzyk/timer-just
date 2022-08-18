
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