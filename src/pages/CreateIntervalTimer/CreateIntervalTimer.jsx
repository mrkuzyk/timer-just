import { useEffect, useState } from "react";
import { Navigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { getTimeSum } from 'helpers';
import s from './createIntervalTimer.module.scss';
import ButtonBack from "components/ButtonBack";
import ButtonHome from "components/ButtonHome";
import ButtonSave from "components/ButtonSave";
import ButtonCreate from "components/ButtonCreate";
import BoxRepeat from "components/BoxRepeat";
import BoxEnteringTime from "components/BoxEnteringTime";
import BoxNameForTimer from "components/BoxNameForTimer";

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
    const [numbOfRepeat, setNumbOfRepeat] = useState('');

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
            
            case 'repeat':
                setNumbOfRepeat(Number(value));
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
            restSum,
            numbOfRepeat
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
        setNumbOfRepeat('');
    };

    useEffect(() => { // записую в локал сторедж таймери
        window.localStorage.setItem('timers', JSON.stringify(timers))
    }, [timers])
    
    useEffect(() => { // записую в локал сторедж одноразовий таймер
        window.localStorage.setItem('interval', JSON.stringify(disposableTimer))
    },[disposableTimer])

    return (
        <div className={s.container}>
            {startTimer && <Navigate to={`/timers/interval`} replace={true} />}
            <div className={s.btnBox}>
                <ButtonBack />
                <ButtonHome/>
            </div>
            <form onSubmit={handleCreate} className={s.form}>
                <BoxNameForTimer
                    value={name}
                    onChange={handleChange}
                    placeholder={`Наприклад: Біг з прискоренням`}
                />
                <BoxEnteringTime
                    name={`Час таймера`}
                    hoursName={`workHours`}
                    hoursValue={workHours}
                    minutesName={`workMinutes`}
                    minutesValue={workMinutes}
                    secondsName={`workSeconds`}
                    secondsValue={workSeconds}
                    onChange={handleChange}
                />
                <BoxEnteringTime
                    name={`Час відпочинку`}
                    hoursName={`restHours`}
                    hoursValue={restHours}
                    minutesName={`restMinutes`}
                    minutesValue={restMinutes}
                    secondsName={`restSeconds`}
                    secondsValue={restSeconds}
                    onChange={handleChange}
                />
                <BoxRepeat
                    value={numbOfRepeat}
                    onChange={handleChange}
                />
                <ButtonSave
                    checked={saveTimer}
                    onChange={handleSave}
                />
                <ButtonCreate disabled={!workSum}/>
            </form>
        </div>
    );
};

export default CreateIntervalTimer;