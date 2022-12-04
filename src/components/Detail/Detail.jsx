import {
  useParams,
  Link,
} from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Detail() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();
  const {
    name,
    status,
    species,
    gender,
    image,
    origin,
  } = character;
  const dataOrigin = { ...origin };

  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    )
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert(
            'No hay personajes con ese ID'
          );
        }
      })
      .catch((err) => {
        window.alert(
          'No hay personajes con ese ID',
          err
        );
      });
    return setCharacter({});
  }, [id]);

  return (
    <>
      <div>
        <h1 className='name'>{name}</h1>
        <p className='status'>{status}</p>
        <p className='species'>{species}</p>
        <p className='gender'>{gender}</p>
        <p className='origin'>
          {dataOrigin.name}
        </p>
        <img src={image} alt={name} />
      </div>
      <Link to='/home'>
        <button>Back</button>
      </Link>
    </>
  );
}
