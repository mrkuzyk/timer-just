import { NavLink } from "react-router-dom";
import s from './buttonBack.module.scss';

const ButtonBack = () => {
    return (
        <>
            <NavLink to='/create' className={s.btn} > Назад </NavLink>
        </>
    );
};

export default ButtonBack;