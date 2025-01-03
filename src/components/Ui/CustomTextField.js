import { Box, Typography, TextField } from "@mui/material";

export const CustomTextField = ({
  label,
  name,
  value,
  onChange,
  fullWidth = true,
  margin = "normal",
  size = "small",
  variant = "standard",
  sx = {},
  labelStyle = {},
}) => {
  return (
    <Box sx={{ mb: 2 }}>
      {label && (
        <Typography variant="subtitle2" component="label" style={labelStyle}>
          {label}
        </Typography>
      )}
      <TextField
        name={name}
        value={value}
        onChange={onChange}
        fullWidth={fullWidth}
        margin={margin}
        size={size}
        variant={variant}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
          },
          marginTop: 0,
          ...sx,
        }}
      />
    </Box>
  );
};
