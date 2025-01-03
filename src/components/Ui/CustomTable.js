import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState, useEffect } from "react";
import { CustomButton } from "./Button";
import { CustomSnackbar } from "./Snackbar";

export const CustomTable = ({ data, columns, onEdit, onDelete }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("");

  useEffect(() => {
    if (snackbarMessage) {
      setSnackbarOpen(true);
    }
  }, [snackbarMessage]);

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
    setSnackbarMessage("");
  };

  const handleClick = (selectedRowIndex, action) => {
    if (action === "edit") {
      onEdit(selectedRowIndex);
      setSnackbarMessage("Update student information");
      setSnackbarSeverity("info");
    } else if (action === "delete") {
      onDelete(selectedRowIndex);
      setSnackbarMessage("Student deleted successfully!");
      setSnackbarSeverity("error");
    }
  };

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.field}
                sx={{ width: column.width || "auto" }}
              >
                {column.label}
              </TableCell>
            ))}
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((column) => (
                <TableCell
                  key={column.field}
                  sx={{ width: column.width || "auto" }}
                >
                  {Array.isArray(row[column.field])
                    ? row[column.field].join(", ")
                    : row[column.field]}
                </TableCell>
              ))}
              <TableCell
                sx={{
                  width: "auto",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <CustomButton
                  variant="contained"
                  onClick={() => handleClick(rowIndex, "edit")}
                  sx={{ mr: 1 }}
                >
                  Edit
                </CustomButton>
                <CustomButton
                  variant="outlined"
                  onClick={() => handleClick(rowIndex, "delete")}
                >
                  Delete
                </CustomButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <CustomSnackbar
        open={snackbarOpen}
        message={snackbarMessage}
        severity={snackbarSeverity}
        onClose={handleSnackbarClose}
      />
    </>
  );
};
