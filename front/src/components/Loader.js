import React from "react"; //desde el 2020 no es obligatorio para componentes sencillos
import {CircleLoader} from 'react-spinners';
import '../styles/Loader.css'

const Loader = () => {
  return (
    <div className="contenedor">
    <CircleLoader className="circle" color="#000" size={100}/>
    <div className="loader">
      <p>" Camina con paso firme, sin bajar la vista, sonríe al que deseaba verte caer, haciéndole saber que todavia no te has rendido "</p>
      <span>Gold D. Roger</span>
    </div> 
    </div>
    
    );
};

export default Loader;
