import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { addLeadingZero, getTimeUnits } from 'helpers';
import s from './oneOffTimer.module.scss'

const OneOffTimer = () => {
    const [timer] = useState(() => JSON.parse(localStorage.getItem('tempTimer')) ?? '');
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    const [runTimer, setRunTimer] = useState(false);
    
    console.log(timer);
    const intervalId = useRef(null);

    useEffect(() => {
        setTime(timer.sum); // отримую всю суму часу
        timer.name ? setName(timer.name) : setName('Timer');
    }, [timer.name, timer.sum])
    
    useEffect(() => {
        const { hours, minutes, seconds } = getTimeUnits(time); // дістаю одиниці часу
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
    }, [time])

    useEffect(() => {
        if (!runTimer) return;
        intervalId.current = setInterval(() => {
        setTime(state => state - 1)
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
        if (time === 0) stopTimer();
    }, [time])

    // console.log(hours);
    return (
        <div>
            {timer
                ?
                <>
                    <h2>{name} </h2>
                    <div className={s.box}>
                        {hours !== addLeadingZero(0) && <p className={s.time} >{hours} </p>}
                        <p className={s.time} >{minutes} </p>
                        <p className={s.time} >{seconds} </p>
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

export default OneOffTimer;