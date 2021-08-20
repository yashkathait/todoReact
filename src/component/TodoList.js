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
    const todosUpdated = todos.filter((t) => t.id !== id);

    setTodos(todosUpdated);
  };

  const editHandler = (todoId, newValue) => {
    if (!newValue.text) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  return (
    <div className={classes.center}>
      <h1 className={classes.heading}>To do List</h1>
      <TodoForm onSubmit={addTodo} />
      <div>
        <Todo
          todos={todos}
          deleteHandler={deleteHandler}
          editHandler={editHandler}
        />
      </div>
    </div>
  );
};
export default TodoList;
