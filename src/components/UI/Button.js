import React from "react";

const Button = (props) => {
    return (
        <button name={props.name} id={props.id} type={props.type}>{props.children}</button>
    )
}

export default Button;