import { NoTimerListHome } from "components/PagesMessage";
import TimerTypeDefinition from "components/TimerTypeDefinition";
import { useState } from "react";
import s from './homeTimerList.module.scss';

const HomeTimerList = () => {
    const [timers] = useState(() => JSON.parse(localStorage.getItem('timers')));

    return (
        
        <div className={s.boxSavedList}>
            {timers?.length > 0 ?
                <>
                    <ul className={s.list}>
                        {timers.map(({ id, name, totalTimeSum, typeTimer }) =>
                            <li key={id} className={s.items}>
                                <TimerTypeDefinition
                                    id={id}
                                    typeTimer={typeTimer}
                                    page={'home'}
                                >
                                    {name ? name : 'Timer'}<br />{totalTimeSum} / {typeTimer}
                                </TimerTypeDefinition>
                            </li>
                        )}
                    </ul>
                </>
                :
                <NoTimerListHome />
            }
        </div>
    );
};

export default HomeTimerList;