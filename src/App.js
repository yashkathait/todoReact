import TodoList from "./component/TodoList";
import "./App.css";

const App = () => {
  return (
    <div className="card">
      <TodoList className="todolist" />
    </div>
  );
};

export default App;
