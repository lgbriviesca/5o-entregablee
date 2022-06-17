import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Pokedex from './Components/Pokedex';
import PokedexInfo from './Components/PokedexInfo';
import ProtectedRoutes from './Components/ProtectedRoutes';
import bottom from './Images/bottom.png';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedex/:id" element={<PokedexInfo />} />
          </Route>
        </Routes>
      </div>
      <img className="imgBottom" src={bottom} alt="intro" />
    </HashRouter>
  );
}

export default App;
