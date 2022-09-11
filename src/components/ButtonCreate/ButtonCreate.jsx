import PropTypes from 'prop-types';
import s from './buttonCreate.module.scss';

const ButtonCreate = ({ disabled}) => {
    return (
        <button
            type="submit"
            className={s.button}
            disabled={disabled}
        >
            Створити
        </button>
    );
};

export default ButtonCreate;

ButtonCreate.propTypes = {
    disabled: PropTypes.bool.isRequired
};