import logo from "./logo.svg";
import "./App.css";

function App() {
  console.log("Hello from the");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Did you know ? The Eiffel Tower can be 15 cm taller during the summer,
          due to thermal expansion meaning the iron heats up, the particles gain
          kinetic energy and take up more space.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
