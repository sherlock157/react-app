import React from 'react';
import {Link} from "react-router-dom"
const NotFound = () => {
    return (
        <div className="text-center py-5">
            <img src="/images/404.png" alt="404"/>
            <h4>404. Bunday sahifa mavjud emas!</h4>
            <Link to='/'>Bosh sahifaga qaytish</Link>
        </div>
    );
};

export default NotFound;