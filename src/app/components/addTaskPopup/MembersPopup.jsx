"use client";

import * as React from "react";
import {
  Avatar,
  Button,
  Checkbox,
  Chip,
  InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Popover,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CloseIcon from "@mui/icons-material/Close";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { profileImgUrl } from "../../../constants";

const constantMembersList = [
  {
    name: "Danny",
    image: profileImgUrl,
  },
  {
    name: "Sam",
    image: profileImgUrl,
  },
];

const MembersPopup = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [membersList, setMembersList] = React.useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [checked, setChecked] = React.useState([1]);

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

  const getMembers = () => {
    setMembersList(
      constantMembersList.filter((t) =>
        t.name.toLocaleLowerCase().includes(searchQuery.toLocaleLowerCase())
      )
    );
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  React.useEffect(() => {
    const getData = setTimeout(() => {
      getMembers();
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
        <Typography style={{ fontSize: "12px" }}>Members</Typography>
        <PermIdentityIcon
          style={{
            border: "1px dotted #C1C1C1",
            borderRadius: "50%",
            width: "24px",
            height: "24px",
          }}
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
              placeholder="Search Members..."
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
            <List
              dense
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              {membersList.map((item, i) => {
                return (
                  <ListItem
                    key={i}
                    secondaryAction={
                      <Checkbox
                        edge="end"
                        onChange={handleToggle(item.name)}
                        checked={checked.indexOf(item.name) !== -1}
                      />
                    }
                    disablePadding
                  >
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      gap={1}
                      className="ml-4 m-1"
                    >
                      <Avatar src={item.image} sx={{ width: 22, height: 22 }} />
                      <Typography style={{ fontSize: "14px" }}>
                        {item.name}
                      </Typography>
                    </Stack>
                  </ListItem>
                );
              })}
            </List>
          </Stack>
        </Stack>
      </Popover>
    </>
  );
};

export default MembersPopup;
