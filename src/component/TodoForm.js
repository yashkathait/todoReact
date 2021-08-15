import { useState } from "react";
import classes from "./TodoForm.module.css";

const TodoForm = (props) => {
  const [input, setInput] = useState("");

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
    <form onSubmit={submitHandler}>
      <input
        className={classes.input}
        placeholder="Add Todo"
        value={input}
        onChange={handleChange}
        name="text"
      ></input>
      <button>Add</button>
    </form>
  );
};

export default TodoForm;
