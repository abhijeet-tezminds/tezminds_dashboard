"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import { Chip, InputBase, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "1rem",
};

const AddTaskModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button
        variant="text"
        size="small"
        startIcon={<AddIcon />}
        // color="inherit"
        onClick={handleOpen}
        style={{
          textTransform: "none",
        }}
      >
        Add Task
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            sx={{ borderBottom: "1px solid #EDEDED" }}
          >
            <Typography variant="h6">Add Task</Typography>
            <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
          </Stack>
          <Chip
            label="Danny Workspace"
            size="small"
            deleteIcon={<ExpandMoreIcon />}
            onDelete={() => {}}
            // icon={<DoneIcon />}
          />
          <br />
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Write a task name"
            inputProps={{ "aria-label": "search google maps" }}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default AddTaskModal;
