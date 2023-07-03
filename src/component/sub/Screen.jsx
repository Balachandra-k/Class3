import React from "react";

const Screen = (props) => {
    return(
        <div className={props.output}>
            {props.result}
            
        </div>
    )
}
export default Screen