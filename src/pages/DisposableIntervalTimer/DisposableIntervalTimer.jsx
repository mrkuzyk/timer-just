import { useState } from "react";
import IntervalTimer from "components/IntervalTimer";

const DisposableIntervalTimer = () => {
    const [timer] = useState(() => JSON.parse(localStorage.getItem('interval')) ?? '');
    return ( <IntervalTimer data={timer}/> );
};

export default DisposableIntervalTimer;
