import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiFileEditLine } from "react-icons/ri";

const Todo = ({ todos, deleteHandler }) => {
  return todos.map((todo, index) => (
    <div key={index}>
      <p key={todo.id}>
        {todo.text}
        <span>
          <RiFileEditLine />

          <RiDeleteBin6Line onClick={() => deleteHandler(todo.id)} />
        </span>
      </p>
    </div>
  ));
};
export default Todo;
