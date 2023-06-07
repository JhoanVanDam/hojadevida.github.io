import logo from './logo.svg';
import './App.css';
import Navbarstatic from './Components/navbarstatic/navbarstatic';
import About from './Components/about/about';
function App() {
  return (
    <div className="App">
      <Navbarstatic></Navbarstatic>
      <About></About>
    </div>
  );
}

export default App;
