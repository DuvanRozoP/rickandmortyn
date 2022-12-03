import styles from './Card.module.css';

export default function Card(props) {
  const { onClose, id } = props;

  return (
    <div className={styles.contenedorCard}>
      <button value={id} onClick={onClose}>
        X
      </button>
      <img src={props.image} alt='' />
      <h1>{props.name}</h1>
      <div className={styles.description}>
        <h2>{props.species}</h2>
        <h2>{props.gender}</h2>
      </div>
    </div>
  );
}
