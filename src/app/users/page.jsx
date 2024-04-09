"use client";
import React, { useState } from "react";
import styles from "./page.module.css";

export default function Users() {
  const [task, setTask] = useState("");
  const [tasksArray, setTasksArray] = useState([]);

  return (
    <div className={styles.Users}>
      <h1 className="text-3xl text-slate-500 text-center font-bold">
        Me contacter
      </h1>
      <hr />
      <form>
        <div className="m-6">
          <label>Nom</label>
          <input
            type="text"
            name="name"
            className=" focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full mt-1 border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="m-6">
          <label>Email</label>
          <input
            type="text"
            name="email"
            className=" focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full mt-1 border-gray-300 rounded-md shadow-sm"
          />
        </div>

        <div className="m-6 w-80 rounded-md">
          <label>Message</label>
          <textarea name="message" rows="4" cols="50"></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary m-4 flex justify-center alignItems-center"
        >
          Commentaire
        </button>
        <div>
          <h1>
            <span className="text-red-500">**</span>Les commentaires{" "}
          </h1>
        </div>
      </form>
    </div>
  );
}
