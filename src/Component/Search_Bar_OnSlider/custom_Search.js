import React, { useEffect } from "react";
import { Box, Paper, IconButton, InputBase, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LanguageIcon from "@mui/icons-material/Language";
import "./custom_search.css";
const Custom_Search = () => {
  return (
    <Box className="searchBox">
      <Box display="flex" flexDirection="row">
        {/* <Paper
          style={{ marginLeft: "2%", marginTop: 27 }}
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 150,
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

        <Paper
          style={{ marginTop: 27 }}
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 700,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "Search" }}
          />
          <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
          >
            <LanguageIcon />
          </IconButton>
        </Paper>
        <Button
          variant="contained"
          style={{ marginLeft: "1%", width: 100, marginTop: 27 }}
        >
          Search
        </Button> */}

        <div
          className="d-flex justify-content-center align-items-end "
          style={{ width: "95%", marginLeft: 25, marginTop: 25 }}
        >
          <form className="zip-form">
            <input
              type="text"
              placeholder="Zip Code  "
              style={{ width: "50%" }}
            />

            <button>
              <i class="fas thin fa-location-crosshairs"></i>
            </button>

            <input
              type="text"
              placeholder="Search anything..."
              style={{ width: "100%" }}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </form>
          <Button
            variant="contained"
            style={{ marginLeft: "1%", width: 100, height: 43 }}
          >
            Search
          </Button>
          {/* <form className="header-form "></form> */}
        </div>
      </Box>
    </Box>
  );
};

export default Custom_Search;
