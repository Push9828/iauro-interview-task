import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

export const CustomRadioGroup = ({
  label,
  name,
  value,
  onChange,
  options = [],
  row = false,
  labelStyle = {},
  radioLabelStyle = {},
}) => {
  return (
    <Box sx={{ mb: 2 }}>
      {label && (
        <Typography variant="subtitle2" component="label" style={labelStyle}>
          {label}
        </Typography>
      )}
      <RadioGroup name={name} value={value} onChange={onChange} row={row}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<Radio size="small" color="default" />}
            label={option.label}
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: "0.875rem",
                ...radioLabelStyle,
              },
            }}
          />
        ))}
      </RadioGroup>
    </Box>
  );
};
