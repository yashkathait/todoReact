import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import classes from "./TodoList.module.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    if (todo.text === "") {
      return;
    }
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const deleteHandler = (id) => {
    const todosUpdate = todos.filter((t) => t.id !== id);
    setTodos(todosUpdate);
  };

  return (
    <div className={classes.center}>
      <h1>To do List</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo todos={todos} deleteHandler={deleteHandler} />
    </div>
  );
};
export default TodoList;
