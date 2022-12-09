import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

// *diretives
import directivesAnimations from '../../directives/animation.module.css';

export default function Nav(props) {
  // *Directivas
  const { animations, animationItem } =
    directivesAnimations;

  const { onsearch } = props;
  return (
    <div className={animations}>
      <div className={styles.containerNavBar}>
        <SearchBar
          onSearch={(id) => {
            onsearch(id);
          }}
        />
        <Link to='/home'>
          <button
            className={`${styles.home} ${animationItem}`}
          >
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}
