import { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { getTimeUnits } from 'helpers';
import s from './singleTimer.module.scss'
import useWindowWidth from 'hooks';
import BoxTimeDisplay from 'components/BoxTimeDisplay';
import NotFoundPage from 'components/NotFoundPage';

const SingleTimer = ({data}) => {
    const [timer, setTimer] = useState({});
    
    const [runTimer, setRunTimer] = useState(false);
    
    const [name, setName] = useState('');
    const [time, setTime] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');
    
    const windowWidth = useWindowWidth();
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
        <div className={s.container}>
            {timer
                ?
                <>
                    <NavLink to={windowWidth < 1024 ? '/timers' : '/'} className={s.btn} > Назад </NavLink>
                    <h2 className={s.titleName}>{name} </h2>
                    <BoxTimeDisplay
                        hours={hours}
                        minutes={minutes}
                        seconds={seconds}
                    />
                    {!runTimer && <button type='button' onClick={startTimer} className={s.button}>start</button>}
                    {runTimer && <button type='button' onClick={stopTimer} className={s.button}>pause</button>}
                </>
                :
                <NotFoundPage/>
            }
        </div>
    );
};

export default SingleTimer;

//! PropTypes