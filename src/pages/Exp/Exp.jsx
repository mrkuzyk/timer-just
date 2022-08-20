import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { addLeadingZero, getTimeUnits } from 'helpers';
import s from './exp.module.scss'

const Exp = () => {
    const [timer] = useState(() => JSON.parse(localStorage.getItem('tempTimerExp')) ?? '');
    const [name, setName] = useState('');

    const [timeWork, setTimeWork] = useState('');
    const [timeRest, setTimeRest] = useState('');

    const [workHours, setWorkHours] = useState('');
    const [workMinutes, setWorkMinutes] = useState('');
    const [workSeconds, setWorkSeconds] = useState('');
    const [restHours, setRestHours] = useState('');
    const [restMinutes, setRestMinutes] = useState('');
    const [restSeconds, setRestSeconds] = useState('');

    const [employWorkTimer, setEmployWorkTimer] = useState(false);
    const [employRestTimer, setEmployRestTimer] = useState(false);

    // const [firstRenderWork, setFirstRenderWork] = useState(true);
    // const [firstRenderRest, setFirstRenderRest] = useState(true);

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
        if (!employWorkTimer) return;

        // робочий таймер
        intervalId.current = setInterval(() => {
            setTimeWork(state => state - 1)
        }, 1000);
    }, [employWorkTimer]);

    useEffect(() => {
        if (timeWork === 0) {
            stopTimer();
            setEmployRestTimer(true);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeWork]);

    useEffect(() => {
        if (!employRestTimer) return;

        //відпочинковий таймер
        intervalId.current = setInterval(() => {
        setTimeRest(state => state - 1)
        }, 1000);
    }, [employRestTimer])

    useEffect(() => {
        if (timeRest === 0) stopTimer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeRest]);

    const startTimer = () => {
        if (timeWork !== 0) { setEmployWorkTimer(true) };
        if (timeRest !== 0) { setEmployWorkTimer(true) };
        if (timeWork === 0) { setEmployRestTimer(true) };
    };

    const stopTimer = () => {
        clearInterval(intervalId.current);
        setEmployWorkTimer(false);
        if (timeWork === 0) {
            setEmployRestTimer(false)
        };
    };

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
                    {  <button type='button' onClick={startTimer}>start</button>}
                    {  <button type='button' onClick={stopTimer}>pause</button>}
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