import styles from './Card.module.css';
import { Link } from 'react-router-dom';

// *diretives
import directivesAnimations from '../../directives/animation.module.css';

export default function Card(props) {
  // *Directivas
  const { animations, animationItem } =
    directivesAnimations;

  const { onClose, id, key } = props;
  return (
    <div className={animations}>
      <div
        id={key}
        className={`${styles.contenedorCard} ${animationItem}`}
      >
        <button value={id} onClick={onClose}>
          X
        </button>
        <Link to={`/detail/${id}`}>
          <img
            className={animationItem}
            src={props.image}
            alt=''
          />
        </Link>
        <h1>{props.name}</h1>
        <div className={styles.description}>
          <h2>{props.species}</h2>
          <h2>{props.gender}</h2>
        </div>
      </div>
    </div>
  );
}
