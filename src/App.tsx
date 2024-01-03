import "./App.css";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoLIst";

function App() {
  const todos = [{ id: "t1", text: "Finish the course" }];
  return (
    <div className="App">
      <NewTodo />
      <TodoList items={todos} />
    </div>
  );
}

export default App;
