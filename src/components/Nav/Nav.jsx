import styles from './Nav.module.css';
import SearchBar from '../SearchBar/SearchBar';

export default function Nav(props) {
  const { onsearch } = props;
  return (
    <div className={styles.containerNavBar}>
      <SearchBar
        onSearch={(id) => {
          console.log(id);
          onsearch(id);
        }}
      />
    </div>
  );
}
