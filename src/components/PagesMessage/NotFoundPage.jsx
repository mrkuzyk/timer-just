import { NavLink } from 'react-router-dom';
import s from './style.module.scss';

const NotFoundPage = () => {
    return (
        <div className={s.container}>
            <NavLink to='/' className={s.button} > Головна </NavLink>
            <div className={s.center}>
                <h2 className={s.info}> Халепа... щось пішло не так </h2>
                <h2 className={s.info}> Можливо такої сторінки немає  </h2>
            </div>
        </div>
    )
};

export default NotFoundPage;