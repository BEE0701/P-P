
import Home from './component/Home';
import About from './component/About';
import Experience from './component/Experience';
import Developer from './component/Developer';
import Project from './component/Project';
import useScrollAnimation from "./hooks/useScrollAnimation";

function App() {
  useScrollAnimation();

  return (
    <>
      <Home />
      <About />
      <Experience />
      <Developer />
      <Project />
    </>
  );
}

export default App;