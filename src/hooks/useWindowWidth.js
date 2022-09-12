import { useState, useEffect } from "react";

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const getWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', getWindowWidth);
        return () => window.removeEventListener('resize', getWindowWidth);
    }, []);

    return windowWidth;
};

export default useWindowWidth;