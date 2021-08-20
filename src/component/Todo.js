import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiFileEditLine } from "react-icons/ri";
import TodoForm from "./TodoForm";
import classes from "./Todo.Module.css";

const Todo = ({ todos, deleteHandler, editHandler }) => {
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
    <div key={index} className={classes.todorow}>
      <div key={todo.id}>
        <p className={classes.para}>
          {todo.text}
          <span className={classes.icons}>
            <RiFileEditLine
              className={classes.editicon}
              onClick={() => setEdit({ id: todo.id, text: todo.text })}
            />

            <RiDeleteBin6Line
              className={classes.deleteicon}
              onClick={() => deleteHandler(todo.id)}
            />
          </span>
        </p>
      </div>
    </div>
  ));
};
export default Todo;
