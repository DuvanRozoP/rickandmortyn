const usuario = 'DuvanRozo@gmail.com';
const contrasena = '12345678*';

export default function validationAcount(
  user,
  password
) {
  const errors = {};

  if (usuario !== user)
    errors.username = 'usuario incorrecto';

  if (contrasena !== password)
    errors.password = 'contrasena incorrecta';

  return errors;
}
