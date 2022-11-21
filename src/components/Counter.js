import React, {useState} from 'react';

//state
//Hook
const Counter = () => {
    const [newNumber, setNewNumber] = useState(0);

    // let number = 0;

    const incrementNumber = () => {
        // number++;
        // console.log(number)
        setNewNumber(newNumber + 1)
    }

    const decrementNumber = () => {
        // number--;
        // console.log(number)
        setNewNumber(newNumber - 1)
    }

    return (
        <div className="counter">
            <h1>{newNumber}</h1>
            <button type="button" onClick={incrementNumber}>+</button>
            <button type="button" onClick={decrementNumber}>-</button>
        </div>
    );
};

export default Counter;