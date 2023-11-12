import React, {Component} from 'react';

class Timer extends Component
{
    intervalTic;
    intervalColor;

    constructor(props)
    {
        super(props);
        this.colors = ['red', 'green', 'blue', 'yellow'];
        this.state =
            {
                time: new Date(),
                colorIndex: 0
            }
    }

    tic = () =>
    {
        console.log('change time');
        this.setState({time: new Date()});
    }
    getColor = () => this.colors[this.state.colorIndex];

    componentDidMount()
    {
        this.intervalTic = setInterval(this.tic, 1000);
        this.intervalColor = setInterval(() =>
        {
            console.log('change color');
            let index = this.state.colorIndex + 1;
            if(index === this.colors.length)
                index = 0;
            this.setState({...this.state, colorIndex: index});
        }, 3000);
    }

    componentWillUnmount()
    {
        clearInterval(this.intervalColor);
        clearInterval(this.intervalTic);
    }

    render()
    {
        return (
            <div>
                <h2 style={{color: this.getColor()}}>Current time</h2>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Timer;