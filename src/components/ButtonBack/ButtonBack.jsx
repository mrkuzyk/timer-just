import useWindowWidth from "hooks";
import { NavLink } from "react-router-dom";
import s from './buttonBack.module.scss';

const ButtonBack = () => {
    const windowWidth = useWindowWidth();

    return (
        <>
            <NavLink to={windowWidth < 1024 ? '/create' : '/'} className={s.btn} > Назад </NavLink>
        </>
    );
};

export default ButtonBack;