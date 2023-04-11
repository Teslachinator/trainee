import React, { useState } from "react";
import { TiMinus, TiPlus } from "react-icons/ti";
import "./todo.css";

const Todo = () => {
  const defState = [{ itemName: "todo", value: 2, status: false }];
  const [item, setItem] = useState(defState);
  const [inputName, setInputName] = useState("");

  const addItem = () => {
    const newItem = {
      itemName: inputName,
      value: 1,
      status: false,
    };
    const addNewItem = [...item, newItem];
    setItem(addNewItem);
    setInputName("");
  };

  const handleQuantityDecrease = (index) => {
    const newItems = [...item];

    newItems[index].quantity--;

    setItem(newItems);
  };

  return (
    <div className="todo">
      <div className="todo__addItem">
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
        <p onClick={() => addItem()}>Add</p>
      </div>
      <button onClick={() => setItem(defState)}>очистить</button>
      <div className="todo__listItem">
        {item.map((item, index) => (
          <div className="listItem__container">
            <input type="checkbox" name="i" id="1" />
            <p className="listItem__item">{item.itemName}</p>
            <div className="item__count">
              <TiMinus onClick={() => handleQuantityDecrease(index)} />
              {item.value}
              <TiPlus onClick={() => setItem([...item][index].value++)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
