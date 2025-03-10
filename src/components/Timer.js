import React, { useState, useEffect } from "react";

const Timer = () => {
    const [time, setTime] = useState(60);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => prevTime > 0 ? prevTime - 1 : 0);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return <div style={{ fontSize: "18px" }}>⏳ Time Left: {time}s</div>;
};

export default Timer;
