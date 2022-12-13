import React from 'react';

const DynamicRouting = (props) => {
    console.log(props.match.params.name);
    return (
        <div className="container">
            {props.match.params.name} <br/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At corporis illum ipsam itaque quaerat quisquam
            ratione. Assumenda commodi corporis, deserunt dolorem minus numquam odio quam quos, soluta velit veniam
            veritatis.
        </div>
    );
};

export default DynamicRouting;