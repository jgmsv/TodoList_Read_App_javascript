import React, {useState} from "react";

function App() {

    const[inputText, setInputText] = useState("");
    const[items, setItems] = useState([]);

    function handleChange(event){
        const newValue = event.target.value;
        setInputText(newValue);
    }

    function addItem(){
        setItems((prevItems) =>{
            return[...prevItems, inputText]
        })
        setInputText("");
    }

    function deleteItem(index) {
        setItems((prevItems) => {
            return prevItems.filter((item, i) => i !== index);
        });
    }

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <div className="form">
                <input onChange={handleChange} type="text" value={inputText}/>
                <button onClick={addItem}>
                    <span>Add</span>
                </button>
            </div>
            <div>
                <ul>
                    {items.map((todoItem, index) => {
                        return (
                            <li key={index}>
                                {todoItem} <span>  </span>
                                <button onClick={() => deleteItem(index)}>X</button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;
