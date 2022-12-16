import React from "react";
import { Box, Typography, Grid, Paper, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import Earn from "../../assets/img/earn.png";
import RoundPlate from "../../assets/img/plate_rounded.jpg";

import "./earn_money.css";
const Earn_money = () => {
  return (
    <Box style={{ height: 500, backgroundColor: "#ffffff", padding: 10 }}>
      <Box display="flex" justifyContent="center">
        <Typography style={{ marginTop: 40 }} variant="h3">
          Earn Money With Us
        </Typography>
      </Box>

      <Box
        display="flex"
        // justifyContent="center"
        style={{ marginTop: 60, backgroundColor: "#ffffff" }}
      >
        <Grid
          container
          rowSpacing={4}
          columnSpacing={{ xs: 4, sm: 8, md: 4 }}
          style={{ borderRadius: 5 }}
        >
          <Grid
            style={{
              height: 200,
              width: 300,

              color: "#2d70d4",
              padding: 10,
            }}
            xs={2.4}
          >
            <Box style={{ width: 300, height: 350 }}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <img
                  src={Earn}
                  style={{
                    height: 100,
                    width: 100,
                    marginLeft: 100,
                    marginTop: 30,
                  }}
                />
                <div
                  display="flex"
                  justifyContent="center"
                  style={{ marginTop: 20, marginLeft: "20%" }}
                >
                  <Typography fontSize={20} fontWeight="bold">
                    {" "}
                    Instant Food Sell
                  </Typography>
                </div>
                <div style={{ marginLeft: "15%" }}>
                  <Typography
                    fontSize={18}
                    alignItems="center"
                    fontFamily="'Open Sans',sans-serif;"
                  >
                    Nam malesuada eros nec luctus laoreet
                  </Typography>
                  <Typography alignItems="center">
                    {" "}
                    fusce sodales consequat
                  </Typography>
                </div>
              </Box>
            </Box>
          </Grid>

          <Grid
            style={{
              height: 200,
              width: 300,

              color: "#2d70d4",
              padding: 10,
            }}
            xs={2.4}
          >
            <Box style={{ width: 300, height: 350 }}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <img
                  src={Earn}
                  style={{
                    height: 100,
                    width: 100,
                    marginLeft: 100,
                    marginTop: 30,
                  }}
                />
                <div
                  display="flex"
                  justifyContent="center"
                  style={{ marginTop: 20, marginLeft: "10%" }}
                >
                  <Typography fontSize={20} fontWeight="bold">
                    {" "}
                    Pre Oder Make own Menu
                  </Typography>
                </div>
                <div style={{ marginLeft: "10%" }}>
                  <Typography
                    fontSize={16}
                    alignItems="center"
                    fontFamily="'Open Sans',sans-serif;"
                  >
                    Nam malesuada eros nec luctus laoreet
                  </Typography>
                  <Typography alignItems="center">
                    {" "}
                    fusce sodales consequat
                  </Typography>
                </div>
              </Box>
            </Box>
          </Grid>

          <Grid
            style={{
              height: 200,
              width: 300,

              color: "#2d70d4",
              padding: 10,
            }}
            xs={2.4}
          >
            <Box style={{ width: 300, height: 350 }}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <img
                  src={Earn}
                  style={{
                    height: 100,
                    width: 100,
                    marginLeft: 100,
                    marginTop: 30,
                  }}
                />
                <div
                  display="flex"
                  justifyContent="center"
                  style={{ marginTop: 20, marginLeft: "18%" }}
                >
                  <Typography fontSize={20} fontWeight="bold">
                    {" "}
                    Cool and sell anything
                  </Typography>
                </div>
                <div style={{ marginLeft: "18%" }}>
                  <Typography
                    fontSize={16}
                    alignItems="center"
                    fontFamily="'Open Sans',sans-serif;"
                  >
                    Nam malesuada eros nec luctus laoreet
                  </Typography>
                  <Typography alignItems="center">
                    {" "}
                    fusce sodales consequat
                  </Typography>
                </div>
              </Box>
            </Box>
          </Grid>

          <Grid
            style={{
              height: 200,
              width: 300,

              color: "#2d70d4",
              padding: 10,
            }}
            xs={2.4}
          >
            <Box style={{ width: 300, height: 350 }}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <img
                  src={Earn}
                  style={{
                    height: 100,
                    width: 100,
                    marginLeft: 100,
                    marginTop: 30,
                  }}
                />
                <div
                  display="flex"
                  justifyContent="center"
                  style={{ marginTop: 20, marginLeft: "35%" }}
                >
                  <Typography fontSize={20} fontWeight="bold">
                    {" "}
                    Catering
                  </Typography>
                </div>
                <div style={{ marginLeft: "15%" }}>
                  <Typography
                    fontSize={14}
                    alignItems="center"
                    fontFamily="'Open Sans',sans-serif;"
                  >
                    Nam malesuada eros nec luctus laoreet
                  </Typography>
                  <Typography alignItems="center">
                    {" "}
                    fusce sodales consequat
                  </Typography>
                </div>
              </Box>
            </Box>
          </Grid>

          <Grid
            style={{
              height: 200,
              width: 300,

              color: "#2d70d4",
              padding: 10,
            }}
            xs={2.4}
          >
            <Box style={{ width: 300, height: 350 }}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
              >
                <img
                  src={Earn}
                  style={{
                    height: 100,
                    width: 100,
                    marginLeft: 100,
                    marginTop: 30,
                  }}
                />
                <div
                  display="flex"
                  justifyContent="center"
                  style={{ marginTop: 20, marginLeft: "45%" }}
                >
                  <Typography fontSize={20} fontWeight="bold">
                    {" "}
                    Blog
                  </Typography>
                </div>
                <div style={{ marginLeft: "15%" }}>
                  <Typography
                    fontSize={14}
                    alignItems="center"
                    fontFamily="'Open Sans',sans-serif;"
                  >
                    Nam malesuada eros nec luctus laoreet
                  </Typography>
                  <Typography alignItems="center">
                    {" "}
                    fusce sodales consequat
                  </Typography>
                </div>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Earn_money;
