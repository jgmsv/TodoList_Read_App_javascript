import React from "react";

function Input({ inputText, setInputText }) {
    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    return (
        <input
            onChange={handleChange}
            className={"formInput"}
            type="text"
            value={inputText}
        />
    );
}

export default Input;
