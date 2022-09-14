import { useEffect, useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { getTimeUnits } from 'helpers';
import s from './intervalTimer.module.scss';
import useWindowWidth from 'hooks';
import BoxTimeDisplay from 'components/BoxTimeDisplay';
import NotFoundPage from 'components/NotFoundPage';

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
    const [numbOfRepeat, setNumbOfRepeat] = useState(0);

    const [applyWorkTimer, setApplyWorkTimer] = useState(false);
    const [applyRestTimer, setApplyRestTimer] = useState(false);
    const [applyRepeat, setApplyRepeat] = useState(false);

    const intervalId = useRef(null);
    const timerIsRunning = applyWorkTimer || applyRestTimer;
    const windowWidth = useWindowWidth();
    const sample = '00';

    useEffect(() => {
        setTimer(data)
    }, [data]);

    useEffect(() => {
        const { workSum, restSum, numbOfRepeat, name } = timer;
        setTimeWork(workSum); // отримую суму часу роботи
        setTimeRest(restSum); // отримую суму часу відпочинку

        if (numbOfRepeat) { setNumbOfRepeat(numbOfRepeat - 1) }; // отримую кількість повторів

        name ? setName(name) : setName('Timer');
    }, [timer]);
    
    useEffect(() => {
        const { hours, minutes, seconds } = getTimeUnits(timeWork); // дістаю одиниці часу для роботи
        setWorkHours(hours);
        setWorkMinutes(minutes);
        setWorkSeconds(seconds);
    }, [timeWork]);

    useEffect(() => {
        const { hours, minutes, seconds } = getTimeUnits(timeRest); // дістаю одиниці часу для відпочинку
        setRestHours(hours);
        setRestMinutes(minutes);
        setRestSeconds(seconds);
    }, [timeRest]);

    useEffect(() => {
        if (numbOfRepeat && numbOfRepeat === 0) { return }; // якщо біле повторів немає, то кінець
        if (!applyWorkTimer) return; // виключаю запуск одразу при завантажені

        intervalId.current = setInterval(() => {
            setTimeWork(state => state - 1); // таймер для робочого часу
        }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [applyWorkTimer]);

    useEffect(() => {
        if (timeWork === 0) {
            stopTimer(); // автоматичне вимкнення таймера при закінченні часу
            setApplyWorkTimer(false); // робота неактивна
            setApplyRestTimer(true); // якщо робочий час закінчився, то автоматично вмикається відпочинок
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeWork]);

    useEffect(() => {
        if (!applyRestTimer) return; // виключаю запуск одразу при завантажені

        intervalId.current = setInterval(() => {
            setTimeRest(state => state - 1); // таймер для відпочинку
        }, 1000);
    }, [applyRestTimer])

    useEffect(() => {
        if (timeRest === 0) {
            stopTimer(); // автоматична зупинка відпочинку, при завершені часу
            setApplyRestTimer(false); // неактивний відпочинок
        };

        if (timeRest === 0 && numbOfRepeat) { setApplyRepeat(true) }; // запускаю наступне коло
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timeRest]);

    useEffect(() => {
        if (applyRepeat && numbOfRepeat) {
            newRepeat();
            setApplyWorkTimer(true);
        };
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [applyRepeat]);
    
    const newRepeat = () => {
        if (numbOfRepeat >= 1) {
            const { workSum, restSum } = timer;
            setNumbOfRepeat(state => state - 1); // запускаю наступне коло
            setTimeWork(workSum); // отримую суму часу роботи
            setTimeRest(restSum); // отримую суму часу відпочинку
            startTimer();
        };
    };

    const startTimer = () => {
        if (timeWork !== 0) { setApplyWorkTimer(true) }; // якщо є робочий час то тільки тоді можна запустити його і не дозволяю йти в мінус
        if (timeWork === 0 && timeRest !== 0) { setApplyRestTimer(true) }; // дозволяю відновлювати відпочинок тільки коли нема робочого часу
        if (numbOfRepeat) { setApplyRepeat(false) }; // зміна кола неактивна
    };

    const stopTimer = () => {
        clearInterval(intervalId.current);
        setApplyWorkTimer(false); // зупиняю таймер
        if (timeWork === 0) { setApplyRestTimer(false) }; // якщо робочий час === 0, то тільки тоді можна зупиняти відпочинок
    };

    return (
        <div className={s.container}>
            {timer
                ?
                <>
                    <NavLink to={windowWidth < 1024 ? '/timers' : '/'} className={s.btn} > Назад </NavLink>
                    <h2 className={s.titleName}>{name} </h2>
                    {applyWorkTimer &&
                        <BoxTimeDisplay
                            hours={workHours}
                            minutes={workMinutes}
                            seconds={workSeconds}
                        />
                    }
                    {applyRestTimer &&
                        <BoxTimeDisplay
                            hours={restHours}
                            minutes={restMinutes}
                            seconds={restSeconds}
                        />
                    }
                    {!applyRestTimer && !applyWorkTimer &&
                        <BoxTimeDisplay
                            hours={sample}
                            minutes={sample}
                            seconds={sample}
                        />
                    }
                    {!timerIsRunning &&  <button type='button' onClick={startTimer} className={s.button}>Старт</button>}
                    {timerIsRunning &&  <button type='button' onClick={stopTimer} className={s.button}>Пауза</button>}
                </>
                :
                <NotFoundPage/>
            }
        </div>
    );
};

export default IntervalTimer;