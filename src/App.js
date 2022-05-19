import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavBar from "./components/navbar/navBar";

import Pokemons from './pages/pokemons';
import DetailsPokemon from './pages/detailsPokemon';
import Home from "./pages/home"
import Teams from "./pages/teams"
import CreateTeam from './pages/create-teams';
import UpdateTeam from './pages/update-team'
import FormPokemon from './pages/forms-pokemon';

function App() {
  return (
    
      <Router>
      <AppNavBar /> 
      <div className='container'>
      <Routes>
      
      <Route path='/' element={<Home/>}/>
        <Route path='/pokemons' element={<Pokemons/>}/>
        <Route path="/pokemons/:id" element={<DetailsPokemon/>} />
        <Route path="/pokemons/update/:id" element={<FormPokemon props={{req:"update"}}/>} />
        <Route path="/pokemons/create" element={<FormPokemon props={{req:"create"}}/>} />
        <Route path="/teams" element={<Teams/>} />
        <Route path="/teams/create" element={<CreateTeam/>} />
        <Route path="/teams/update/:id" element={<UpdateTeam/>} />
        
      </Routes>
      </div>
    </Router>
    
  );
}

export default App;
