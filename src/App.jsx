import "./App.css";
import { Categories } from "./Categories";
import { Main } from "./Main.1";
import { NavBar } from "./NavBar";
import { Testimonial } from "./Testimonial";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Categories />
      <Testimonial />
    </div>
  );
}

export default App;
