import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiFileEditLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../store/action";
import EditForm from "./EditForm";
import classes from "./Todo.Module.css";

const Todo = () => {
  const [isediting, setIsEditing] = useState(false);

  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();

  return list.map((elem) => (
    <div key={elem.id} className={classes.todorow}>
      {isediting ? (
        <EditForm elem={elem} setIsEditing={setIsEditing}></EditForm>
      ) : (
        <div>
          <p className={classes.para}>
            {elem.data}
            <span className={classes.icons}>
              <RiFileEditLine
                className={classes.editicon}
                onClick={() => setIsEditing(!isediting)}
              />
              <RiDeleteBin6Line
                className={classes.deleteicon}
                onClick={() => dispatch(removeTodo(elem.id))}
              />
            </span>
          </p>
        </div>
      )}
    </div>
  ));
};
export default Todo;
