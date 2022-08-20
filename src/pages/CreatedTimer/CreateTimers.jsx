import { NavLink } from 'react-router-dom';
import s from './createTimers.module.scss';

const CreateTimers = () => {
    return (
        <div 
            className={s.container}
        >
            <NavLink
                to='/create/simple'
                className={s.navLink}
            >
                Простий таймер
            </NavLink>
            <NavLink
                to='/create/interval'
                className={s.navLink}
            >
                Інтервальний таймер
            </NavLink>
            <h2>Шаблони</h2>
            <NavLink
                to='/box'
                className={s.navLink}
            >
                Бокс
            </NavLink>
        </div>
    );
}

export default CreateTimers;