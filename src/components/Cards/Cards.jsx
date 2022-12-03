import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards(props) {
  const { characters, onclose } = props;
  return (
    <div className={styles.contenedorCards}>
      {characters.map((element, index) => {
        return (
          <Card
            id={index}
            name={element.name}
            species={element.species}
            gender={element.gender}
            image={element.image}
            onClose={onclose}
          />
        );
      })}
    </div>
  );
}
