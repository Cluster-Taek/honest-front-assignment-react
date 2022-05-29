import React, { useEffect, useState } from 'react';
import style from './Timer.module.css'

const Timer = ({ restart, setIsRunning }) => {
    const [time, setTime] = useState([3, 0]);

    useEffect(() => {
        setTime([3, 0]);
    }, [restart]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (time[0] === 0 && time[1] === 0) {
                clearInterval(interval);
                setIsRunning(false);
            } else {
                setTime(t => t[1] > 0 ? [t[0], t[1] - 1] : t[0] > 0 ? [t[0] - 1, 59] : [0, 0])
            }
        }, 1000);
        return () => clearInterval(interval);
    });

    return <span className={`${style.timer}`}>{`${time[0]}:${time[1] >= 10 ? time[1] : "0" + time[1]}`}</span>
}

export default React.memo(Timer);