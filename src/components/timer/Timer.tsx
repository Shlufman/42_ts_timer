import React, {Component, useEffect, useState} from 'react';

interface IPropsTimer {

}

interface IStateTimer {

}

const colors = ['red', 'green', 'blue', 'yellow'];
let intervalTic;
let intervalColor;
const Timer = (props: IPropsTimer) => {
    const [time, setTime] = useState(new Date());
    const [colorIndex, setColorIndex] = useState(0);

    function tic() {
        console.log('change time');
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
        <div>
            <h2 style={{color: getColor()}}>Current time</h2>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default Timer;