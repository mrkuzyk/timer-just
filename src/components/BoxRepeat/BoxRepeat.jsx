import PropTypes from 'prop-types';
import s from './boxRepeat.module.scss';

const BoxRepeat = ({value, onChange}) => {
    return (
        <div className={s.repeatBox}>
            <label className={s.repeatLabel} htmlFor="repeatInput">
                <span className={s.repeatSpan}>Кількість повторів </span>
            </label>
            <input
                type="number"
                name="repeat"
                value={value}
                min="0"
                max="99"
                onChange={onChange}
                placeholder="1"
                className={s.repeatInput}
                title="Кількість повторів"
                id='repeatInput'
            />
        </div>
    );
};

export default BoxRepeat;

BoxRepeat.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.string.isRequired
    ]),
    onChange: PropTypes.func.isRequired
}