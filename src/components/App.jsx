// App.js
import React, { useState } from "react";
import Input from "./Input";
import ButtonAddItem from "./ButtonAddItem";
import List from "./List";

function App() {
    const [items, setItems] = useState([]);
    const [inputText, setInputText] = useState("");

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <Input inputText={inputText} setInputText={setInputText} />
                <ButtonAddItem
                    inputText={inputText}
                    setInputText={setInputText}
                    items={items}
                    setItems={setItems}
                />
            </div>
            <div>
                <List items={items} setItems={setItems} />
            </div>
        </div>
    );
}

export default App;
