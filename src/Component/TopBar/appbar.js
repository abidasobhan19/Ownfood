import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  TextField,
  Typography,
  List,
  Toolbar,
  CssBaseline,
  Drawer,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItem,
  InputAdornment,
  Paper,
  InputBase,
  Divider,
} from "@mui/material/";

import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";
import MuiAppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MenuIcon from "@mui/icons-material/Menu";
import InboxIcon from "@mui/icons-material/Inbox";

import MySlider from "../Slider/slider";
import Logo from "../../assets/img/Logo.png";
import { grey } from "@mui/material/colors";
import { Search, SearchIconWrapper, StyledInputBase } from "./external";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./topbar.css";
import Custom_Search from "../Search_Bar_OnSlider/custom_Search";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    // flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      // marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const sopen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="static"
        elevation={2}
        open={open}
        style={{
          backgroundColor: "#ffffff",
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <Toolbar>
          <img
            src={Logo}
            alt="Logo"
            style={{ height: 100, width: 150, padding: 10 }}
          />

          <IconButton color="#0277bd" aria-label="open drawer" edge="start">
            <MenuIcon />
          </IconButton>

          <Paper
            elevation={2}
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 120,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Zip Code"
              inputProps={{ "aria-label": "Zip Code" }}
            />
            <IconButton
              color="primary"
              sx={{ p: "10px" }}
              aria-label="directions"
            >
              <LocationOnIcon />
            </IconButton>
          </Paper>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <Paper
            elevation={2}
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 250,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ "aria-label": "Search " }}
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>

          <Box display="flex" flexDirection="row" style={{ marginLeft: 20 }}>
            <button class="Nav">Earn Money </button>
            <div class="dropdown">
              <button class="Nav">Dropdown </button>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
            <button class="Nav">Catering</button>
            <button class="Nav">Faq</button>
            <button class="Nav">Blog</button>

            <Box
              class="auth"
              display="flex"
              flexDirection="row"
              style={{ marginLeft: 50 }}
            >
              <button class="SignUp">
                <i class="fa fa-sign-in"></i> Open Your Account
              </button>

              <Button
                class="SignUp"
                style={{ backgroundColor: "#2d70d4", color: "#FFFFFF" }}
              >
                <i class="fa fa-user-o" aria-hidden="true"></i> Login
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      <Main open={open}>
        {/* <Box style={{ width: "100%", height: "100vh" }}>
          <MySlider />
        </Box> */}
      </Main>
    </Box>
  );
}
