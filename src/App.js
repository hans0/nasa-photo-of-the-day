import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import NavBar from './components/NavBar';
import Photo from './components/Photo';
import placeholder  from './assets/placeholder.jpg';
import { api_key, apod_url } from './private/ApiKey';


function App() {
  
  const [imageData, setImageData] = useState({});
  const [nasaImage, setNasaImage] = useState(placeholder);
  
  useEffect(() => {
    axios.get(`${apod_url}?api_key=${api_key}`)
      .then((res) => {
        console.log(res);
        setImageData(res.data);
        setNasaImage(res.data.url);
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);
  
  
  return (
    <div className="App">
      <NavBar />
      <Photo image={nasaImage} imageData={imageData} />
    </div>
  );
}

export default App;
