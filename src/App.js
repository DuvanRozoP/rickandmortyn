// *React
import { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom';

// *Pages
import Cards from './components/Cards/Cards.jsx';
import Detail from './components/Detail/Detail.jsx';
import Nav from './components/Nav/Nav.jsx';
import Form from './components/Form/Form.jsx';

// *css
import './App.css';

// *Services
import validate from './services/validate';

// *Component App
function App() {
  const [characters, setCharacters] = useState(
    []
  );

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
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
  const login = (userData, setErrors) => {
    const response = validate(userData);
    if (Object.values(response).length === 0) {
      setAccess(true);
      navigate('/home');
    } else {
      setErrors({
        username: response.username || '',
        password: response.password || '',
      });
    }
  };

  useEffect(() => {
    !access && navigate('/');
  }, [access]);

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
          element={<Form login={login} />}
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
