import "./App.css";
import { Categories } from "./Categories";
import { Main } from "./Main.1";
import { NavBar } from "./NavBar";
import { Services } from "./Services";
import { Testimonial } from "./Testimonial";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Categories />
      <Testimonial />
      <Services />
    </div>
  );
}

export default App;
