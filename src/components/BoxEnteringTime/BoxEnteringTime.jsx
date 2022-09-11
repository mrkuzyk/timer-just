import PropTypes from 'prop-types';
import s from './boxEnteringTime.module.scss';

const BoxEnteringTime = ({name, hoursName, hoursValue, minutesName,minutesValue, secondsName, secondsValue, onChange}) => {
    return (
        <div className={s.timeBox}>
            <p className={s.timeTittle}>{name}</p>
            <div className={s.timeNumbBox}>
                <label className={s.timeLabel}> години
                    <input
                        type="number"
                        name={hoursName}
                        value={hoursValue}
                        min="0"
                        max="23"
                        pattern="[0-9]{2}"
                        onChange={onChange}
                        placeholder="гг"
                        className={s.input}
                        title="Години"
                    />
                </label>
                <label className={s.timeLabel}> хвилини
                    <input
                        type="number"
                        name={minutesName}
                        value={minutesValue}
                        min="0"
                        max="59"
                        onChange={onChange}
                        placeholder="хх"
                        className={s.input}
                        title="Хвилини"
                    />
                </label>
                <label className={s.timeLabel}> секунди
                    <input
                        type="number"
                        name={secondsName}
                        value={secondsValue}
                        min="0"
                        max="59"
                        onChange={onChange}
                        placeholder="сс"
                        className={s.input}
                        title="Секунди"
                    />
                </label>
            </div>
        </div>
    );
};

export default BoxEnteringTime;

BoxEnteringTime.propTypes = {
    name: PropTypes.string.isRequired,
    hoursName: PropTypes.string.isRequired,
    hoursValue: PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.string.isRequired
    ]),
    minutesName: PropTypes.string.isRequired,
    minutesValue: PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.string.isRequired
    ]),
    secondsName: PropTypes.string.isRequired,
    secondsValue: PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.string.isRequired
    ]),
    onChange: PropTypes.func.isRequired
}