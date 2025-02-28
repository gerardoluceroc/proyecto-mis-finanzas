import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';

const TextFieldUno = ({ 
  label = "Movies",
  placeholder = "Search for movies",
  width = "100%",
  onChange = () => {},  // Event handler for onChange event,
  defaultValue = ""

}) => {

  return (
    <TextField
    defaultValue={defaultValue}
    label={label}
    placeholder={placeholder}
    onChange={onChange}
    variant="outlined"
    width={width}
    />

  )
}

export default TextFieldUno;