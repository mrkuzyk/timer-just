import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { addLeadingZero, getTimeUnits } from 'helpers';
import s from './singleTimer.module.scss'

const SingleTimer = ({data}) => {
    const [timer, setTimer] = useState({});
    
    const [runTimer, setRunTimer] = useState(false);
    
    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    
    const intervalId = useRef(null);

    useEffect(() => { setTimer(data) }, [data]);

    useEffect(() => {
        timer.name ? setName(timer.name) : setName('Timer');
        setTime(timer.totalTimeSum); // витягую суму часу
    }, [data, timer]);
    
    useEffect(() => {
        const { hours, minutes, seconds } = getTimeUnits(time); // дістаю одиниці часу
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
    }, [time]);

    useEffect(() => {
        if (!runTimer) return; // забороняю запуск одразу при завантаженні 
        intervalId.current = setInterval(() => {
            setTime(state => state - 1); // запускаю таймер
        }, 1000);
    }, [runTimer]);

    useEffect(() => {
        if (time === 0) stopTimer(); // зупинка тамера коли закінчився час
    }, [time]);

    const startTimer = () => {
        setRunTimer(true); 
    };

    const stopTimer = () => {
        clearInterval(intervalId.current);
        setRunTimer(false);
    };

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

export default SingleTimer;