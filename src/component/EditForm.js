import { useState, useRef, useEffect } from "react";
import { editTodo } from "../store/action";
import { useDispatch } from "react-redux";
import classes from "./EditForm.module.css";

const EditForm = ({ elem, setIsEditing }) => {
  const [edit, setEdit] = useState(elem.data);
  const dispatch = useDispatch();

  const editRef = useRef(null);

  useEffect(() => {
    editRef.current.focus();
  });

  const handleChange = (event) => {
    setEdit(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    dispatch(editTodo({ id: elem.id, data: edit }));

    setIsEditing(false);
    setEdit("");
  };

  return (
    <form className={classes.Editform} onSubmit={submitHandler}>
      <input
        className={classes.Editinput}
        type="text"
        ref={editRef}
        value={edit}
        onChange={handleChange}
      ></input>
    </form>
  );
};

export default EditForm;
