import Card from './Card';
import styles from './Cards.style.css';

export default function Cards(props) {
  const { characters } = props;
  console.log(styles);
  return (
    <div className='contenedorCards'>
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
