import { useFormik } from "formik";
import { useEffect, useState } from "react";
import TextFieldUno from "../TextField/TextFieldUno";
import { Box, Button, Checkbox, FormControlLabel, Typography } from "@mui/material";
import "./Login.css"
import ValidationLogin from "./ValidationLogin";
import ButtonTypeOne from "../Buttons/ButtonTypeOne/ButtonTypeOne";

const Login = () => {
    const [email, setEmail] = useState("");

    useEffect(() => {console.log("📌  email => ",email)}, [email]);
  
  
    const formik = useFormik({
      initialValues: {
        email:"",
        password: ""
      },
      validationSchema: ValidationLogin,
      onSubmit: async () => {
          console.log("on submit executed");
      }, 
    });
  
    return (
      <Box id="ContainerLogin">
        <Box id="BoxLogin">
          <Box id="HeaderLogin">
            <Typography variant="h4">Inicia sesión</Typography>
            <Typography variant="h6" color="gray">Ingresa tus datos para iniciar sesión</Typography>
          </Box>

          <Box id="CredentialsLogin">
            <TextFieldUno
              label="Correo electrónico"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <TextFieldUno
              label="Contraseña"
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <FormControlLabel control={<Checkbox defaultChecked />} label="Recuerdame" sx={{marginLeft: "5px"}} />

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