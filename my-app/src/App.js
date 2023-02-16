import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About/About";
import CallMe from "./Components/CallMe/CallMe";

import SimpleSlider from "./Components/Slider/SimpleSlider";

function App() {
  return (
    <div>
      <Header />
      <About />
      <SimpleSlider />
      <CallMe />
    </div>
  );
}

export default App;
