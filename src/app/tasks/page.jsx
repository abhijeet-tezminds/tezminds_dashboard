"use client";

import React from "react";
import { Button, Chip, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ViewDayOutlinedIcon from "@mui/icons-material/ViewDayOutlined";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";
import TableList from "../components/TableList";
import { profileImgUrl } from "../../constants";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddTaskModal from "../components/AddTaskModal";
import SearchTasksModal from "../components/SearchTasksModal";

function createData(id, taskName, status, tags, members, dueDates) {
  return {
    id,
    taskName,
    status,
    tags,
    members,
    dueDates,
  };
}

const rows = [
  createData(1, "Cupcake", "", "", "", ""),
  createData(
    2,
    "Donut",
    "Done",
    [{ tagName: "Done", color: "#3CD987" }],
    "",
    "16 Dec"
  ),
  createData(
    3,
    "Eclair",
    "Done",
    [{ tagName: "Review", color: "#E98741" }],
    "",
    "15 Dec"
  ),
  createData(
    4,
    "Frozen yoghurt",
    "Todo",
    [
      { tagName: "Discuss", color: "#818181" },
      { tagName: "Blocker", color: "#E9414B" },
    ],
    profileImgUrl,
    "15 Dec"
  ),
  createData(5, "Gingerbread", "Todo", null, profileImgUrl, ""),
  createData(6, "Honeycomb", "Todo", null, profileImgUrl, ""),
  createData(7, "Ice cream sandwich", "Todo", null, profileImgUrl, ""),
  createData(8, "Jelly Bean", "Todo", null, profileImgUrl, ""),
  createData(9, "KitKat", "Todo", null, profileImgUrl, ""),
  createData(10, "Lollipop", "Todo", null, profileImgUrl, ""),
  createData(11, "Marshmallow", "Todo", null, profileImgUrl, ""),
  createData(12, "Nougat", "Todo", null, profileImgUrl, ""),
  createData(13, "Oreo", "Todo", null, profileImgUrl, ""),
];

const page = () => {
  return (
    <div className="w-full py-4">
      <Typography className="text-3xl">Tasks</Typography>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
        style={{
          color: "black",
          background: "#fff",
          borderRadius: "16px",
          padding: "2px 8px",
          margin: "1rem 0",
          maxHeight: "42px",
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center" gap={2}>
          <AddTaskModal />
          <Chip
            label="Danny Workspace"
            size="small"
            deleteIcon={<ExpandMoreIcon />}
            onDelete={() => {}}
            // icon={<DoneIcon />}
          />
          <Button
            variant="text"
            size="small"
            startIcon={<ViewDayOutlinedIcon />}
            color="inherit"
          >
            Board
          </Button>
          <Button
            variant="text"
            size="small"
            startIcon={<ViewListOutlinedIcon />}
            color="inherit"
            style={{
              textTransform: "none",
              borderBottom: "3px solid #0064D9",
              borderRadius: "0",
              paddingRight: "1rem",
              paddingLeft: "1rem",
            }}
          >
            Table
          </Button>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center" gap={2}>
          <SearchTasksModal />
          <Button
            variant="text"
            size="small"
            startIcon={<FilterListOutlinedIcon />}
            color="inherit"
            style={{
              textTransform: "none",
            }}
          >
            Filters
          </Button>
        </Stack>
      </Stack>
      <TableList rows={rows} />
    </div>
  );
};

export default page;
