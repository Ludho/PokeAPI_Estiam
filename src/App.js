import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavBar from "./components/navbar/navBar";

import Pokemons from './pages/pokemons';
import DetailsPokemon from './pages/detailsPokemon';
import Home from "./pages/home"
import Teams from "./pages/teams"
import CreateTeam from './pages/create-teams';
import UpdateTeam from './pages/update-team'

function App() {
  return (
    <div className='container'>
      <Router>
      <AppNavBar /> 
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/pokemons' element={<Pokemons/>}/>
        <Route path="/pokemons/:id" element={<DetailsPokemon/>} />
        <Route path="/teams" element={<Teams/>} />
        <Route path="/teams/create" element={<CreateTeam/>} />
        <Route path="/teams/update/:id" element={<UpdateTeam/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
