import { useFormik } from "formik";
import { useEffect, useState } from "react";
import TextFieldUno from "../TextField/TextFieldUno";
import { Box, Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
import "./Login.css"
import ValidationLogin from "./ValidationLogin";
import ButtonTypeOne from "../Buttons/ButtonTypeOne/ButtonTypeOne";
import useLogin from "../../hooks/useLogin";

const Login = () => {

  const {response, loading, loginSession, responseStatus} = useLogin();

  const [cargando, setCargando] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: ValidationLogin,
    onSubmit: async () => {
      try {
        const result = await loginSession({ email: formik.values.email, password: formik.values.password });
        if (result) {
          const { token, status } = result;
          if (token) {
            console.log("Login exitoso");
          } else if (status === 401) {
            formik.setFieldError('email', "Error al iniciar sesión");
            formik.setFieldError('password', "Error al iniciar sesión");
          }
        } else {
          console.error("Error al intentar iniciar sesión: Correo y/o contraseña incorrecto(s)");
          formik.setFieldError('email', "Correo y/o contraseña incorrecto(s)");
          formik.setFieldError('password', "Correo y/o contraseña incorrecto(s)");
        }
      } catch (error) {
        formik.setFieldError('email', "Hubo un error al intentar iniciar sesión");
        formik.setFieldError('password', "Hubo un error al intentar iniciar sesión");
      }
    }
  });

  return (
    <Box id="ContainerLogin">
      <Box id="BoxLogin">
        <Box id="HeaderLogin">
          <Typography variant="h4">Iniciar sesión</Typography>
          <Typography variant="h6" color="gray">Ingresa tus datos para iniciar sesión</Typography>
        </Box>

        <Box id="CredentialsLogin">
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

          <FormControlLabel control={<Checkbox defaultChecked />} label="Recuerdame" sx={{marginLeft: "5px", marginTop: "-15px"}} />

        </Box>

        <Box id="BoxLoginButton">
          <ButtonTypeOne
          text="Iniciar sesión"
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

export default Login;