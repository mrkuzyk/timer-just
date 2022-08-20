import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { getTimeSum } from 'helpers';
import s from './createSingleTimer.module.scss';

const CreateSingleTimer = () => {
    const [timers, setTimers] = useState(() => JSON.parse(localStorage.getItem('timers')) ?? []); // лінива ініціалізація
    const [tempTimer, setTempTimer] = useState('')
    const [name, setName] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    const [startTimer, setStartTimer] = useState(false);
    const [home, setHome] = useState('');
    const [sum, setSum] = useState('');
    const [saveTimer, setSaveTimer] = useState(false);
    // console.log('set', saveTimer)

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

            case 'saveTimer':
                setSaveTimer(value);
                break;
        
            default:
                break;
        };
    };

    const handleSave = e => {
        setSaveTimer(prevState => !prevState)
    };

    useEffect(() => {
        const timeSum = getTimeSum(seconds, minutes, hours);
        setSum(timeSum);
    },[hours, minutes, seconds]);

    useEffect(() => {
        // записую в локал сторедж таймери
        window.localStorage.setItem('timers', JSON.stringify(timers))
    }, [timers]);
    
    useEffect(() => {
        // записую в локал сторедж тимчасовий таймер
        window.localStorage.setItem('tempTimer', JSON.stringify(tempTimer))
    }, [tempTimer]);

    const handleCreate = e => {
        e.preventDefault();

        const timer = {
            id: nanoid(6),
            name,
            sum,
        }

        if(saveTimer){
        // додаю новий таймер
        setTimers(prevState => [...timers, timer]);
        };

        setTempTimer(timer);
        setStartTimer(true);
        reset();
    };

    const reset = () => {
        // очищую імпути
        setName('');
        setHours('');
        setMinutes('');
        setSeconds('');
        setSum('');
    };

    const homes = () => {
        setHome(true);
    }

    return (
        <>
            {startTimer && <Navigate to={`/one-time/${tempTimer.id}`} replace={true} />}
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
                    {sum !== 0 && <button type="submit" className={s.button}>Створити</button>}
                    {/* {sum !== 0 && <button type="submit" className={s.button} onClick={handleCreate}>Створити</button>} */}
                </div>
            </form>
            <h2>{ hours} - {minutes} - {seconds} - {sum} </h2>
        </>
    );
};

export default CreateSingleTimer;
