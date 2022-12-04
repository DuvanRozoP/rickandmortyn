import { useState } from 'react';
import { Link } from 'react-router-dom';
import validate from '../../services/validate';
import styles from './Form.module.css';
import validationAcount from '../../services/simulationAcount';

export default function Form() {
  const {
    danger,
    warning,
    form,
    contenedor,
    label,
    inputStyle,
    buttonStyle,
    requisitosUsuario,
    requisitosPassword,
  } = styles;


  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });
  const handleForm = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const array = Object.values(errors);
    if (array.length === 0) {
      setUserData({
        username: '',
        password: '',
      });

      setErrors({
        username: '',
        password: '',
      });
    } else {
      alert('Debes corregir los errores');
    }
  };
  return (
    <div className={contenedor}>
      <form
        className={form}
        onSubmit={handleSubmit}
      >
        <label className={label}>Usuario</label>
        <input
          name='username'
          type='text'
          value={userData.username}
          onChange={handleForm}
          placeholder='Escribe tu usuario'
          className={
            inputStyle ||
            (errors.username && warning)
          }
        />
        <p
          className={`${danger} ${requisitosUsuario}`}
        >
          {errors.username}
        </p>
        <label className={label}>
          Contrasena
        </label>
        <input
          name='password'
          type='password'
          value={userData.password}
          onChange={handleForm}
          placeholder='Ingrese tu contrasena'
          className={
            inputStyle ||
            (errors.password && warning)
          }
        />
        <p
          className={`${danger} ${requisitosPassword}`}
        >
          {errors.password}
        </p>
        <Link to='/home'>
          <button
            className={buttonStyle}
            type='submit'
          >
            Login
          </button>
        </Link>
      </form>
    </div>
  );
}
