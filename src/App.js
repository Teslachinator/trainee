import "./App.css";
import Calculator from "./calculator/Calculator";
import Counter from "./counter/Counter";
import SearchFilter from "./searchData/SearchFilter";
import Todo from "./Todo-list/Todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todo />
      </header>
    </div>
  );
}

export default App;
