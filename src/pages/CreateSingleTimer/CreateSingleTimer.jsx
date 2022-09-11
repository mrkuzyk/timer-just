import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { getTimeSum } from 'helpers';
import s from './createSingleTimer.module.scss';
import ButtonHome from "components/ButtonHome";
import ButtonBack from "components/ButtonBack";
import ButtonSave from "components/ButtonSave";
import ButtonCreate from "components/ButtonCreate";
import BoxNameForTimer from "components/BoxNameForTimer";
import BoxEnteringTime from "components/BoxEnteringTime";

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
        <div className={s.container}>
            {startTimer && <Navigate to={`/timers/single`} replace={true} />}

            <div className={s.btnBox}>
                <ButtonBack/>
                <ButtonHome/>
            </div>
            <form onSubmit={handleCreate} className={s.form}>
                <BoxNameForTimer
                    value={name}
                    onChange={handleChange}
                    placeholder={`Наприклад: Спринт`}
                />
                <BoxEnteringTime
                    name={`Час таймера`}
                    hoursName={`hours`}
                    hoursValue={hours}
                    minutesName={`minutes`}
                    minutesValue={minutes}
                    secondsName={`seconds`}
                    secondsValue={seconds}
                    onChange={handleChange}
                />
                <ButtonSave
                    checked={saveTimer}
                    onChange={handleSave}
                />
                <ButtonCreate disabled={!totalTimeSum}/>
            </form>
        </div>  
    );
};

export default CreateSingleTimer;
