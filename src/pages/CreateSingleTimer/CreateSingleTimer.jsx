import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { getTimeSum } from 'helpers';
import s from './createSingleTimer.module.scss';
import ButtonHome from "components/ButtonHome";
import ButtonBack from "components/ButtonBack";

const CreateSingleTimer = () => {
    const [timers, setTimers] = useState(() => JSON.parse(localStorage.getItem('timers')) ?? []); // лінива ініціалізація
    const [disposableTimer, setDisposableTimer] = useState(''); // тут зберігається одноразові дані для переходу на створений таймер

    const [saveTimer, setSaveTimer] = useState(false); // чи потрібно зберігати таймер
    const [startTimer, setStartTimer] = useState(false); // для переходу на створений таймер
    const [typeTimer] = useState('single');

    const [name, setName] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');

    const [totalTimeSum, setTotalTimeSum] = useState(''); //загальна сума часу
    
    const handleChange = e => {
        const { name, value } = e.currentTarget; // отримую значення з input

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

    return (
        <>
            {startTimer && <Navigate to={`/timers/single`} replace={true} />}

            <div className={s.btnBox}>
                <ButtonBack/>
                <ButtonHome/>
            </div>
            <form onSubmit={handleCreate} className={s.form}>
                <div className={s.inputBox}>
                    <div className={s.timerNameBox}>
                        <label className={s.timerName}> Ім'я таймера <sup className={s.sup}>(необов'язково)</sup> 
                            <input 
                                type="text" 
                                name="name"
                                value={name}
                                onChange={handleChange}
                                placeholder="Наприклад: Спринт"
                                className={s.inputName}
                                title="Введіть ім'я таймера"
                            />
                        </label>
                    </div>
                    <p className={s.timeTittle}>Час таймера</p>
                    <div className={s.timeBox}>
                        <label className={s.timeLabel}> години
                            <input 
                                type="number" 
                                name="hours"
                                value={hours}
                                min="0"
                                max="23"
                                pattern="[0-9]{2}"
                                onChange={handleChange}
                                placeholder="гг"
                                className={s.input}
                                title="Години"
                            />
                            {/* <span className={s.inputTimeBox}></span> */}
                        </label>
                        <label className={s.timeLabel}>хвилини
                            <input 
                                type="number" 
                                name="minutes"
                                value={minutes}
                                min="0"
                                max="59"
                                onChange={handleChange}
                                placeholder="xx"
                                className={s.input}
                                title="Хвилини"
                            />
                            {/* <span className={s.inputTimeBox}></span> */}
                        </label>
                        <label className={s.timeLabel}> секунди
                            <input 
                                type="number" 
                                name="seconds"
                                value={seconds}
                                min="0"
                                max="59"
                                onChange={handleChange}
                                placeholder="cc"
                                className={s.input}
                                title="Секунди"
                            />
                            {/* <span className={s.inputTimeBox}> { seconds ? seconds : '00'}</span> */}
                        </label>
                    </div>
                </div>
                <label className={s.saveLabel}> Зберегти
                    <input 
                        type="checkbox"
                        name="handleChange"
                        checked={saveTimer}
                        onChange={handleSave }
                        className={s.saveInput}
                    />
                </label>
                {/* <div className={s.btnBox}> */}
                    {totalTimeSum !== 0 && <button type="submit" className={s.button}>Створити</button>}
                {/* </div> */}
            </form>
        </>
    );
};

export default CreateSingleTimer;
