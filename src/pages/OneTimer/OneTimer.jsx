import { useEffect, useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { addLeadingZero, getAllTimers, getTimeUnits } from 'helpers';
import s from './oneTimer.module.scss'

const OneTimer = () => {
    const [timers] = useState(() => getAllTimers); // лінива ініціалізація
    const { id } = useParams();
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    const [runTimer, setRunTimer] = useState(false);
    
    const intervalId = useRef(null);
    // console.log(intervalId);

    useEffect(() => {
        const availableId = timers.find(timer => timer.id === id);

        if (availableId) {
            setName(availableId.name);
            setTime(availableId.sum);
        }

    }, [id, timers])
    
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
            {name
                ?
                <>
                    <h2>{name} </h2>
                    <div className={s.box}>
                        {hours !== addLeadingZero(0) && <p className={s.time} >{hours} </p>}
                        <p className={s.time} >{minutes} </p>
                        <p className={s.time} >{seconds} </p>
                    </div>
                    {!runTimer && <button type='button' onClick={startTimer}>start</button>}
                    {runTimer && <button type='button' onClick={stopTimer}>pause</button>}
                </>
                :
                <h1>НЕМА</h1>
            }
            <Link to={`/timers`} className={s.link}> Timers </Link>
            <Link to={`/home`} className={s.link}> home </Link>
        </div>
    );
};

export default OneTimer;