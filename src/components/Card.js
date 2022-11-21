import React from "react";
import "../styles/main.css";

const Card = (props) => {
    console.log(props);
    return (
        <div className="card">
            <img src="/logo192.png" alt="logo"/>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
        </div>
    )
}

export default Card;