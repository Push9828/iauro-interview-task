import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { CustomButton } from "./Button";

export const CustomTable = ({ data, columns, onEdit, onDelete }) => {
  return (
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
                onClick={() => onEdit(rowIndex)}
                sx={{ mr: 1 }}
              >
                Edit
              </CustomButton>
              <CustomButton
                variant="outlined"
                onClick={() => onDelete(rowIndex)}
              >
                Delete
              </CustomButton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
