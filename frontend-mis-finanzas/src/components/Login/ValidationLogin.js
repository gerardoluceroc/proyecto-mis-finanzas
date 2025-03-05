// ValidationLogin.js
import * as Yup from 'yup';

const ValidationLogin = Yup.object({
  email: Yup.string()
    .email('Por favor ingresa un correo electrónico válido')
    .required('El correo electrónico es obligatorio'),
  
  password: Yup.string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),
});

export default ValidationLogin;
