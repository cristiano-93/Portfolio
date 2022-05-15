import "./App.css";
import Intro from "./components/intro/intro";
import Navbar from "./components/navbar/navbar";
import { Switch, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <div>{/* <Intro /> */}</div>
    </div>
  );
}

export default App;
