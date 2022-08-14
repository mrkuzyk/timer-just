// роблю обовязковими 2 цифри, і якщо є лиш одна, то ставлю спереді 0
const addLeadingZero = (value) => {
    return String(value).padStart(2, '0');
};

export default addLeadingZero;

