"use client";
import React, { useState } from "react";
import styles from "./page.module.css";

const Profile = () => {
  const [task, setTask] = useState("");
  const [tasksArray, setTasksArray] = useState([]);

  const inputChange = (e) => {
    setTask(e.target.value);
  };

  const inputSubmit = (e) => {
    e.preventDefault();

    if (task.trim()) {
      setTasksArray([...tasksArray, task]);
      // if (prev) {
      // setTasksArray([...prev, (id = length + 1), (tache = task)]);
      setTask("");
    }
  };

  const handleDelete = (index) => {
    setTasksArray(tasksArray.filter((_, i) => i !== index));
  };

  const editItem = (index) => {
    const editedTodo = () => {
      if (editedTodo !== null && editedTodo.trim() !== "") {
        const updatedTodos = [...list];
        updatedTodos[index].value = editedTodo;
        setList(updatedTodos);
      }
    };
  };
  return (
    <div className={styles.forms}>
      <h1 className="font-bold text-center "> To-do List in Next.js </h1>
      <form onSubmit={inputSubmit}>
        <input
          type="text"
          value={task}
          onChange={inputChange}
          placeholder="Enter a task"
          className=" m-3 border-solid border-2"
        />
        <button type="submit" className="btn bg-slate-500 m-4 text-white">
          Add task
        </button>
      </form>
      <ul>
        {tasksArray.map((task, index) => (
          <li key={index}>
            {task}
            <button
              onClick={() => handleDelete(index)}
              className="btn bg-red-700 m-8"
            >
              Delete
            </button>
            <button
              onClick={() => editItem(index)}
              className="btn bg-green-700 m-3"
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
