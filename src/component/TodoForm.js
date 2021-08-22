import { useState, useRef, useEffect } from "react";
import { addTodo } from "../store/action";
import { useDispatch } from "react-redux";
import classes from "./TodoForm.module.css";
import Button from "./Button";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    setInput("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className={classes.todoform}
      autoComplete="off"
    >
      <input
        className={classes.input}
        placeholder="Add Todo"
        value={input}
        onChange={handleChange}
        name="text"
        ref={inputRef}
      ></input>

      <Button onClick={() => dispatch(addTodo(input))}>+</Button>
    </form>
  );
};

export default TodoForm;
