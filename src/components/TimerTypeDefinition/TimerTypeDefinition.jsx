import { NavLink } from "react-router-dom";
import s from './timerTypeDefinition.module.scss'

const TimerTypeDefinition = ({typeTimer , id, children}) => {
    return (
        <>
            {typeTimer === 'single' &&
                <NavLink
                    to={`/timers/single/${id}`}
                    className={({ isActive }) => isActive ? `${s.active} ${s.navLink}` : s.navLink}
                    // state={{ from: location }}
                >
                    {children}
                </NavLink>
            }
            {typeTimer === 'interval' &&
                <NavLink
                    to={`/timers/interval/${id}`}
                    className={({ isActive }) => isActive ? `${s.active} ${s.navLink}` : s.navLink}
                >
                    {children}
                </NavLink>
            }
        </>
    );
};

export default TimerTypeDefinition;