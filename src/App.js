import './App.css';
import Pokemons from './pages/pokemons';
import DetailsPokemon from './pages/detailsPokemon';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavBar from "./components/navbar/navBar";
import Home from "./pages/home"

function App() {
  return (
    <div className='container'>
      <Router>
      <AppNavBar /> 
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/pokemons' element={<Pokemons/>}/>
        <Route path="/pokemons/:id" element={<DetailsPokemon/>} />
        <Route path="/teams" element={<Pokemons/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
