import styles from './Card.module.css';
import { useState } from 'react';

export default function Card(props) {
  const [isLoad, setIsLoad] = useState(true);
  const onClickHeader = () => {
    setIsLoad(!isLoad);
  };
  return (
    <div
      className={`${styles.contenedorCard} ${
        isLoad ? styles.animationAparecer : styles.eliminar
      }`}
    >
      <button onClick={onClickHeader}>X</button>
      <img src={props.image} alt='' />
      <h1>{props.name}</h1>
      <div className={styles.description}>
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
      </div>
    </div>
  );
}
