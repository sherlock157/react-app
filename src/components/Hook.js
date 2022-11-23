import React, {useEffect, useState} from 'react';

const Hook = () => {
    const [count, setCount] = useState(0);
    //componentDidMount, componentDidUpdate
    useEffect(() => {
        console.log("this text from useEffect");
        document.title = count;
    })

    //componentDidMount
    useEffect(() => {
        console.log("this text from second useEffect");
    }, [])

    //componentWillUnmount
    useEffect(() => {
        return () => {
            console.log("this text from third useEffect");
        }
    }, [])

    const update = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <button type="button" onClick={update}> click!</button>

        </div>
    );
};

export default Hook;