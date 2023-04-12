import React, { useState } from "react";
import { TiMinus, TiPlus } from "react-icons/ti";
import "./todo.css";
import {
  Button,
  ButtonGroup,
  Form,
  OverlayTrigger,
  Placeholder,
  Tooltip,
} from "react-bootstrap";

const Todo = () => {
  // const defState = [{ itemName: "todo", value: 2, status: false }];
  const [item, setItem] = useState([]);
  const [inputName, setInputName] = useState("");

  const addItem = () => {
    if (inputName.length > 0) {
      const newItem = {
        itemName: inputName,
        value: 1,
        status: false,
      };
      const addNewItem = [...item, newItem];
      setItem(addNewItem);
      setInputName("");
    }
  };

  const handleQuantityDecrease = (index) => {
    const newItems = [...item];
    if (newItems[index].value > 1) {
      newItems[index].value--;
    }
    setItem(newItems);
  };
  const handleQuantityIncrease = (index) => {
    const newItems = [...item];
    newItems[index].value++;
    setItem(newItems);
  };

  const deleteTask = (task) => {
    const newTodo = item.filter((inputName) => {
      return inputName !== task;
    });
    setItem(newTodo);

    console.log(item);
  };

  return (
    <div className="todo">
      <div className="todo__addItem">
        <Form.Control
          type="text"
          value={inputName}
          placeholder="Введите название"
          onChange={(e) => setInputName(e.target.value)}
          rows={3}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              addItem();
            }
          }}
        />
      </div>
      <ButtonGroup>
        <Button onClick={() => addItem()} variant="success">
          Добавить
        </Button>
        <Button onClick={() => setItem([])} variant="danger">
          Очистить
        </Button>
      </ButtonGroup>
      <div className="todo__listItem">
        {item.length !== 0 ? (
          item.map((item, index) => (
            <OverlayTrigger
              key={item}
              trigger="click"
              placement="left"
              overlay={
                <Tooltip
                  className="tooltip"
                  onClick={() => {
                    deleteTask(item);
                  }}
                >
                  Точно удалить?
                </Tooltip>
              }
            >
              <div className="listItem__container">
                <p className="listItem__item">{item.itemName}</p>
                <div
                  className="listItem__count"
                  onClick={(e) => e.stopPropagation()}
                >
                  <TiMinus onClick={() => handleQuantityDecrease(index)} />
                  {item.value}
                  <TiPlus onClick={() => handleQuantityIncrease(index)} />
                </div>
              </div>
            </OverlayTrigger>
          ))
        ) : (
          <>
            <Placeholder as="p" animation="wave">
              <Placeholder.Button
                variant="secondary"
                xs={12}
                aria-hidden="true"
              />
            </Placeholder>
          </>
        )}
      </div>
    </div>
  );
};

export default Todo;
