import { useState } from 'react';
import validate from '../../services/validate';
import styles from './Form.module.css';

export default function Form(props) {
  // *Styles
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

  // *Props
  const { login } = props;

  // TODO: misma funcion ejecutada 2 veces

  // *useState
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  // *handleFunctions
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
  const handleValidate = () => {
    login(userData,setErrors);
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
        <button
          className={buttonStyle}
          type='submit'
          onClick={handleValidate}
        >
          Login
        </button>
      </form>
    </div>
  );
}
