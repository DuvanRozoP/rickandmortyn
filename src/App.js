import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Detail/Detail.jsx';
import Nav from './components/Nav/Nav.jsx';
import Form from './components/Form/Form.jsx';
import { useState } from 'react';
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

function App() {
  const [characters, setCharacters] = useState(
    []
  );
  const uselocation = useLocation();
  const onSearch = (character) => {
    fetch(
      `https://rickandmortyapi.com/api/character/${character}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [
            ...oldChars,
            data,
          ]);
        } else {
          window.alert(
            'No hay personajes con ese ID'
          );
        }
      });
  };
  const onClose = (evento) => {
    setCharacters(
      characters.filter((element, index) => {
        return (
          evento.target.value !== String(index)
        );
      })
    );
  };

  return (
    <div
      className='App'
      style={{ padding: '25px' }}
    >
      {uselocation.pathname !== '/' ? (
        <Nav onsearch={onSearch} />
      ) : undefined}
      <Routes>
        <Route
          exact
          path='/'
          element={<Form />}
        />
        <Route
          exact
          path='/home'
          element={
            <Cards
              characters={characters}
              onclose={onClose}
            />
          }
        />
        <Route
          exact
          path='/detail/:id'
          element={<Detail />}
        />
      </Routes>
    </div>
  );
}

export default App;
