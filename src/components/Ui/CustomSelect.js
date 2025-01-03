import React from "react";
import { FormControl, Select, MenuItem, Typography } from "@mui/material";

export const CustomSelect = ({
  label,
  name,
  value,
  onChange,
  options,
  fullWidth = true,
}) => {
  return (
    <FormControl variant="standard" fullWidth={fullWidth}>
      <Typography variant="subtitle2" component="label">
        {label}
      </Typography>
      <Select
        labelId={`${name}-label`}
        name={name}
        value={value}
        onChange={onChange}
        sx={{
          marginTop: "0 !important",
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
