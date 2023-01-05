import './App.css';
import Card from './components/Card.js';
import Request from './utils/Request.js';
import React, { useState, useEffect } from "react";
import img from './img/logo.webp';
import Loader from './components/Loader';

function App() {
  const [characters, setCharacters] = useState(null);

  useEffect(() => {
    fetch(`${Request}`)
      .then((response) => response.json())
      .then((characters) => {
        console.log(characters)
        setCharacters(characters);
      });
  }, []);
  
    if (!characters)
      return <Loader/>;
      return( 
        <div className="App">
          <div className='contenedor-principal'>
            <h1>THE<img className='one' src={img} alt='icono one piece'/>NE API</h1>
            
            {characters.map((personaje, i)=>(
            <Card key={i}
            nombre={personaje.name}
            lastName = {personaje.last_name}
            procedencia={personaje.origin}
            img='1'
            alt='Foto personaje 1'
            cargo={personaje.position}
            empresa={personaje.crew}
            recompensa={personaje.reward}
            />))}
          </div>
        </div>)
}

export default App;