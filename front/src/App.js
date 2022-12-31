import './App.css';
import Card from './components/Card.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>ONE API</h1>
        <Card
        nombre='Monkey D. Luffy'
        procedencia='East Blue'
        img='1'
        alt='Foto personaje 1'
        cargo='Capitan'
        empresa='Sombreros de Paja'
        recompensa='1'
        />
         <Card
        nombre='Roronoa Zoro'
        procedencia='East Blue'
        img='2'
        alt='Foto persona 1'
        cargo='Espadachin'
        empresa='Sombreros de Paja'
        recompensa='1'
        />           
      </div>
    </div>
  );
}

export default App;