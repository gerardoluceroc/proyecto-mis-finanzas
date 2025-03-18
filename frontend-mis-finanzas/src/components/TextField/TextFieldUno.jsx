import { TextField, InputAdornment, IconButton } from "@mui/material";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useEffect, useState } from "react";

const TextFieldUno = ({ 
  label = "Movies",
  placeholder = "Search for movies",
  onChange = () => {},
  defaultValue = "",
  error = false,
  helperText = "",
  type = "text",
  name = "",
}) => {

  const [textfieldType, setTextfieldType] = useState(type);
  const [passwordVisible, setPasswordVisible] = useState(false);
  useEffect(() => {
    //Para los textfield tipo password, se cambia la visibilidad del texto de acuerdo al estado passwordVisible 
    if(passwordVisible && type === "password"){
      setTextfieldType("text");
    }
    else if(!passwordVisible && type === "password"){
      setTextfieldType("password");
    }
  }, [passwordVisible])

  //Funcion que se ejecuta al presionar el logo de visibility para el caso de text fields tipo password
  const handlePasswordVisibility = () => {
    setPasswordVisible(prevValue => !prevValue);
  }

  // Condicionalmente asignar el slotProps solo si el tipo es "password"
  const slotProps = type === "password" ? {
    input: {
      endAdornment: (
        <InputAdornment position="start">
          <IconButton onClick={handlePasswordVisibility}>
            {passwordVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButton>
        </InputAdornment>
      ),
    },
  } : {};

  return (
    <TextField
      name={name}
      fullWidth
      defaultValue={defaultValue}
      label={label}
      placeholder={placeholder}
      onChange={onChange}
      variant="outlined"
      error={error}
      helperText={helperText}
      type={textfieldType}
      slotProps={slotProps}
    />
  );
}

export default TextFieldUno;
