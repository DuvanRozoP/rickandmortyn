import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

export default function Nav(props) {
  const { onsearch } = props;
  return (
    <div className={styles.containerNavBar}>
      <SearchBar
        onSearch={(id) => {
          onsearch(id);
        }}
      />
      <Link to='/home'>
        <button>Home</button>
      </Link>
    </div>
  );
}
