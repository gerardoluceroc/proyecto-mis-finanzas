import { useFormik } from "formik";
import { useEffect, useState } from "react";
import TextFieldUno from "../TextField/TextFieldUno";
import { Box, Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
import "./Login.css"
import ValidationLogin from "./ValidationLogin";
import ButtonTypeOne from "../Buttons/ButtonTypeOne/ButtonTypeOne";
import useLogin from "../../hooks/useLogin";

const Login = () => {

  const {response, loading, loginSession} = useLogin();


  const formik = useFormik({
    initialValues: {
      email:"",
      password: ""
    },
    validationSchema: ValidationLogin,
    onSubmit: async () => {

      const token = await loginSession({email: formik.values.email, password: formik.values.password});
      console.log("🚀 ~ onSubmit: ~ token:", token)
      
      if (token) {
        console.log("Login exitoso, token:", token);
        // Aquí puedes almacenar el token en localStorage o gestionarlo según lo necesites
      } else {
        console.error("Error al iniciar sesión", error);
      }
        
    }, 
  });
  useEffect(() => {console.log("📌 formik values => ",formik.values)}, [formik.values]);


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
        />
      </Box>

        
      </Box>

    </Box>
    // <>
    // {/* <h1>Hola amigos</h1> */}
    // <TextFieldUno
    // label="Correo electrónico"
    // placeholder="ejemplo@ejemplo.com"
    // onChange={(e)=> setEmail(e.target.value)}
    // />
    // <h1>hola</h1>
    // </>
  )
}

export default Login;