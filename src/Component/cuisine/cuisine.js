import React, { Component } from "react";
import Slider from "react-slick";
import {
  Paper,
  Avatar,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import "./cuisine.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      class="NextArrow"
      //   className={className}
      //   style={{ ...style, display: "block", background: "#2d70d4" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default class Cuisine extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <div class="cuisine" style={{ marginTop: 50 }}>
        <Typography variant="h3" style={{ marginLeft: "47%", marginTop: 60 }}>
          Cuisine
        </Typography>
        <Slider {...settings}>
          <Card>
            <CardContent>
              <div class="container">
                <img
                  src="http://fitmeal.like-themes.com/wp-content/uploads/2019/06/02_muscle.png"
                  alt="Avatar"
                  class="image"
                />
              </div>
            </CardContent>
            {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
          </Card>
          <Card>
            <CardContent>
              <div class="container">
                <img
                  src="http://fitmeal.like-themes.com/wp-content/uploads/2019/06/02_muscle.png"
                  alt="Avatar"
                  class="image"
                />
              </div>
            </CardContent>
            {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
          </Card>
          <Card>
            <CardContent>
              <Box display="flex" flexDirection="row">
                <Box display="flex" flexDirection="row">
                  <div class="container">
                    <img
                      src="http://fitmeal.like-themes.com/wp-content/uploads/2019/06/02_muscle.png"
                      alt="Avatar"
                      class="image"
                    />
                  </div>
                </Box>
                <Box>
                  <div class="data" display="flex" flexDirection="row-reverse">
                    hello
                  </div>
                </Box>
              </Box>
            </CardContent>
            {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
          </Card>

          <Card>
            <CardContent>
              <Box display="flex" flexDirection="row">
                <Box display="flex" flexDirection="row">
                  <div class="container">
                    <img
                      src="http://fitmeal.like-themes.com/wp-content/uploads/2019/06/02_muscle.png"
                      alt="Avatar"
                      class="image"
                    />
                  </div>
                </Box>
                <Box>
                  <div class="data" display="flex" flexDirection="row-reverse">
                    hello
                  </div>
                </Box>
              </Box>
            </CardContent>
            {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
          </Card>

          <Card>
            <CardContent>
              <Box display="flex" flexDirection="row">
                <Box display="flex" flexDirection="row">
                  <div class="container">
                    <img
                      src="http://fitmeal.like-themes.com/wp-content/uploads/2019/06/02_muscle.png"
                      alt="Avatar"
                      class="image"
                    />
                  </div>
                </Box>
                <Box>
                  <div class="data" display="flex" flexDirection="row-reverse">
                    hello
                  </div>
                </Box>
              </Box>
            </CardContent>
            {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
          </Card>
        </Slider>
      </div>
    );
  }
}
