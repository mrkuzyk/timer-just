// переводжу весь час в секунди
const getTimeSum = ({ seconds, minutes, hours }) => {
    const second = seconds * 1;
    const minute = minutes * 60;
    const hour = (hours * 60) * 60;
    const sum = second + minute + hour;
    return sum;
};

export default getTimeSum;
