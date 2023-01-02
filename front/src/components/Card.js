import React from "react"; //desde el 2020 no es obligatorio para componentes sencillos
import "../styles/Card.css";

const Card = (props) => {
  return (
    <div className="contenedor-card">
      <img
        className="imagen-card"
        // src={require('../img/Luffy-PNG-Transparent-HD-Photo.png')}
        src={require(`../img/${props.img}.png`)}
        alt={props.alt}
      />
      <div className="contenedor-texto-card">
        <p className="nombre-card">
          <strong>
            {props.lastName} {props.nombre}
          </strong>{' '}
          from {props.procedencia}
        </p>

        <p className="cargo-card">
          {props.cargo} of the <strong>{props.empresa}</strong>
        </p>
        <p className="texto-card">
          Reward: <em>{props.recompensa}</em> Berries
        </p>
      </div>
    </div>
  );
};

export default Card;
