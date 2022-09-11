import PropTypes from 'prop-types';
import s from './boxNameForTimer.module.scss';

const BoxNameForTimer = ({value, onChange, placeholder}) => {
    return (
        <div className={s.timerNameBox}>
            <label className={s.timerName}> Ім'я для таймера <sup className={s.timerNameSup}>(необов'язково)</sup>
                <input
                    type="text"
                    name="name"
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={s.timerNameInput}
                    title="Введіть ім'я таймера"
                />
            </label>
        </div>
    );
};

export default BoxNameForTimer;

BoxNameForTimer.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired
}