const { default: addLeadingZero } = require("./addLeadingZero");

const getWarTimeUnits = (value) => {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    const days = (Math.floor(value / day));
    const hours = addLeadingZero(Math.floor(value % day / hour));
    const minutes = addLeadingZero(Math.floor(((value % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((value % day) % hour) % minute) / second));
    return { days, hours, minutes, seconds };
};

export default getWarTimeUnits;