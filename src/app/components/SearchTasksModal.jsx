"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton, InputBase, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ViewDayOutlinedIcon from "@mui/icons-material/ViewDayOutlined";
import ViewListOutlinedIcon from "@mui/icons-material/ViewListOutlined";
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import List from "@mui/material/List";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Image from "next/image";
import notFoundTasks from "../../assets/notfoundtasks.png";

const tasks = [
  {
    id: 1,
    title: "Meeting with John",
    status: "Todo",
    workSpace: "Danny Workspace",
    icon: <DescriptionOutlinedIcon />,
    createdAt: new Date("2022-01-15T14:00:00"),
    updatedAt: new Date("2022-01-15T14:00:00"),
  },
  {
    id: 2,
    title: "Meeting with John",
    status: "Todo",
    workSpace: "Danny Workspace",
    icon: <TaskAltIcon />,
    createdAt: new Date("2022-01-15T14:00:00"),
    updatedAt: new Date("2022-01-15T14:00:00"),
  },
];

const tabs = [
  {
    label: "All",
    icon: <ViewDayOutlinedIcon />,
  },
  {
    label: "Task",
    icon: <ViewListOutlinedIcon />,
  },
  {
    label: "Contacts",
    icon: <PeopleOutlineOutlinedIcon />,
  },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  height: 550,
  bgcolor: "background.paper",
  boxShadow: 24,
  // p: 2,
  borderRadius: "1rem",
};

function CustomTabPanel(props) {
  const { children, value, index } = props;
  return (
    <div>{value === index && <Box sx={{ px: 2, py: 1 }}>{children}</Box>}</div>
  );
}

const SearchTasksModal = () => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(1);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Button
        variant="text"
        size="small"
        startIcon={<SearchOutlinedIcon />}
        color="inherit"
        onClick={handleOpen}
        style={{
          textTransform: "none",
        }}
      >
        Search
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Stack direction={"column"} gap={1}>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              sx={{ pt: 1, px: 1 }}
            >
              <IconButton>
                <SearchIcon />
              </IconButton>
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search..." />
              <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
            </Stack>
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{ borderBottom: 1, borderTop: 1, borderColor: "#F0F1F2" }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  style={{
                    height: "3.5rem",
                  }}
                >
                  {tabs.map((tab, i) => (
                    <Tab
                      key={i}
                      label={tab.label}
                      iconPosition="start"
                      icon={tab.icon}
                      style={{
                        textTransform: "none",
                        color: "black",
                      }}
                    />
                  ))}
                </Tabs>
              </Box>
              <CustomTabPanel value={value} index={0}>
                All
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <List
                  sx={{
                    width: "100%",
                    bgcolor: "background.paper",
                  }}
                >
                  {tasks.length === 0 ? (
                    <Stack justifyContent={'center'} alignItems={'center'}>
                       <Image src={notFoundTasks} alt="Tez Minds Logo" className="py-4"/>
                      <Typography variant="subtitle2">
                        No results found
                      </Typography>
                      <Typography variant="caption" style={{color:"#C1C1C1"}}>
                        Try using different keywords
                      </Typography>
                    </Stack>
                  ) : (
                    tasks.map((item, i) => (
                      <Stack
                        key={i}
                        alignItems="center"
                        direction={"row"}
                        gap={2}
                        className="p-2 rounded hover:bg-[#F0F1F2] cursor-pointer w-full"
                      >
                        {item.icon || <TaskAltIcon />}
                        <Stack>
                          <Typography>{"tezminds_logo.png"}</Typography>
                          <Stack direction={"row"} gap={2}>
                            <Typography variant="caption">
                              {item.status}
                            </Typography>
                            <Typography variant="caption">
                              {item.workSpace}
                            </Typography>
                            <Typography variant="caption">
                              {item.updatedAt
                                ? `Updated at ${item.updatedAt.toDateString()}`
                                : `Created at ${item.createdAt.toDateString()}`}
                            </Typography>
                          </Stack>
                        </Stack>
                      </Stack>
                    ))
                  )}
                </List>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                Contacts
              </CustomTabPanel>
            </Box>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default SearchTasksModal;
