import { useState } from "react";
import s from './TimerForm.module.scss';

const TimerForm = ({onSubmit}) => {
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    // console.log(minutes, seconds);

    const handleChange = e => {
        const { name, value } = e.currentTarget; // отримую значення з інпуту

        // записую введені дані 
        switch (name) {
            case 'minutes':
                setMinutes(value);
                break;
            
            case 'seconds':
                setSeconds(value);
                break;
        
            default:
                break;
        };
    };

    const handleSubmit = e => {
        e.preventDefault();

        onSubmit({ minutes, seconds });
    }


    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <label>
                <input 
                    type="number" 
                    name="minutes"
                    value={minutes}
                    onChange={handleChange}
                    className={s.input}
                />
            </label>
            <label>
                <input 
                    type="number" 
                    name="seconds"
                    value={seconds}
                    onChange={handleChange}
                    className={s.input}
                />
            </label>
            <button type="submit" >+</button>
        </form>
    );
};

export default TimerForm;