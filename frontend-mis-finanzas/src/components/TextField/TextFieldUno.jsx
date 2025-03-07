import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';

const TextFieldUno = ({ 
  label = "Movies",
  placeholder = "Search for movies",
  onChange = () => {},  // Event handler for onChange event,
  defaultValue = "",
  error = false,
  helperText = "",
  type = "text",
  name = ""

}) => {

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
    type={type}
    />

  )
}

export default TextFieldUno;