import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { getTimeSum } from 'helpers';
import s from './experiment.module.scss';

const Experiment = () => {
    const [timers, setTimers] = useState(() => JSON.parse(localStorage.getItem('exp')) ?? []); // лінива ініціалізація
    const [tempTimer, setTempTimer] = useState('')
    const [name, setName] = useState('');

    const [workHours, setWorkHours] = useState('');
    const [workMinutes, setWorkMinutes] = useState('');
    const [workSeconds, setWorkSeconds] = useState('');
    const [restHours, setRestHours] = useState('');
    const [restMinutes, setRestMinutes] = useState('');
    const [restSeconds, setRestSeconds] = useState('');

    const [startTimer, setStartTimer] = useState(false);
    const [home, setHome] = useState('');
    const [workSum, setWorkSum] = useState('');
    const [restSum, setRestSum] = useState('');

    console.log(restSum);

    const handleChange = e => {
        const { name, value } = e.currentTarget; // отримую значення з інпуту

        // записую введені дані 
        switch (name) {
            case 'name':
                setName(value);
                break;
            
            case 'workHours':
                setWorkHours(value);
                break;
            
            case 'workMinutes':
                setWorkMinutes(value);
                break;
            
            case 'workSeconds':
                setWorkSeconds(value);
                break;
            
            case 'restHours':
                setRestHours(value);
                break;
            
            case 'restMinutes':
                setRestMinutes(value);
                break;
            
            case 'restSeconds':
                setRestSeconds(value);
                break;
        
            default:
                break;
        };
    };

    useEffect(() => {
        const timeSum = getTimeSum( workSeconds, workMinutes, workHours );
        setWorkSum(timeSum);
    }, [workSeconds, workMinutes, workHours]);

    useEffect(() => {
        const timeRestSum = getTimeSum( restSeconds, restMinutes, restHours );
        setRestSum(timeRestSum);
    },[restSeconds, restMinutes, restHours])

    const handleSave = e => {
        e.preventDefault();

        const timer = {
            id: nanoid(6),
            name,
            workSum,
            restSum
        }

        // додаю новий таймер
        setTimers(prevState => [...timers, timer])
        reset();
    }

    const handleCreate = (e) => {
        e.preventDefault();

        const timer = {
            id: nanoid(6),
            name,
            workSum,
            restSum
        }

        // додаю таймер в сторедж
        setTempTimer(timer)
        setStartTimer(true)
        reset();

    }

    const reset = () => {
        // очищую імпути
        setName('');
        setWorkHours('');
        setWorkMinutes('');
        setWorkSeconds('');
        setRestHours('');
        setRestMinutes('');
        setRestSeconds('');
        setWorkSum('');
        setRestSum('');
    };

    useEffect(() => {
        // записую в локал сторедж контакти
        window.localStorage.setItem('exp', JSON.stringify(timers))
    }, [timers])
    
    useEffect(() => {
        // записую в локал сторедж контакти
        window.localStorage.setItem('tempTimerExp', JSON.stringify(tempTimer))
    },[tempTimer])

    const homes = () => {
        setHome(true);
    }

    return (
        <>
            {startTimer && <Navigate to={`/exp/${tempTimer.id}`} replace={true} />}
            {home && <Navigate to={`/`} replace={true} />}
            <form onSubmit={handleSave} className={s.form}>
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
                                required
                            />
                        </label>
                    </div>
                    <label>
                        <input 
                            type="number" 
                            name="workHours"
                            value={workHours}
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
                            name="workMinutes"
                            value={workMinutes}
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
                            name="workSeconds"
                            value={workSeconds}
                            min="0"
                            max="59"
                            onChange={handleChange}
                            placeholder="00"
                            className={s.input}
                            title="Секунди"
                        />
                    </label>
                </div>
                <div className={s.inputBox}>
                    <p>Відпочинок</p>
                    <label>
                        <input 
                            type="number" 
                            name="restHours"
                            value={restHours}
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
                            name="restMinutes"
                            value={restMinutes}
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
                            name="restSeconds"
                            value={restSeconds}
                            min="0"
                            max="59"
                            onChange={handleChange}
                            placeholder="00"
                            className={s.input}
                            title="Секунди"
                        />
                    </label>
                </div>
                <div className={s.btnBox}>
                    <button type="button" onClick={homes}>Home</button>
                    {workSum !== 0 && <button type="submit" className={s.button}>Зберегти</button>}
                    {workSum !== 0 && <button type="submit" className={s.button} onClick={handleCreate}>Створити</button>}
                </div>
            </form>
        </>
    );
};

export default Experiment;