import React from 'react';
import {AiFillGithub} from "react-icons/ai"

const Home = () => {
  return (
    <div className='text-center flex-row'>
      <h1>React Pokédex</h1>
        <a href="https://github.com/Ludho/PokeAPI_Estiam">
          <AiFillGithub  color="black" className="svg" size={32}></AiFillGithub>
        </a>
      <p>Réalisé par Ho Ludwig</p>
    </div>
  );
};
  
export default Home;