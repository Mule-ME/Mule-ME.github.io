import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  InputBase,
  Box,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { Mail, Notifications, QuestionAnswer } from "@mui/icons-material";
import profilePic from "../assets/mule.jpg";

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  // backgroundColor: theme.palette.primary.light,
}));
const Search = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  alignItems: "center",
  gap: "20px",
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Let's chat
        </Typography>
        <QuestionAnswer sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons sx={{ display: { xs: "none", sm: "flex" } }}>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ width: 40, height: 40 }} src={profilePic} />
        </Icons>
        <UserBox
          onClick={(e) => setOpen(true)}
          sx={{ display: { xs: "flex", sm: "none" } }}
        >
          <Avatar sx={{ width: 40, height: 40 }} src={profilePic} />
          <Typography variant="span">Mule</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id="menu"
        arial-labelledby="menu-test-mui-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={(e) => setOpen(false)}>Profile</MenuItem>
        <MenuItem onClick={(e) => setOpen(false)}>My account</MenuItem>
        <MenuItem onClick={(e) => setOpen(false)}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default NavBar;
