import "./App.css";
import Calculator from "./calculator/Calculator";
import Counter from "./counter/Counter";
import SearchFilter from "./searchData/SearchFilter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchFilter />
      </header>
    </div>
  );
}

export default App;
