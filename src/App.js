import logo from './logo.svg';
import './App.css';
const Os = ["Services" ,"Projects", "About", "jani", "sai kiran"];
function App() {
  return (
    <div className="App">
    <h2>LogoBackery</h2>

    <div>
      <ul>
        {Os.map((e) =>{
          return <li>{e}</li>
        })}
      </ul>
    </div>

    <button>contact</button>


  </div>

  );
}

export default App;
