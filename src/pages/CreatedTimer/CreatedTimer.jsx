import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { getAllTimers, getTimeSum } from 'helpers';
import s from './createdTimer.module.scss';

const CreatedTimer = () => {
    const [timers, setTimers] = useState(() => getAllTimers ?? []); // лінива ініціалізація
    const [tempTimer, setTempTimer] = useState('')
    const [name, setName] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    const [startTimer, setStartTimer] = useState(false);
    const [home, setHome] = useState('');
    const [sum, setSum] = useState('');
    // console.dir(hours)

    const handleChange = e => {
        const { name, value } = e.currentTarget; // отримую значення з інпуту

        // записую введені дані 
        switch (name) {
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

    useEffect(() => {
        const timeSum = getTimeSum({ seconds, hours, minutes });
        setSum(timeSum);
    },[hours, minutes, seconds])

    const handleSave = e => {
        e.preventDefault();

        const timer = {
            id: nanoid(6),
            name,
            sum,
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
            sum,
        }

        // додаю таймер в сторедж
        setTempTimer(timer)
        setStartTimer(true)
        reset();

    }

    const reset = () => {
        // очищую імпути
        setName('');
        setHours('');
        setMinutes('');
        setSeconds('');
        setSum('');
    };

    useEffect(() => {
        // записую в локал сторедж контакти
        window.localStorage.setItem('timers', JSON.stringify(timers))
    }, [timers])
    
    useEffect(() => {
        // записую в локал сторедж контакти
        window.localStorage.setItem('tempTimer', JSON.stringify(tempTimer))
    },[tempTimer])

    const homes = () => {
        setHome(true);
    }

    return (
        <>
            {startTimer && <Navigate to={`/one-time/${tempTimer.id}`} replace={true} />}
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
                            name="hours"
                            value={hours}
                            min="0"
                            max="24"
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
                            max="60"
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
                            max="60"
                            onChange={handleChange}
                            placeholder="00"
                            className={s.input}
                            title="Секунди"
                        />
                    </label>
                </div>
                <div className={s.btnBox}>
                    <button type="button" onClick={homes}>Home</button>
                    {sum !== 0 && <button type="submit" className={s.button}>Зберегти</button>}
                    {sum !== 0 && <button type="submit" className={s.button} onClick={handleCreate}>Створити</button>}
                </div>
            </form>
            <h2>{ hours} - {minutes} - {seconds} - {sum} </h2>
        </>
        
    );
};

export default CreatedTimer;