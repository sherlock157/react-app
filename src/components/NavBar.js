import React from "react";

class NavBar extends React.Component{
    render(){
        return (
            <nav>
                <img src="/logo192.png" alt="logo"/>
                <ul>
                    <li><a href="#">Bosh sahifa</a></li>
                    <li><a href="#">Yangiliklar</a></li>
                    <li><a href="#">Biz haqimizda</a></li>
                </ul>
            </nav>
        )
    }
}

export default NavBar