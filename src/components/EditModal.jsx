import { Box, Button, Modal } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";
import useCall from "../hooks/useCall";

const EditModal = ({
  editOpen,
  setEditOpen,
  selectedRow,
  setSelectedRow,
  newRow,
  setNewRow,
}) => {
  const { handleEdit, handleAdd } = useCall();

  //!  input değişimi
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    selectedRow && setSelectedRow({ ...selectedRow, [name]: value });
    newRow && setNewRow({ [name]: value });
  };

  //!  Submit ile PUT mu POST'mu yapılacak.
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditOpen(false);
    if (selectedRow) {
      handleEdit(selectedRow);
    } else {
      handleAdd(newRow);
    }
    setSelectedRow([]);
    setNewRow([]);
  };

  //!  Modal'İ kapat
  const handleEditClose = () => {
    setSelectedRow([]);
    setNewRow([]);

    setEditOpen(false);
  };

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      {/* Edit Modal */}
      <Modal open={editOpen} onClose={handleEditClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            minWidth: 400,
          }}
        >
          <form onSubmit={handleSubmit}>
            <TextField
              id="name"
              fullWidth
              label="Name"
              variant="outlined"
              name="firstName"
              value={
                selectedRow
                  ? selectedRow?.firstName || ""
                  : newRow?.firstName || ""
              }
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              value={
                selectedRow ? selectedRow?.email || "" : newRow?.email || ""
              }
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Phone"
              variant="outlined"
              name="phone"
              value={
                selectedRow ? selectedRow?.phone || "" : newRow?.phone || ""
              }
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Website"
              variant="outlined"
              onChange={handleChange}
              name="domain"
              value={
                selectedRow ? selectedRow?.domain || "" : newRow?.domain || ""
              }
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Company Name"
              variant="outlined"
              name="companyName"
              value={
                selectedRow
                  ? selectedRow?.companyName || ""
                  : newRow?.companyName || ""
              }
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" sx={{ mt: 2 }}>
              {selectedRow ? "Güncelle" : "Kaydet"}
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};

export default EditModal;
