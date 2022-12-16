import React from "react";
import { Box, Typography } from "@mui/material";
import "./slider.css";
import Slider from "react-slick";
import Bg from "../../assets/img/slider.jpg";
import Bg2 from "../../assets/img/slider2.jpg";
import Custom_Search from "../Search_Bar_OnSlider/custom_Search";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MySlider = () => {
  const settings = {
    // dots: true,
    fade: true,
    // infinite: true,
    autoplay: true,
    speed: 5000,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    pauseOnHover: true,
  };
  return (
    <Box>
      <div style={{ width: "100%", height: 600, overflow: "hidden" }}>
        <Slider {...settings}>
          {/* <div id="overlay"> */}
          <div
            class="image-wrap"
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <div class="text">
              <Typography variant="h1"> Hello Own Food</Typography>
            </div>
            <img
              class="overlay"
              src={
                "http://fitmeal.like-themes.com/wp-content/uploads/2018/02/SLIDE_01.jpg"
              }
            />
          </div>
          <div
            class="image-wrap"
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <div class="text">
              <Typography variant="h1"> Hello Own Drink</Typography>
            </div>
            <img
              class="overlay"
              src={
                "http://fitmeal.like-themes.com/wp-content/uploads/2018/02/SLIDE_02.jpg"
              }
            />
          </div>
          <div
            class="image-wrap"
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <div class="text">
              <Typography variant="h1"> Welcome Own Food</Typography>
            </div>
            <img
              class="overlay"
              src={
                "http://fitmeal.like-themes.com/wp-content/uploads/2018/02/SLIDE_03.jpg"
              }
            />
          </div>
          {/* </div> */}
        </Slider>
      </div>
    </Box>
  );
};

export default MySlider;
