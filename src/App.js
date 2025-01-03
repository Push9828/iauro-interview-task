import { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { StudentForm } from "./components/StudentForm";
import { CustomTable } from "./components/Ui";

const columns = [
  { field: "name", label: "Name", width: "12%" },
  { field: "gender", label: "Gender", width: "5%" },
  { field: "class", label: "Class", width: "5%" },
  { field: "streams", label: "Stream", width: "10%" },
  { field: "subjects", label: "Subjects", width: "10%" },
  { field: "modeOfTransport", label: "Mode of Transport", width: "14%" },
  { field: "preferredLanguage", label: "Preferred Language", width: "15%" },
  { field: "boardingType", label: "Boarding Type", width: "10%" },
];

const App = () => {
  const [students, setStudents] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const addStudent = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  const handleDelete = (index) => {
    setStudents((prev) => prev.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
  };

  const handleSaveEdit = (updatedStudent, index) => {
    const updatedStudents = students.map((student, i) =>
      i === index ? updatedStudent : student
    );
    setStudents(updatedStudents);
    setEditingIndex(null);
  };

  return (
    <Container sx={{ mt: "0rem" }}>
      <StudentForm
        addStudent={addStudent}
        handleSaveEdit={handleSaveEdit}
        editingIndex={editingIndex}
        studentToEdit={students[editingIndex]}
      />
      {students.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Student Details
          </Typography>
          <CustomTable
            data={students}
            columns={columns}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        </Box>
      )}
    </Container>
  );
};

export default App;
