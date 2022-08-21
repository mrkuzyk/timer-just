import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { addLeadingZero, getTimeUnits } from 'helpers';
import s from './intervalTimer.module.scss';

const IntervalTimer = ({data}) => {
    const [timer, setTimer] = useState({});
    const [name, setName] = useState('');

    const [timeWork, setTimeWork] = useState('');
    const [timeRest, setTimeRest] = useState('');

    const [workHours, setWorkHours] = useState('');
    const [workMinutes, setWorkMinutes] = useState('');
    const [workSeconds, setWorkSeconds] = useState('');
    const [restHours, setRestHours] = useState('');
    const [restMinutes, setRestMinutes] = useState('');
    const [restSeconds, setRestSeconds] = useState('');

    const [applyWorkTimer, setApplyWorkTimer] = useState(false);
    const [applyRestTimer, setApplyRestTimer] = useState(false);

    const intervalId = useRef(null);
    const timerIsRunning = applyWorkTimer || applyRestTimer;

    useEffect(() => {
        setTimer(data)
    }, [data]);

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
        if (!applyWorkTimer) return; // виключаю запуск одразу при рендері

        intervalId.current = setInterval(() => {
            setTimeWork(state => state - 1); // таймер для робочого часу
        }, 1000);
    }, [applyWorkTimer]);

    useEffect(() => {
        if (timeWork === 0) {
            stopTimer(); // автоматичне вимкнення таймера при закінченні часу
            setApplyRestTimer(true); // якщо робочий час закінчився, то автоматично вмикається відпочинок
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeWork]);

    useEffect(() => {
        if (!applyRestTimer) return; // виключаю запуск одразу при рендері

        //відпочинковий таймер
        intervalId.current = setInterval(() => {
            setTimeRest(state => state - 1); // таймер для відпочинку
        }, 1000);
    }, [applyRestTimer])

    useEffect(() => {
        if (timeRest === 0) { stopTimer() };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeRest]);

    const startTimer = () => {
        if (timeWork !== 0) { setApplyWorkTimer(true) }; // якщо є робочий час то тільки тоді можна запустити його і не дозволяю йти в мінус
        if (timeWork === 0  && timeRest !== 0) { setApplyRestTimer(true) }; // дозволяю відновлювати відпочинок тільки коли нема робочого часу
    };

    const stopTimer = () => {
        clearInterval(intervalId.current);
        setApplyWorkTimer(false); // зупиняю таймер
        if (timeWork === 0) { setApplyRestTimer(false) }; // якщо робочий час === 0, то тільки тоді можна зупитяти відпочинок
    };

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
                    {!timerIsRunning &&  <button type='button' onClick={startTimer}>start</button>}
                    {timerIsRunning &&  <button type='button' onClick={stopTimer}>pause</button>}
                </>
                :
                <h1>НЕМА</h1>
            }
            <Link to={`/home`} className={s.link}> home </Link>
        </div>
    );
};

export default IntervalTimer;