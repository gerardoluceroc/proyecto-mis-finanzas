import { Box, Typography } from "@mui/material"
import TextFieldUno from "../TextField/TextFieldUno"
import "./Register.css"
import ButtonTypeOne from "../Buttons/ButtonTypeOne/ButtonTypeOne"
import { useFormik } from "formik"
import ValidationRegister from "./ValidationRegister"
import useRegister from "../../hooks/useRegister"
import { useEffect } from "react"

const Register = () => {

    const {loading, response, registerUser} = useRegister();

    const formik = useFormik({
        initialValues: {
            name: "",
            lastname: "",
            email: "",
            password: "",
        },
        validationSchema: ValidationRegister,
        onSubmit: async () => {
            try {
                const result = await registerUser({
                    email: formik.values.email,
                    password: formik.values.password,
                    name: formik.values.name,
                    lastName: formik.values.lastname,
                });
    
                if (result.status === 200) {
                    // Aquí solo verificamos el status
                    console.log("Registro exitoso con status", result.status);
                    // Puedes redirigir al usuario o mostrar un mensaje de éxito
                } else {
                    // Si no fue exitoso, se muestra el errorMessage
                    console.error("Error al registrarse:", result.errorMessage);
                    formik.setFieldError('email', `${result.errorMessage}`);
                }
            } catch (error) {
                console.error("Error al intentar registrarse", error);
                // En caso de error, también puedes manejarlo de esta manera si lo prefieres
            }
        }
    });
    
    useEffect(() => {console.log("📌 formik => ",formik.values)}, [formik.values]);

  return (
    <Box id="ContainerRegister">
        <Box id="BoxRegister">
        <Box id="HeaderRegister">
          <Typography variant="h4">Regístrate</Typography>
          <Typography variant="h6" color="gray">Rellena los campos para crear tu usuario</Typography>
        </Box>

        <Box id="CredentialsRegister">

            <Box id="NamesRegister">
                <TextFieldUno
                    label="Nombre"
                    placeholder="Nombre"
                    name="name"
                    type="text"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />

                <TextFieldUno
                    label="Apellido"
                    placeholder="Apellido"
                    name="lastname"
                    type="text"
                    value={formik.values.lastname}
                    onChange={formik.handleChange}
                    error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                    helperText={formik.touched.lastname && formik.errors.lastname}
                />
            </Box>

            <TextFieldUno
                label="Correo electrónico"
                placeholder="ejemplo@ejemplo.com"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
            />

            <TextFieldUno
                label="Contraseña"
                placeholder=""
                name="password"
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
            />
        </Box>

        <Box id="BoxLoginButton">
          <ButtonTypeOne
          text="Registrarse"
          handleClick={formik.handleSubmit}
          loading={loading}
          backgroundColor="#2ecc71"
          backgroundColorHover=" #239b56 "
          />
        </Box>

        </Box>
    </Box>
  )
}

export default Register