import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiFileEditLine } from "react-icons/ri";
import TodoForm from "./TodoForm";

const Todo = ({ todos, deleteHandler, editHandler, completeTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    text: "",
  });

  const submitEdit = (text) => {
    editHandler(edit.id, text);
    setEdit({
      id: null,
      text: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitEdit} />;
  }

  return todos.map((todo, index) => (
    <div key={index}>
      <p key={todo.id}>
        <span onClick={() => completeTodo(todo.id)}>{todo.text}</span>
        <span>
          <RiFileEditLine
            onClick={() => setEdit({ id: todo.id, text: todo.text })}
          />

          <RiDeleteBin6Line onClick={() => deleteHandler(todo.id)} />
        </span>
      </p>
    </div>
  ));
};
export default Todo;
