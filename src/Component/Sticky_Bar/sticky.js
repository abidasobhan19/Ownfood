import React from "react";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import LocalMallIcon from "@mui/icons-material/LocalMall";
const StickyBar = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      // justifyContent="center"
      style={{ width: "100%", height: 50, marginTop: 10 }}
    >
      <Box display="flex" flexDirection="row" style={{ marginLeft: 70 }}>
        <Box display="flex" flexDirection="row" justifyContent="space-evenly">
          <LocationOnIcon color="primary" style={{ marginTop: 5 }} />
          <Typography variant="caption" style={{ padding: 5, margin: 4 }}>
            900 Lucerne Terrace, Orlando, FL 32806
          </Typography>
        </Box>
        <Box display="flex" flex flexDirection="row">
          <WifiCalling3Icon color="primary" style={{ marginTop: 5 }} />
          <Typography variant="button" style={{ padding: 2, margin: 4 }}>
            +49260-5731-08
          </Typography>
        </Box>
        <Box display="flex" flex flexDirection="row">
          <EmailIcon color="primary" style={{ marginTop: 5 }} />
          <Typography variant="caption" style={{ padding: 2, margin: 4 }}>
            support@fitmeal.us
          </Typography>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        style={{ marginLeft: "47%" }}
      >
        {/* <PersonIcon color="primary" style={{ margin: 4 }} /> */}
        <LocalMallIcon color="primary" style={{ margin: 4 }} />
      </Box>
    </Box>
  );
};

export default StickyBar;
