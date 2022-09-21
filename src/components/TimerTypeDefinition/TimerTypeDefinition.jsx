import { NavLink } from "react-router-dom";
import s from './timerTypeDefinition.module.scss';

const TimerTypeDefinition = ({ page, typeTimer, id, children }) => {
    // в page передаю 1 з двох значень: 'list' - це стилі для сторінки основної з списком, 'home' - для малого списку на головній сторінці
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

//! PropType