import { Button } from "@mui/material";

const ButtonTypeOne = ({
    handleClick = () => {},  // Event handler for onClick event,
    text = "Click here",
    backgroundColor = "#175676",
    letterColor = "#FFF",
    backgroundColorHover = "#1F7098",
    letterColorHover = "#B7CBD5",
    fontSize = "16px",
    fontStyle = "normal",
    fontWeight = 500,
    lineHeight = "24px",
    letterSpacing = "0.15px",
    textTransform = "none",
    loading = false,
    loadingPosition = "end"
}) => {
  return (
    <Button
        // id="BotonTipo1"
        fullWidth
        // type="submit"
        onClick={handleClick}
        loading={loading}
        loadingPosition={loadingPosition}
        sx={{
        borderRadius: '100px',
        boxShadow: '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
        height: '100%',
        color: letterColor,
        background: backgroundColor,
        textAlign: 'center',
        fontSize: fontSize,
        fontStyle: fontStyle,
        fontWeight: fontWeight,
        lineHeight: lineHeight,
        letterSpacing: letterSpacing,
        textTransform: textTransform,
        '&:hover': {  // Aquí se define el estilo del hover
            background: backgroundColorHover,
            color: letterColorHover,
            boxShadow: '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
        },
        }}
    >
        {text}
    </Button>
  )
}

export default ButtonTypeOne;