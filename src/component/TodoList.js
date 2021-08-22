import TodoForm from "./TodoForm";
import Todo from "./Todo";
import classes from "./TodoList.module.css";

const TodoList = () => {
  return (
    <div className={classes.center}>
      <h1 className={classes.heading}>To do List</h1>
      <TodoForm />
      <div>
        <Todo />
      </div>
    </div>
  );
};
export default TodoList;
