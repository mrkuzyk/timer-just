import PropTypes from 'prop-types';
import s from './buttonSave.module.scss';

const ButtonSave = ({checked, onChange}) => {
    return (
        <div className={s.saveBox}>
            <label className={s.saveLabel} htmlFor="saveInput"> Зберегти таймер </label>
            <input 
                type="checkbox"
                name="handleChange"
                checked={checked}
                onChange={onChange}
                className={s.saveInput}
                id="saveInput"
            />
        </div>
    )
};

export default ButtonSave;

ButtonSave.propTypes = {
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
}