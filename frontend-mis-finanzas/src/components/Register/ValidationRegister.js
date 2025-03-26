import * as Yup from 'yup';

const ValidationRegister = Yup.object({
  name: Yup.string()
    .trim()  // Elimina los espacios al principio y al final
    .transform(value => value.replace(/\s/g, ''))  // Elimina todos los espacios (incluyendo los intermedios)
    .required('El nombre es obligatorio')
    .min(2, 'El nombre debe tener al menos 2 caracteres'),
  
  lastname: Yup.string()
    .trim()  // Elimina los espacios al principio y al final
    .transform(value => value.replace(/\s/g, ''))  // Elimina todos los espacios (incluyendo los intermedios)
    .required('El apellido es obligatorio')
    .min(2, 'El apellido debe tener al menos 2 caracteres'),
  
  email: Yup.string()
    .trim()  // Elimina los espacios al principio y al final
    .transform(value => value.replace(/\s/g, ''))  // Elimina todos los espacios (incluyendo los intermedios)
    .email('Por favor ingresa un correo electrónico válido')
    .required('El correo electrónico es obligatorio'),
  
  password: Yup.string()
    .trim()  // Elimina los espacios al principio y al final
    .transform(value => value.replace(/\s/g, ''))  // Elimina todos los espacios (incluyendo los intermedios)
    .min(6, 'La contraseña debe tener al menos 6 caracteres')
    .required('La contraseña es obligatoria'),
});



export default ValidationRegister;
