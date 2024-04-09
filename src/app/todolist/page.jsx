"use client";
import React, { useState } from "react";
import styles from "./page.module.css";

const Todo = () => {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  const updateInput = (value) => {
    setUserInput(value);
  };

  // Add item if user input is not empty
  const addItem = () => {
    if (userInput !== "") {
      const userInputItem = {
        // Add a random id which is used to delete
        id: Math.random(),

        // Add a user value to list
        value: userInput,
      };

      // Update list
      setList([...list, userInputItem]);

      // Reset state
      setUserInput("");
    }
  };

  // Function to delete item from list using id to delete
  const deleteItem = (key) => {
    const updatedList = list.filter((item) => item.id !== key);
    setList(updatedList);
  };

  const editItem = (index) => {
    const editedTodo = prompt("Edit the todo:");
    if (editedTodo !== null && editedTodo.trim() !== "") {
      const updatedTodos = [...list];
      updatedTodos[index].value = editedTodo;
      setList(updatedTodos);
    }
  };

  return (
    <div className={styles.todos}>
      <div className={styles.todo}>TODO LIST</div>
      <div className={styles.listInput}>
        <input
          className={styles.todoInput}
          placeholder="Add item..."
          value={userInput}
          onChange={(item) => updateInput(item.target.value)}
        />
        <button className={styles.buttonTodo} onClick={addItem}>
          ADD
        </button>
      </div>

      <div
        style={{ background: "#f9f9f9", padding: "20px", borderRadius: "8px" }}
      >
        {list.length > 0 ? (
          list.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <span style={{ fontSize: "1.2rem", flexGrow: "1" }}>
                {item.value}
              </span>
              <span>
                <button
                  className={styles.buttonDelete}
                  onClick={() => deleteItem(item.id)}
                >
                  Delete
                </button>
                <button
                  className={styles.buttonEdit}
                  onClick={() => editItem(index)}
                >
                  Edit
                </button>
              </span>
            </div>
          ))
        ) : (
          <div
            style={{ textAlign: "center", fontSize: "1.2rem", color: "#777" }}
          >
            No items in the list
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
