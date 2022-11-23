import React from "react";

class CounterClass extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            number: 0,

        }
    }

    render(){

        const incrementNumber = () => {
            this.setState({number: this.state.number + 1})
        }

        const decrementNumber = () => {
            if (this.state.number > 0){
                this.setState({number: this.state.number - 1})
            }
        }


        return(
            <div className="counter">
                <h1>{this.state.number}</h1>
                <button type="button" onClick={incrementNumber} disabled={this.state.number === 10}>+</button>
                <button type="button" onClick={decrementNumber} disabled={this.state.number === 0}>-</button>
            </div>
        )
    }
}

export default CounterClass;