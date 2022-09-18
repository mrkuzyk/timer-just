import { timeDifference } from "helpers";
import { useEffect, useState } from "react";
import s from './warTime.module.scss';

const WarTime = () => {
    const [timeNow, setTimeNow] = useState(Date.now());

    useEffect(() => { 
        setInterval(() => {
            setTimeNow(Date.now()); // запускаю таймер
        }, 1000);
    }, []);

    const { days, hours, minutes, seconds } = timeDifference(timeNow);

    return (
        <div className={s.boxWar}>
            <h2 className={s.title}>Час повномасштабного вторгнення в Україну</h2>
            <div className={s.boxWarTime}>
                <p className={s.day}>
                    {days}
                    <span className={s.span}>днів</span>
                </p>
                <div className={s.boxTime}>
                    <p className={s.time} >{hours} <span className={s.spanTime}>:</span> </p>
                    <p className={s.time} >{minutes} <span className={s.spanTime}>:</span> </p>
                    <p className={s.time} >{seconds} </p>
                </div>
            </div>
        </div>
    );
};

export default WarTime;