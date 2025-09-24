import './App.css'
import Herosection from './components/Herosection';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <Navbar/>,
      <Herosection/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
