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

const constantWorkSpaceList = [
  {
    label: "Danny Workspace",
    color: "gray",
  },
];

const WorkSpacePopup = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [workSpaceList, setWorkSpaceList] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setSearchQuery(searchQuery);
  };

  const getWorkSpace = () => {
    setWorkSpaceList(
      constantWorkSpaceList.filter((t) =>
        t.label.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
      )
    );
  };

  React.useEffect(() => {
    const getData = setTimeout(() => {
      getWorkSpace();
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
        <Chip
          label="Danny Workspace"
          size="small"
          deleteIcon={<ExpandMoreIcon />}
          onDelete={() => {}}
          // icon={<DoneIcon />}
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
        <Stack style={{ width: "206px" }}>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            sx={{ pt: 1, px: 1 }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Workspaces..."
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
            {workSpaceList.map((ws, i) => (
              <Stack key={i} direction={"row"} alignItems={"center"} className="p-2 m-2 rounded-lg bg-[#F0F1F2] cursor-pointer">
                <Typography style={{ fontSize: "14px" }}>{ws.label}</Typography>
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

export default WorkSpacePopup;
