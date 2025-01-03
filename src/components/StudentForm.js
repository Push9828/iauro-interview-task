import { useState, useEffect } from "react";
import {
  CustomTextField,
  CustomRadioGroup,
  CustomButton,
  CustomSelect,
  CustomSnackbar,
} from "./Ui";
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  Autocomplete,
  TextField,
} from "@mui/material";

const subjectsList = ["Math", "Science", "English", "History"];
const languagesList = ["English", "Hindi", "French", "Spanish", "German"];
const transportOptions = ["School Bus", "Own Transport", "Other"];

export const StudentForm = ({
  addStudent,
  handleSaveEdit,
  editingIndex,
  studentToEdit,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    class: "",
    streams: "",
    subjects: [],
    modeOfTransport: "",
    preferredLanguage: [],
    boardingType: "",
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("");

  useEffect(() => {
    if (editingIndex !== null && studentToEdit) {
      setFormData({ ...studentToEdit });
    }
  }, [editingIndex, studentToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubjectsChange = (event, value) => {
    setFormData((prev) => ({ ...prev, subjects: value }));
  };

  const handlePreferredLanguageChange = (event, language) => {
    const { checked } = event.target;

    setFormData((prev) => {
      let updatedLanguages = [...prev.preferredLanguage];
      if (checked) {
        updatedLanguages.push(language);
      } else {
        updatedLanguages = updatedLanguages.filter((lang) => lang !== language);
      }
      return { ...prev, preferredLanguage: updatedLanguages };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      handleSaveEdit(formData, editingIndex);
      setSnackbarMessage("Student information updated successfully!");
      setSnackbarSeverity("success");
    } else {
      addStudent(formData);
      setSnackbarMessage("New student added successfully!");
      setSnackbarSeverity("success");
    }
    setSnackbarOpen(true);

    setFormData({
      name: "",
      gender: "",
      class: "",
      streams: "",
      subjects: [],
      modeOfTransport: "",
      preferredLanguage: [],
      boardingType: "",
    });
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box
      sx={{
        py: 3,
        px: 4,
        maxWidth: 500,
        mx: "auto",
        mt: 1,
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: 3,
        backgroundColor: "#fff",
      }}
    >
      <Typography
        variant="h5"
        sx={{ textAlign: "center", mb: 3, color: "#333" }}
      >
        Student Registration Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <CustomTextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <Box sx={{ mb: 2 }}>
          <CustomRadioGroup
            label="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            options={[
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
            ]}
            row={true}
          />
        </Box>

        <CustomTextField
          label="Class"
          name="class"
          value={formData.class}
          onChange={handleChange}
        />

        <Box sx={{ mt: 2 }}>
          <CustomRadioGroup
            label="Stream"
            name="streams"
            value={formData.streams}
            onChange={handleChange}
            options={[
              { value: "Science", label: "Science" },
              { value: "Commerce", label: "Commerce" },
              { value: "Arts", label: "Arts" },
            ]}
            row={true}
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle2" component="label">
            Subjects
          </Typography>
          <Autocomplete
            multiple
            options={subjectsList}
            value={formData.subjects}
            onChange={handleSubjectsChange}
            renderInput={(params) => (
              <TextField {...params} size="small" variant="standard" />
            )}
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <CustomSelect
            label="Mode of Transport"
            name="modeOfTransport"
            value={formData.modeOfTransport}
            onChange={handleChange}
            options={transportOptions}
          />
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography
            variant="subtitle2"
            component="label"
            sx={{ display: "block" }}
          >
            Preferred Language
          </Typography>
          {languagesList.map((language) => (
            <FormControlLabel
              key={language}
              control={
                <Checkbox
                  checked={formData.preferredLanguage.includes(language)}
                  onChange={(e) => handlePreferredLanguageChange(e, language)}
                  name={language}
                  color="default"
                  size="small"
                />
              }
              label={language}
            />
          ))}
        </Box>

        <Box sx={{ mt: 2 }}>
          <CustomRadioGroup
            label="Boarding Type"
            name="boardingType"
            value={formData.boardingType}
            onChange={handleChange}
            options={[
              { value: "Day Scholar", label: "Day Scholar" },
              { value: "Hosteller", label: "Hosteller" },
            ]}
            row={true}
          />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <CustomButton type="submit">
            {editingIndex !== null ? "Save" : "Submit"}
          </CustomButton>
        </Box>
      </form>
      <CustomSnackbar
        open={snackbarOpen}
        message={snackbarMessage}
        severity={snackbarSeverity}
        onClose={handleSnackbarClose}
      />
    </Box>
  );
};
