// List.js
import React from "react";

function List({ items, setItems }) {
    function deleteItem(index) {
        setItems((prevItems) => {
            return prevItems.filter((item, i) => i !== index);
        });
    }

    return (
        <ul>
            {items.map((todoItem, index) => {
                return (
                    <li key={index}>
                        {todoItem} <span> </span>
                        <button onClick={() => deleteItem(index)}>X</button>
                    </li>
                );
            })}
        </ul>
    );
}

export default List;
