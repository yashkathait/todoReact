import { useState } from "react";
import { editTodo } from "../store/action";
import { useDispatch } from "react-redux";

const EditForm = ({ elem, setIsEditing }) => {
  const [edit, setEdit] = useState(elem.data);
  const dispatch = useDispatch();

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
    <form onSubmit={submitHandler}>
      <input type="text" value={edit} onChange={handleChange}></input>
    </form>
  );
};

export default EditForm;
