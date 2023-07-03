import React from "react";

function Button (props){
    return(
        <button className= {props.class}>{props.title}</button>
    )
}
export default Button