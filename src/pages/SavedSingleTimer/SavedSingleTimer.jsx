import SingleTimer from "components/SingleTimer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";


const SavedSingleTimer = () => {
    const [timers] = useState(() => JSON.parse(localStorage.getItem('timers')) ?? []);
    const [timer, setTimer] = useState('');
    const { id } = useParams();

    useEffect(() => {
        const availableTimer = timers.find(timer => timer.id === id);
        if (availableTimer) { setTimer(availableTimer) };
    }, [id, timers])

    return (<SingleTimer data={timer} />);
};

export default SavedSingleTimer;
