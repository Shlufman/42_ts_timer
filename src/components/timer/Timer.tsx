import React, {Component, useEffect, useState} from 'react';
import timeZones from "../../utils/time-zones";
import style from './Timer.module.css';

interface IPropsTimer {
    timeZone: string;
}

interface IStateTimer {

}

const colors = ['red', 'green', 'blue', 'yellow'];
let intervalTic;
let intervalColor;
const Timer = ({timeZone}: IPropsTimer) => {
    const [time, setTime] = useState(new Date());
    const [colorIndex, setColorIndex] = useState(0);

    function tic() {
        setTime(new Date());
    }

    useEffect(() => {
        let intervalTic = setInterval(tic, 1000);
        let intervalColor = setInterval(() => {
            let index = colorIndex + 1;
            if (index === colors.length)
                index = 0;
            setColorIndex(index);
        }, 3000);
        return () => {
            clearInterval(intervalColor);
            clearInterval(intervalTic);
        }
    }, []);

    function getColor() {
        return colors[colorIndex];
    }

    return (
        <div className={`${style.timer} ${style.standard}`}>
            <div className={style.container}>
                <h2 style={{color: getColor()}}>Current time in {timeZone}</h2>
                <p className={style.time}>{time.toLocaleTimeString('en-GB', {timeZone})}</p>
            </div>
        </div>
    );
}

export default Timer;