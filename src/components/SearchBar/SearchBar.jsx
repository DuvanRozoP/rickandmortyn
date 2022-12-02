//import { useState } from 'react';
import style from './SearchBar.module.css';

export default function SearchBar(props) {
  const { onSearch } = props;
  let input = '';
  return (
    <div>
      {
        <>
          <input
            onChange={(data) => {
              input = data.target.value;
            }}
            placeholder='Ingrese info...'
            className={style.input}
            type='search'
          />
          <button onClick={() => onSearch(input)} className={style.button}>
            Buscar
          </button>
        </>
      }
    </div>
  );
}
