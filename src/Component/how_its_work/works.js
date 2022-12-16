import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Arrow from "../../assets/img/arrow.png";
import "./work.css";
import BgImage from "../../assets/img/background_Image.jpg";
import { Parallax } from "react-parallax";
const Work = () => {
  return (
    <div style={{ padding: 10 }}>
      <Typography variant="h3" style={{ marginLeft: "42%", marginTop: -10 }}>
        {" "}
        How it Works
      </Typography>
      <Parallax
        blur={2}
        bgImage={BgImage}
        style={{ width: "100%", height: 480, opacity: 0.5 }}
        bgImageAlt="the cat"
        strength={10}
      >
        <div>
          <Box
            display="flex"
            flexDirection="row "
            justifyContent="center"
            style={{ padding: 10, marginTop: 50 }}
          >
            <Box
              style={{
                border: "1px solid #2d70d4",
                backgroundColor: "White",
                height: 250,
                width: 250,
                borderRadius: 5,
                zIndex: 1,
                position: "relative",
              }}
            >
              <Typography
                fontSize={24}
                alignItems="center"
                style={{ marginTop: "35%", marginLeft: 40, color: "blue" }}
              >
                Open Account
              </Typography>
              <Typography
                fontSize={24}
                alignItems="center"
                style={{ marginLeft: 20 }}
              >
                {" "}
                (Take Few Minute){" "}
              </Typography>
            </Box>
            <Box display="flex" flexDirection="column">
              <Box display="flex" flexDirection="row">
                <img
                  src={Arrow}
                  style={{
                    marginLeft: 10,
                    height: 20,
                    width: 50,
                    marginTop: 50,
                  }}
                />
                <Box
                  style={{
                    border: "1px solid #2d70d4",
                    height: 120,
                    width: 150,
                    borderRadius: 5,
                    backgroundColor: "White",
                    marginLeft: 10,
                  }}
                >
                  <Typography
                    fontSize={20}
                    alignItems="center"
                    style={{ marginTop: "20%", marginLeft: "10%" }}
                  >
                    Order Your Food
                  </Typography>
                </Box>
                <img
                  src={Arrow}
                  style={{
                    marginLeft: 10,
                    height: 20,
                    width: 50,
                    marginTop: 50,
                  }}
                />
                <Box
                  style={{
                    border: "1px solid #2d70d4",
                    height: 120,
                    width: 150,
                    borderRadius: 5,
                    backgroundColor: "White",
                    marginLeft: 10,
                  }}
                >
                  <Typography
                    fontSize={20}
                    alignItems="center"
                    style={{ marginTop: "30%", marginLeft: "30%" }}
                  >
                    Pay
                  </Typography>
                </Box>{" "}
                <img
                  src={Arrow}
                  style={{
                    marginLeft: 10,
                    height: 20,
                    width: 50,
                    marginTop: 50,
                  }}
                />
                <Box
                  style={{
                    border: "1px solid #2d70d4",
                    height: 120,
                    width: 150,
                    borderRadius: 5,
                    backgroundColor: "White",
                    marginLeft: 10,
                  }}
                >
                  <Typography
                    fontSize={20}
                    alignItems="center"
                    style={{ marginTop: "30%", marginLeft: "8%" }}
                  >
                    Recieve Food
                  </Typography>
                </Box>{" "}
                <img
                  src={Arrow}
                  style={{
                    marginLeft: 10,
                    height: 20,
                    width: 50,
                    marginTop: 50,
                  }}
                />
                <Box
                  style={{
                    border: "1px solid #2d70d4",
                    height: 120,
                    width: 150,
                    borderRadius: 5,
                    backgroundColor: "White",
                    marginLeft: 10,
                  }}
                >
                  <Typography
                    fontSize={20}
                    alignItems="center"
                    style={{ marginTop: "10%", marginLeft: 10 }}
                  >
                    Enjoy Fresh Farmer Made Food
                  </Typography>
                </Box>{" "}
                <img
                  src={Arrow}
                  style={{
                    marginLeft: 10,
                    height: 20,
                    width: 50,
                    marginTop: 50,
                  }}
                />
                <Box
                  style={{
                    border: "1px solid #2d70d4",
                    height: 120,
                    width: 150,
                    borderRadius: 5,
                    backgroundColor: "White",
                    marginLeft: 10,
                  }}
                >
                  <Typography
                    fontSize={20}
                    alignItems="center"
                    style={{ marginTop: "30%", marginLeft: 20 }}
                  >
                    Write Article
                  </Typography>
                </Box>
              </Box>

              {/* Layer Two */}
              <Box display="flex" flexDirection="row" style={{ marginTop: 5 }}>
                <img
                  src={Arrow}
                  style={{
                    marginLeft: 10,
                    height: 20,
                    width: 50,
                    marginTop: 50,
                  }}
                />
                <Box
                  style={{
                    border: "1px solid #2d70d4",
                    height: 120,
                    width: 150,
                    borderRadius: 5,
                    backgroundColor: "White",
                    marginLeft: 10,
                  }}
                >
                  <Typography
                    fontSize={20}
                    alignItems="center"
                    style={{ marginTop: "15%", marginLeft: 10 }}
                  >
                    Provide more info /Kitchen plato
                  </Typography>
                </Box>

                <img
                  src={Arrow}
                  style={{
                    marginLeft: 10,
                    height: 20,
                    width: 50,
                    marginTop: 50,
                  }}
                />

                <Box
                  style={{
                    border: "1px solid #2d70d4",
                    height: 120,
                    width: 150,
                    borderRadius: 5,
                    backgroundColor: "White",
                    marginLeft: 10,
                  }}
                >
                  <Typography
                    fontSize={20}
                    alignItems="center"
                    style={{ marginTop: "15%", marginLeft: 14 }}
                  >
                    Get Free higine Certificate
                  </Typography>
                </Box>

                <img
                  src={Arrow}
                  style={{
                    marginLeft: 10,
                    height: 20,
                    width: 50,
                    marginTop: 50,
                  }}
                />

                <Box
                  style={{
                    border: "1px solid #2d70d4",
                    height: 120,
                    width: 150,
                    borderRadius: 5,
                    backgroundColor: "White",
                    marginLeft: 10,
                  }}
                >
                  <Typography
                    fontSize={20}
                    alignItems="center"
                    style={{ marginLeft: 12 }}
                  >
                    Upload what you cooked for sell with rice photo/Video
                  </Typography>
                </Box>

                <img
                  src={Arrow}
                  style={{
                    marginLeft: 10,
                    height: 20,
                    width: 50,
                    marginTop: 50,
                  }}
                />

                <Box
                  style={{
                    border: "1px solid #2d70d4",
                    height: 120,
                    width: 150,
                    borderRadius: 5,
                    backgroundColor: "White",
                    marginLeft: 10,
                  }}
                >
                  <Typography
                    fontSize={20}
                    alignItems="center"
                    style={{ marginTop: "30%", marginLeft: 60 }}
                  >
                    Sell
                  </Typography>
                </Box>

                <img
                  src={Arrow}
                  style={{
                    marginLeft: 10,
                    height: 20,
                    width: 50,
                    marginTop: 50,
                  }}
                />

                <Box
                  style={{
                    border: "1px solid #2d70d4",
                    height: 120,
                    width: 150,
                    borderRadius: 5,
                    backgroundColor: "White",
                    marginLeft: 10,
                  }}
                >
                  <Typography
                    fontSize={20}
                    alignItems="center"
                    style={{ marginTop: "30%", marginLeft: 40 }}
                  >
                    Get Paid
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
      </Parallax>
    </div>
  );
};

export default Work;
