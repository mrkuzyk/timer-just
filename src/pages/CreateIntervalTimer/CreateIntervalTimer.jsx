import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { getTimeSum } from 'helpers';
import s from './createIntervalTimer.module.scss';

const CreateIntervalTimer = () => {
    const [timers, setTimers] = useState(() => JSON.parse(localStorage.getItem('timers')) ?? []); // лінива ініціалізація
    const [disposableTimer, setDisposableTimer] = useState('');

    const [saveTimer, setSaveTimer] = useState(false);
    const [startTimer, setStartTimer] = useState(false);
    const [typeTimer] = useState('interval');

    const [name, setName] = useState('');
    const [workHours, setWorkHours] = useState('');
    const [workMinutes, setWorkMinutes] = useState('');
    const [workSeconds, setWorkSeconds] = useState('');
    const [restHours, setRestHours] = useState('');
    const [restMinutes, setRestMinutes] = useState('');
    const [restSeconds, setRestSeconds] = useState('');

    const [home, setHome] = useState('');
    const [workSum, setWorkSum] = useState('');
    const [restSum, setRestSum] = useState('');

    const handleChange = e => {
        const { name, value } = e.currentTarget; // отримую значення з інпуту

        switch (name) {  // записую введені дані 
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

    const handleSave = e => {
        setSaveTimer(prevState => !prevState) // якщо натиснути чекбокс "зберегти"
    };

    useEffect(() => { 
        const timeSum = getTimeSum( workSeconds, workMinutes, workHours );
        setWorkSum(timeSum);
    }, [workSeconds, workMinutes, workHours]);

    useEffect(() => { 
        const timeRestSum = getTimeSum( restSeconds, restMinutes, restHours );
        setRestSum(timeRestSum);
    },[restSeconds, restMinutes, restHours])

    const handleCreate = (e) => {
        e.preventDefault();

        const timer = {
            id: nanoid(6),
            typeTimer,
            name,
            workSum,
            restSum
        };

        if (saveTimer) { setTimers(prevState => [...timers, timer]) }; // якщо потрібно то додаю новий таймер до всіх
        
        setDisposableTimer(timer) // додаю таймер в одноразовий сторедж
        setStartTimer(true) // 
        reset();
    };

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

    useEffect(() => { // записую в локал сторедж таймери
        window.localStorage.setItem('timers', JSON.stringify(timers))
    }, [timers])
    
    useEffect(() => { // записую в локал сторедж одноразовий таймер
        window.localStorage.setItem('interval', JSON.stringify(disposableTimer))
    },[disposableTimer])

    const homes = () => {
        setHome(true);
    }

    return (
        <>
            {startTimer && <Navigate to={`/timers/interval`} replace={true} />}
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
                    {workSum !== 0 && <button type="submit" className={s.button}>Створити</button>}
                </div>
            </form>
        </>
    );
};

export default CreateIntervalTimer;