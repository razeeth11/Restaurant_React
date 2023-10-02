import "./App.css";
import { Categories } from "./Categories";
import { Contact } from "./Contact";
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
      <Contact />
    </div>
  );
}

export default App;
