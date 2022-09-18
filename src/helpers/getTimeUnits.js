import addLeadingZero from "./addLeadingZero";

// переводжу суму часу в одиниці
const getTimeUnits = (value) => {
    const minute = 60;
    const hour = minute * 60;
    
    const hours = addLeadingZero(Math.floor(value / hour));
    const minutes = addLeadingZero(Math.floor((value % hour) / minute));
    const seconds = addLeadingZero(Math.floor((value % hour) % minute));
    return {hours, minutes, seconds};
};

export default getTimeUnits;