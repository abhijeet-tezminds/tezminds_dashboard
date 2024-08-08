"use client";

import * as React from "react";
import {
  Button,
  Chip,
  InputBase,
  Popover,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";

const constantStatusList = [
  {
    label: "Todo",
    color: "gray",
  },
  {
    label: "In Progress",
    color: "red",
  },
  {
    label: "Done",
    color: "green",
  },
];

const StatusPopup = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [statusList, setStatusList] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedValue, setSelectedValue] = React.useState("Task");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStatusChange = (status) => {
    setSelectedValue(status);
  };

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setSearchQuery(searchQuery);
  };

  const getStatus = () => {
    setStatusList(
      constantStatusList.filter((t) =>
        t.label.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
      )
    );
  };

  React.useEffect(() => {
    const getData = setTimeout(() => {
      getStatus();
    }, 500);
    return () => clearTimeout(getData);
  }, [searchQuery]);

  return (
    <>
      <Stack
        direction={"column"}
        style={{ cursor: "pointer" }}
        onClick={handleClick}
      >
        <Typography style={{ fontSize: "12px" }}>Status</Typography>
        <Chip
          label="Todo"
          size="small"
          deleteIcon={<ExpandMoreIcon />}
          //   onDelete={handleClick}
          style={{ background: "white" }}
          icon={<ExpandMoreIcon />}
        />
      </Stack>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Stack style={{ minHeight: "200px", width: "206px" }}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            sx={{ pt: 1, px: 1 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Statuses..."
              onChange={handleSearch}
              style={{ fontSize: "14px" }}
            />
            <CloseIcon
              fontSize="small"
              onClick={handleClose}
              sx={{ cursor: "pointer" }}
            />
          </Stack>
          <Stack sx={{ borderBottom: 1, borderTop: 1, borderColor: "#F0F1F2" }}>
            {statusList.map((status, i) => (
              <Stack key={i} direction={"row"} alignItems={"center"} style={{cursor:"pointer"}} onClick={()=>handleStatusChange(status.label)}>
                <Radio
                  size="small"
                  checked={selectedValue === status.label}
                  value={status.label}
                  style={{ color: status.color }}
                />
                <Typography style={{ fontSize: "14px" }}>
                  {status.label}
                </Typography>
              </Stack>
            ))}
          </Stack>
          <div className="p-2">
            <Button
              size="small"
              variant="contained"
              color="primary"
              style={{ textTransform: "none" }}
            >
              Create New
            </Button>
          </div>
        </Stack>
      </Popover>
    </>
  );
};

export default StatusPopup;
