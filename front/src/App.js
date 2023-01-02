import './App.css';
import Card from './components/Card.js';
import Request from './utils/Request.js';
import React, { useState, useEffect } from "react";


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
  
  return (    
    <div className="App">
      <div className='contenedor-principal'>
        <h1>ONE API</h1>
        {characters ? (characters.map((personaje, i)=>(
        <Card key={i}
        nombre={personaje.name}
        lastName = {personaje.last_name}
        procedencia={personaje.origin}
        img='1'
        alt='Foto personaje 1'
        cargo={personaje.position}
        empresa={personaje.crew}
        recompensa={personaje.reward}
        />    
        ))) : 'Cargando'}
           
      </div>
    </div>
  );
}

export default App;