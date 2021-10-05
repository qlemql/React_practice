import logo from "./logo.svg";
import "./App.css";

function App() {
  let data = "changeData";

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 blog</div>
      </div>
      <div style={{ color: "blue", fontSize: "30px" }}>{data}</div>
    </div>
  );
}

export default App;
