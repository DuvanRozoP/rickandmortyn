//import { useState } from 'react';
import { useState } from 'react';
import style from './SearchBar.module.css';

export default function SearchBar(props) {
  const { onSearch } = props;
  const [text, setText] = useState('');
  return (
    <div>
      {
        <>
          <input
            onChange={(data) => {
              setText(data.target.value);
            }}
            value={text}
            placeholder='Ingrese info...'
            className={style.input}
            type='search'
          />
          <button
            onClick={() => {
              setText('');
              onSearch(text);
            }}
            className={style.button}
          >
            Buscar
          </button>
        </>
      }
    </div>
  );
}
