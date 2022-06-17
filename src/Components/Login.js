import '../App.css';
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import sendIcon from '../Images/pokeball.png';
import intro from '../Images/image11.png';
import bottom from '../Images/bottom.png';

const Login = () => {
  const [userName, setUserName] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = e => {
    e.preventDefault();
    console.log(userName);
    dispatch({ type: 'GET_USERNAME', payload: userName });
    /*  setUserName(""); */ //esto es pra que al enviar el submit, quede en blanco de nuevo
    navigate('/pokedex');
  };

  return (
    <div>
      <div className="intro">
        <img className="imgIntro" src={intro} alt="intro" />
      </div>
      <div className="text">
        <h1 className="greeting">¡Hola, entrenador!</h1>
        <h3>para poder comenzar, dame tu nombre</h3>
      </div>
      <div className="form">
        <form action="" onSubmit={submit}>
          <input
            className="input"
            type="text"
            value={userName}
            required
            onChange={e => setUserName(e.target.value)}
            placeholder="me llamo..."
          />
          <button className="send">empezar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
