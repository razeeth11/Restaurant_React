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
      <Testimonial/>
    </div>
  );
}


function Testimonial(){
  return(
    <div className="testimonial">
       <div className="test-image">
         
       </div>
       <div className="test-lines">

       </div>
    </div>
  )
}

export default App;
