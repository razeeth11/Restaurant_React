import "./App.css";
import { Categories } from "./Categories";
import { Main } from "./Main.1";
import { NavBar } from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Categories />
    </div>
  );
}

export default App;
