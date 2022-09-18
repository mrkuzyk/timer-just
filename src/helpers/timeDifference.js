import getWarTimeUnits from "./getWarTimeUnits";

const timeDifference = (value) => {
    const startInvasion = new Date(2022, 1, 24, 5, 0, 0);
    const timeWar = value - startInvasion.getTime();
    const units = getWarTimeUnits(timeWar);

    return (units);
};

export default timeDifference;