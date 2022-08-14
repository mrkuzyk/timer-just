import addLeadingZero from "./addLeadingZero";


// переводжу суму часу в одиниці
const getTimeUnits = (value) => {
    const hours = addLeadingZero(Math.floor(value / 3600));
    const minutes = addLeadingZero(Math.floor((value % 3600) / 60));
    const seconds = addLeadingZero(Math.floor((value % 3600) % 60));
    return {hours, minutes, seconds};
};

export default getTimeUnits;