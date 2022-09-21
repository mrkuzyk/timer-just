const pathDefinition = ({timers, pathname}) => {
    if (timers > 0) {
        const { typeTimer, id } = timers[0];
        const path = pathname !== '/timers' ? pathname : `/timers/${typeTimer}/${id}`;
        return path;
    };
    return
};

export default pathDefinition;