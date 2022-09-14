import PropTypes from 'prop-types';
import { addLeadingZero } from 'helpers';
import s from './boxTimeDisplay.module.scss';


const BoxTimeDisplay = ({ hours, minutes, seconds }) => {
    return (
        <div className={s.boxTime}>
            {hours !== addLeadingZero(0) && <p className={s.time} >{hours} </p>}
            <p className={s.time} >{minutes} </p>
            <p className={s.time} >{seconds} </p>
        </div>
    );
};

export default BoxTimeDisplay;

BoxTimeDisplay.propTypes = {
    hours: PropTypes.string.isRequired,
    minutes: PropTypes.string.isRequired,
    seconds: PropTypes.string.isRequired,
}