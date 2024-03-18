import React, {useState} from "react";

function Input() {
    const[inputText, setInputText] = useState("");

    function handleChange(event){
        const newValue = event.target.value;
        setInputText(newValue);
    }

    return <input onChange={handleChange} className={"formInput"} type="text" value={inputText}/>
}

export default Input;
