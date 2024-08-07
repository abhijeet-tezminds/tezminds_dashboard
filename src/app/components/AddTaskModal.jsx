"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import { Avatar, Chip, InputBase, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AttachmentIcon from '@mui/icons-material/Attachment';

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
          <Stack direction={"column"}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              sx={{ borderBottom: "1px solid #EDEDED" }}
            >
              <Typography variant="h6">Add Task</Typography>
              <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
            </Stack>
            <div>
              <Chip
                label="Danny Workspace"
                size="small"
                deleteIcon={<ExpandMoreIcon />}
                onDelete={() => {}}
                // icon={<DoneIcon />}
              />
            </div>
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Write a task name"
            />
            <Stack
              direction={"row"}
              gap={3}
              style={{
                background: "#F0F1F2",
                borderRadius: "16px",
                padding: "1rem",
              }}
            >
              <Stack direction={"column"}>
                <Typography>Status</Typography>
                <Chip
                  label="Todo"
                  size="small"
                  deleteIcon={<ExpandMoreIcon />}
                  onDelete={() => {}}
                  style={{ background: "white" }}
                  // icon={<DoneIcon />}
                />
              </Stack>
              <Stack>
                <Typography>Members</Typography>
                <PermIdentityIcon
                  style={{
                    border: "1px dotted #C1C1C1",
                    borderRadius: "50%",
                    width: "24px",
                    height: "24px",
                  }}
                />
              </Stack>
              <Stack>
                <Typography>Tags</Typography>
                <AddIcon
                  style={{
                    border: "1px dotted #C1C1C1",
                    borderRadius: "50%",
                    width: "24px",
                    height: "24px",
                  }}
                />
              </Stack>
              <Stack>
                <Typography>Due Date</Typography>
                <DateRangeIcon
                  style={{
                    border: "1px dotted #C1C1C1",
                    borderRadius: "50%",
                    width: "24px",
                    height: "24px",
                  }}
                />
              </Stack>
            </Stack>
            <Typography>Description</Typography>
            <textarea
              rows={5}
              cols={30}
              style={{ border: "1px solid #F0F1F2", borderRadius: "4px" }}
            />
            <Stack direction={"row"} justifyContent={'end'}>
              <AttachmentIcon />
              <Button variant="contained" color="primary">
                Create Task
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default AddTaskModal;
