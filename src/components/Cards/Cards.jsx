import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={styles.contenedorCards}>
      {characters.map((element) => {
        return (
          <Card
            name={element.name}
            species={element.species}
            gender={element.gender}
            image={element.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
          />
        );
      })}
    </div>
  );
}
