export default function validate(inputs) {
  const regexEmail =
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  // *const regexPasword =
  //   */^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

  const regexPasword =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

  const { username, password } = inputs;

  const errors = {};

  if (!regexEmail.test(username))
    errors.username =
      'Debe ser un correo electrónico';

  if (password.length === 0)
    errors.password = 'Ingrese la contrasena';

  if (!regexPasword.test(password)) {
    errors.password = `
    contraseña de entre 7 y 15 
    caracteres que contenga al 
    menos un dígito numérico y 
    un carácter especial.`;
  }
  return errors;
}
