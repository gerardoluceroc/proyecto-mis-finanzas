import { useFormik } from "formik";
import { useEffect, useState } from "react";
import TextFieldUno from "../TextField/TextFieldUno";

const Login = () => {
    const [email, setEmail] = useState("");

    useEffect(() => {console.log("📌  email => ",email)}, [email]);
  
  
    const formik = useFormik({
      initialValues: {
        email:"",
        password: ""
      },
      validationSchema: ValidationSchemaIdentificador,
      onSubmit: async () => {
          console.log("on submit executed");
      }, 
    });
  
    return (
      <>
      <TextFieldUno
      label="Correo electrónico"
      placeholder="Ingrese su correo electrónico"
      onChange={(e)=> setEmail(e.target.value)}
      />
      </>
    )
}

export default Login;