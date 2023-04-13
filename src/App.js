import "./App.css";

import Calculator from "./calculator/Calculator";
import Counter from "./counter/Counter";
import SearchFilter from "./searchData/SearchFilter";
import Todo from "./Todo-list/Todo";
// import MainPage from "./mainPage/MainPage";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import "./components/Bootstrap.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <main className="mb-5">
            <Routes>
              <Route path="/" element={<div>Еще не придумал</div>}></Route>
              <Route path="/counter" element={<Counter />}></Route>
              <Route path="/calculator" element={<Calculator />}></Route>
              <Route path="/searchFilter" element={<SearchFilter />}></Route>
              <Route path="/todo" element={<Todo />}></Route>
            </Routes>
          </main>
          <Footer />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
