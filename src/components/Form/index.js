import React from "react";
import "./index.css"

const Form = ({onChange,value,onSubmit}) => {
    return(
        <form onSubmit={onSubmit}>
            <input 
            type="text" 
            onChange={onChange} 
            value={value}
            size="30"
            placeholder="Search  your favorite TV series"
            />
        </form>
    );
} 

export default Form;