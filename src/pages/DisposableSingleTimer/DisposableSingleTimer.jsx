import SingleTimer from "components/SingleTimer";
import { useState } from "react";


const DisposableSingleTimer = () => {
    const [timer] = useState(() => JSON.parse(localStorage.getItem('single')) ?? []);
    return (<SingleTimer data={timer} />);
};

export default DisposableSingleTimer;
