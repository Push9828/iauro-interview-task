import { useState } from "react";
import { StudentForm } from "./components/StudentForm";
import { Container } from "@mui/material";

const App = () => {
  const [students, setStudents] = useState([]);

  console.log(students);

  const addStudent = (student) => {
    setStudents((prev) => [...prev, student]);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <StudentForm addStudent={addStudent} />
    </Container>
  );
};

export default App;
