import { RiDeleteBin6Line } from "react-icons/ri";
import { RiFileEditLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../store/action";
import classes from "./Todo.Module.css";

const Todo = () => {
  const list = useSelector((state) => state.todoReducer.list);
  const dispatch = useDispatch();
  return list.map((elem) => (
    <div key={elem.id} className={classes.todorow}>
      <div>
        <p className={classes.para}>
          {elem.data}
          <span className={classes.icons}>
            <RiFileEditLine
              className={classes.editicon}
              // onClick={() => setEdit({ id: todo.id, text: todo.text })}
            />
            <RiDeleteBin6Line
              className={classes.deleteicon}
              onClick={() => dispatch(removeTodo(elem.id))}
            />
          </span>
        </p>
      </div>
    </div>
  ));
};
export default Todo;
