import {
  useParams,
  Link,
} from 'react-router-dom';
import { useEffect, useState } from 'react';

// *diretives
import directivesAnimations from '../../directives/animation.module.css';

import './Detail.css';

export default function Detail() {
  // *Directivas
  const { animations, animationItem } =
    directivesAnimations;

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
    <div
      className={`${animations} containerPrincipal`}
    >
      <div className={`card ${animationItem}`}>
        <h1 className='name'>Name: {name}</h1>
        <div className='info'>
          <p className='status cardInfo'>
            Status: {status}
          </p>
          <p className='species cardInfo'>
            Specie: {species}
          </p>
          <p className='gender cardInfo'>
            Gender: {gender}
          </p>
          <p className='origin cardInfo'>
            Origin: {dataOrigin.name}
          </p>
        </div>
        <div
          className={`containerInfo2 ${animationItem}`}
        >
          <img
            className='imagenCard'
            src={image}
            alt={name}
          />
          <Link to='/home'>
            <button className='back'>Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
