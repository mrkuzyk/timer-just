import { Link } from "react-router-dom";
import s from './timerTypeDefinition.module.scss'

const TimerTypeDefinition = ({typeTimer , id, children}) => {
    return (
        <>
            {typeTimer === 'single' &&
                <Link
                    to={`/timers/single/${id}`}
                    className={s.link}
                    // state={{ from: location }}
                >
                    {children}
                </Link>
            }
            {typeTimer === 'interval' &&
                <Link
                    to={`/timers/interval/${id}`}
                    className={s.link}
                >
                    {children}
                </Link>
            }
        </>
    );
};

export default TimerTypeDefinition;