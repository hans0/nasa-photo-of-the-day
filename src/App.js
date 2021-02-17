import React from "react";
import "./App.css";
import NavBar from './components/NavBar';
import Photo from './components/Photo';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Photo />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
