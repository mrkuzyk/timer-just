import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { addLeadingZero, getTimeUnits } from 'helpers';
import s from './exp.module.scss'

const Exp = () => {
    const [timer] = useState(() => JSON.parse(localStorage.getItem('tempTimerExp')) ?? '');
    const [timeWork, setTimeWork] = useState('');
    const [timeRest, setTimeRest] = useState('');
    const [name, setName] = useState('');

    const [workHours, setWorkHours] = useState('');
    const [workMinutes, setWorkMinutes] = useState('');
    const [workSeconds, setWorkSeconds] = useState('');
    const [restHours, setRestHours] = useState('');
    const [restMinutes, setRestMinutes] = useState('');
    const [restSeconds, setRestSeconds] = useState('');

    const [runTimer, setRunTimer] = useState(false);

    // console.log(timeRest);
    
    // console.log(name);
    const intervalId = useRef(null);

    useEffect(() => {
        setTimeWork(timer.workSum); // отримую суму часу роботи
        setTimeRest(timer.restSum); // отримую суму часу відпочинку
        timer.name ? setName(timer.name) : setName('Timer');
    }, [timer.name, timer.restSum, timer.workSum])
    
    useEffect(() => {
        const { hours, minutes, seconds } = getTimeUnits(timeWork); // дістаю одиниці часу для роботи
        setWorkHours(hours);
        setWorkMinutes(minutes);
        setWorkSeconds(seconds);
    }, [timeWork])

    useEffect(() => {
        const { hours, minutes, seconds } = getTimeUnits(timeRest); // дістаю одиниці часу для відпочинку
        setRestHours(hours);
        setRestMinutes(minutes);
        setRestSeconds(seconds);
    }, [timeRest])

    useEffect(() => {
        if (!runTimer) return;

        // робочий таймер
        intervalId.current = setInterval(() => {
        setTimeWork(state => state - 1)
        }, 1000);
    }, [runTimer])

    useEffect(() => {
        if (!runTimer) return;

        //відпочинковий таймер
        intervalId.current = setInterval(() => {
        setTimeRest(state => state - 1)
        }, 1000);
    }, [runTimer])

    const startTimer = () => {
        setRunTimer(true);
    };

    const stopTimer = () => {
        clearInterval(intervalId.current);
        setRunTimer(false);
    }

    useEffect(() => {
        if (timeWork === 0) stopTimer();
    }, [timeWork])

    // console.log(hours);
    return (
        <div>
            {timer
                ?
                <>
                    <h2>{name} </h2>
                    <div className={s.box}>
                        {workHours !== addLeadingZero(0) && <p className={s.time} >{workHours} </p>}
                        <p className={s.time} >{workMinutes} </p>
                        <p className={s.time} >{workSeconds} </p>
                    </div>
                    <div className={s.box}>
                        {restHours !== addLeadingZero(0) && <p className={s.time} >{restHours} </p>}
                        <p className={s.time} >{restMinutes} </p>
                        <p className={s.time} >{restSeconds} </p>
                    </div>
                    <p >{name} </p>
                    {!runTimer && <button type='button' onClick={startTimer}>start</button>}
                    {runTimer && <button type='button' onClick={stopTimer}>pause</button>}
                </>
                :
                <h1>НЕМА</h1>
            }
            {/* <Link to={`/timers`} className={s.link}> Timers </Link> */}
            <Link to={`/home`} className={s.link}> home </Link>
        </div>
    );
};

export default Exp;