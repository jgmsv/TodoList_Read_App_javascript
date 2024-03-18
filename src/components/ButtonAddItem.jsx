// ButtonAddItem.js
import React from "react";

function ButtonAddItem({ inputText, setInputText, setItems }) {
    function addItem() {
        setItems((prevItems) => {
            return [...prevItems, inputText];
        });
        setInputText("");
    }

    return (
        <button onClick={addItem}>
            <span>Add</span>
        </button>
    );
}

export default ButtonAddItem;
