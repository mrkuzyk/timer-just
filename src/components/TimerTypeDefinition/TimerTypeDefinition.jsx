import { NavLink } from "react-router-dom";
import s from './timerTypeDefinition.module.scss'

const TimerTypeDefinition = ({ page, typeTimer, id, children }) => {
    console.log(page === 'list');
    return (
        <>
            {typeTimer === 'single' &&
                <NavLink
                    to={`/timers/single/${id}`}
                    className={ page === 'list'
                        ?
                        ({ isActive }) => isActive ? `${s.active} ${s.navLink}` : s.navLink
                        :
                        s.homeList
                    }
                    // state={{ from: location }}
                >
                    {children}
                </NavLink>
            }
            {typeTimer === 'interval' &&
                <NavLink
                    to={`/timers/interval/${id}`}
                    className={page === 'list'
                        ?
                        ({ isActive }) => isActive ? `${s.active} ${s.navLink}` : s.navLink
                        :
                        s.homeList
                    }
                >
                    {children}
                </NavLink>
            }
        </>
    );
};

export default TimerTypeDefinition;