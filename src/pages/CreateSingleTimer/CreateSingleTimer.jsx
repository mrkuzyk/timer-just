import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { getTimeSum } from 'helpers';
import s from './createSingleTimer.module.scss';

const CreateSingleTimer = () => {
    const [timers, setTimers] = useState(() => JSON.parse(localStorage.getItem('timers')) ?? []); // лінива ініціалізація
    const [disposableTimer, setDisposableTimer] = useState(''); // тут зберігається одноразові дані для переоду на створений таймер

    const [saveTimer, setSaveTimer] = useState(false); // чи потрібно зберігати таймер
    const [startTimer, setStartTimer] = useState(false); // для переходу на створений таймер
    const [typeTimer] = useState('single');

    const [name, setName] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    
    const [home, setHome] = useState('');
    const [totalTimeSum, setTotalTimeSum] = useState(''); //загальна сума часу
    
    const handleChange = e => {
        const { name, value } = e.currentTarget; // отримую значення з інпуту

        switch (name) { // записую введені дані 
            case 'name':
                setName(value);
                break;
            
            case 'hours':
                setHours(value);
                break;
            
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

    const handleSave = e => {
        setSaveTimer(prevState => !prevState) // якщо натиснути чекбокс "зберегти"
    };

    useEffect(() => {
        const timeSum = getTimeSum(seconds, minutes, hours);
        setTotalTimeSum(timeSum);
    },[hours, minutes, seconds]);

    useEffect(() => { // записую в локал сторедж таймери
        window.localStorage.setItem('timers', JSON.stringify(timers))
    }, [timers]);
    
    useEffect(() => { // записую в локал сторедж одноразовий таймер
        window.localStorage.setItem('single', JSON.stringify(disposableTimer))
    }, [disposableTimer]);

    const handleCreate = e => {
        e.preventDefault();

        const timer = {
            id: nanoid(6),
            typeTimer,
            name,
            totalTimeSum,
        }

        if (saveTimer) { setTimers(prevState => [...timers, timer]) }; // якщо потрібно то додаю новий таймер до всіх

        setDisposableTimer(timer); // додаю таймер в одноразовий сторедж
        setStartTimer(true);
        reset();
    };

    const reset = () => {
        // очищую імпути
        setName('');
        setHours('');
        setMinutes('');
        setSeconds('');
        setTotalTimeSum('');
    };

    const homes = () => {
        setHome(true);
    }

    return (
        <>
            {startTimer && <Navigate to={`/timers/single`} replace={true} />}
            {home && <Navigate to={`/`} replace={true} />}
            <form onSubmit={handleCreate} className={s.form}>
                <div className={s.inputBox}>
                    <div>
                        <label>
                            <input 
                                type="text" 
                                name="name"
                                value={name}
                                onChange={handleChange}
                                placeholder="Timer name"
                                className={s.inputName}
                                title="Введіть ім'я таймера"
                            />
                        </label>
                    </div>
                    <label>
                        <input 
                            type="number" 
                            name="hours"
                            value={hours}
                            min="0"
                            max="23"
                            pattern="[0-9]{2}"
                            onChange={handleChange}
                            placeholder="00"
                            className={s.input}
                            title="Години"
                        />
                    </label>
                    <label>
                        <input 
                            type="number" 
                            name="minutes"
                            value={minutes}
                            min="0"
                            max="59"
                            onChange={handleChange}
                            placeholder="00"
                            className={s.input}
                            title="Хвилини"
                        />
                    </label>
                    <label>
                        <input 
                            type="number" 
                            name="seconds"
                            value={seconds}
                            min="0"
                            max="59"
                            onChange={handleChange}
                            placeholder="00"
                            className={s.input}
                            title="Секунди"
                        />
                    </label>
                </div>
                <label> Зберегти
                    <input 
                        type="checkbox"
                        name="handleChange"
                        checked={saveTimer}
                        onChange={handleSave }
                    />
                </label>
                <div className={s.btnBox}>
                    <button type="button" onClick={homes}>Home</button>
                    {totalTimeSum !== 0 && <button type="submit" className={s.button}>Створити</button>}
                </div>
            </form>
        </>
    );
};

export default CreateSingleTimer;
