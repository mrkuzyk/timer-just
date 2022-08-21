import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import IntervalTimer from "components/IntervalTimer";


const SavedIntervalTimer = () => {
    const [timers] = useState(() => JSON.parse(localStorage.getItem('timers')) ?? []);
    const [timer, setTimer] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const availableTimer = timers.find(timer => timer.id === id);
        if (availableTimer) { setTimer(availableTimer) };
    }, [id, timers])

    return ( <IntervalTimer data={timer}/> );
};

export default SavedIntervalTimer;
