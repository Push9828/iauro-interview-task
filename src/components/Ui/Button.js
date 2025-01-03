import React from "react";
import { Button } from "@mui/material";

export const CustomButton = ({
  children,
  variant = "contained",
  color = "primary",
  fullWidth = false,
  type = "button",
  sx = {},
  onClick,
}) => {
  const baseStyles = {
    contained: {
      backgroundColor: "#000000",
      color: "#ffffff",
      "&:hover": {
        backgroundColor: "#333333",
      },
    },
    outlined: {
      backgroundColor: "transparent",
      color: "#000000",
      border: "1px solid #000000",
      "&:hover": {
        backgroundColor: "#f5f5f5",
      },
    },
    text: {
      backgroundColor: "transparent",
      color: "#000000",
      "&:hover": {
        backgroundColor: "#e0e0e0",
      },
    },
  };

  return (
    <Button
      variant={variant}
      color={color}
      type={type}
      fullWidth={fullWidth}
      onClick={onClick}
      sx={{
        mt: 3,
        fontSize: "0.875rem",
        textTransform: "none",
        borderRadius: 2,
        ...baseStyles[variant],
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};
