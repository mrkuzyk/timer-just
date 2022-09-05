import { NavLink } from "react-router-dom";
import s from './buttonHome.module.scss';
// import PropTypes from 'prop-types';

const ButtonHome = () => {
    return (
        <>
            <NavLink to='/' className={s.btn} > Головна </NavLink>
        </>
    );
};

export default ButtonHome;

// ButtonHome.propTypes = {
//     to: PropTypes.string.isRequired
// };

