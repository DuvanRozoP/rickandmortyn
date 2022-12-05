const usuario = 'DuvanRozo@gmail.com';
const contrasena = '12345678*';

export default function validationAcount(
  userData
) {
  const errors = {};

  if (userData.username !== usuario)
    errors.username = 'Usuario invalido';

  if (userData.password !== contrasena)
    errors.password = 'Contrasena invalida';
  return errors;
}
