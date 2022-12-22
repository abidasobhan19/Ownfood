import React, { Component } from "react";
import Slider from "react-slick";
import Sone from "../../assets/img/SLIDE_01.jpg";
import Stwo from "../../assets/img/SLIDE_03.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="icofont-arrow-right dandik slick-arrow"
      style={{ ...style, display: "block", right: 50 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="icofont-arrow-left bamdik slick-arrow"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default class MySlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      autoplay: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <section className="home-index-slider slider-arrow slider-dots slick-initialized slick-slider">
        <div>
          <Slider {...settings}>
            <div>
              <div
                className=" banner-1  slick-current slick-active"
                data-slick-index="0"
                aria-hidden="false"
                tabIndex="0"
                style={{
                  width: "100%",
                  height: 500,
                  position: "relative",

                  // left: 0,
                  // top: 0,
                  opacity: 1,
                }}
              >
                <div className="container-fluid">
                  <img src={Sone} style={{ width: "100%" }} alt="index" />
                </div>
              </div>
            </div>

            <div>
              <div
                className=" banner-2 slick-slide slick-current slick-active"
                data-slick-index="0"
                // aria-hidden="false"
                // tabIndex="0"
                style={{
                  width: "100%",
                  position: "relative",
                  height: 500,
                  // zIndex: 999,
                  // left: 0,
                  // top: 0,
                  opacity: 1,
                }}
              >
                <div className="container-fluid">
                  <img src={Stwo} style={{ width: "100%" }} alt="index" />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}
