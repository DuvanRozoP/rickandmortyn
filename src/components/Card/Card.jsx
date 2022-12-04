import styles from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card(props) {
  const { onClose, id, key } = props;
  return (
    <div
      id={key}
      className={styles.contenedorCard}
    >
      <button value={id} onClick={onClose}>
        X
      </button>
      <Link to={`/detail/${id}`}>
        <img src={props.image} alt='' />
      </Link>
      <h1>{props.name}</h1>
      <div className={styles.description}>
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
      </div>
    </div>
  );
}
