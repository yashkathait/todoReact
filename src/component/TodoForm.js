import { useState, useRef, useEffect } from "react";
import classes from "./TodoForm.module.css";
import Button from "./Button";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.text : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit({
      id: Math.random().toString(),
      text: input,
    });
    setInput("");
  };

  return (
    <form
      onSubmit={submitHandler}
      className={classes.todoform}
      autoComplete="off"
    >
      {props.edit ? (
        <input
          className={classes.inputedit}
          placeholder="Edit Todo"
          value={input}
          onChange={handleChange}
          name="text"
          ref={inputRef}
        ></input>
      ) : (
        <input
          className={classes.input}
          placeholder="Add Todo"
          value={input}
          onChange={handleChange}
          name="text"
          ref={inputRef}
        ></input>
      )}
      {!props.edit ? <Button>+</Button> : <div></div>}
    </form>
  );
};

export default TodoForm;
