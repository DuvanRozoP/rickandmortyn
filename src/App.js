import './App.css';
//import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
//import SearchBar from './components/SearchBar/SearchBar.jsx';
import Nav from './components/Nav/Nav.jsx';
import { useState } from 'react';

function App() {
  const example = {
    name: 'Morty Smith este llega',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  };

  const [characters, setCharacters] = useState([example]);
  const onSearch = (character) => {
   fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
}

  return (
    <div className='App' style={{ padding: '25px' }}>
      <Nav onsearch={onSearch} />
      <Cards characters={characters} />
    </div>
  );
}

export default App;
