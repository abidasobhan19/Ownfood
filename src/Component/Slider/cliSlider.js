import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderOne from "../../assets/img/slidePart1.png";
import SliderTwo from "../../assets/img/sliderPart2.png";
import SliderThree from "../../assets/img/sliderPart2.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="icofont-arrow-right dandik slick-arrow"
      style={{ ...style, display: "block", right: 0 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="icofont-arrow-left bamdik slick-arrow"
      style={{ ...style, display: "block", left: 5 }}
      onClick={onClick}
    />
  );
}
const ClientSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="  section   slider-arrow   ">
      <div className="container-fluid">
        <Slider {...settings}>
          <div className="row d-flex  ">
            <div class=" card mb-3 sf_slide_body">
              <div class="row g-0 ">
                <div class="col-md-8">
                  <h3 class="sf_card-text mt-4">
                    €0 Delivery Fee + 5% off eligible orders over €10
                  </h3>
                  <button type="button" class="btn_product btn-light mt-2">
                    View More
                  </button>
                </div>
                <div class="col-md-4">
                  <img
                    src={SliderOne}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
              </div>
            </div>

            <div
              class="  card mb-3 sf_slide_body"
              style={{ backgroundColor: "rgb(153, 111, 0)" }}
            >
              <div class="row g-0 ">
                <div class="col-md-8">
                  <h3 class="sf_card-text mt-4">
                    €0 Delivery Fee + 5% off eligible orders over €10
                  </h3>
                  <button type="button" class="btn_product btn-light mt-2">
                    View More
                  </button>
                </div>
                <div class="col-md-4">
                  <img
                    src={SliderOne}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
              </div>
            </div>

            <div class=" card mb-3 sf_slide_body">
              <div class="row g-0 ">
                <div class="col-md-8">
                  <h3 class="sf_card-text mt-4">
                    €0 Delivery Fee + 5% off eligible orders over €10
                  </h3>
                  <button type="button" class="btn_product btn-light mt-2">
                    View More
                  </button>
                </div>
                <div class="col-md-4">
                  <img
                    src={SliderOne}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row d-flex  ">
            <div class=" card mb-3 sf_slide_body">
              <div class="row g-0 ">
                <div class="col-md-8">
                  <h3 class="sf_card-text mt-4">
                    €0 Delivery Fee + 5% off eligible orders over €10
                  </h3>
                  <button type="button" class="btn_product btn-light mt-2">
                    View More
                  </button>
                </div>
                <div class="col-md-4">
                  <img
                    src={SliderOne}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
              </div>
            </div>

            <div
              class="  card mb-3 sf_slide_body"
              style={{ backgroundColor: "rgb(153, 111, 0)" }}
            >
              <div class="row g-0 ">
                <div class="col-md-8">
                  <h3 class="sf_card-text mt-4">
                    €0 Delivery Fee + 5% off eligible orders over €10
                  </h3>
                  <button type="button" class="btn_product btn-light mt-2">
                    View More
                  </button>
                </div>
                <div class="col-md-4">
                  <img
                    src={SliderTwo}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
              </div>
            </div>

            <div class="  card mb-3 sf_slide_body">
              <div class="row g-0 ">
                <div class="col-md-8">
                  <h3 class="sf_card-text mt-4">
                    €0 Delivery Fee + 5% off eligible orders over €10
                  </h3>
                  <button type="button" class="btn_product btn-light mt-2">
                    View More
                  </button>
                </div>
                <div class="col-md-4">
                  <img
                    src={SliderThree}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row d-flex  ">
            <div class="  card mb-3 sf_slide_body">
              <div class="row g-0 ">
                <div class="col-md-8">
                  <h3 class="sf_card-text mt-4">
                    €0 Delivery Fee + 5% off eligible orders over €10
                  </h3>
                  <button type="button" class="btn_product btn-light mt-2">
                    View More
                  </button>
                </div>
                <div class="col-md-4">
                  <img
                    src={SliderOne}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
              </div>
            </div>

            <div class="  card mb-3 sf_slide_body">
              <div class="row g-0 ">
                <div class="col-md-8">
                  <h3 class="sf_card-text mt-4">
                    €0 Delivery Fee + 5% off eligible orders over €10
                  </h3>
                  <button type="button" class="btn_product btn-light mt-2">
                    View More
                  </button>
                </div>
                <div class="col-md-4">
                  <img
                    src={SliderOne}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
              </div>
            </div>

            <div
              class="  card mb-3 sf_slide_body"
              style={{ backgroundColor: "rgb(20, 35, 40)" }}
            >
              <div class="row g-0 ">
                <div class="col-md-8">
                  <h3 class="sf_card-text mt-4">
                    €0 Delivery Fee + 5% off eligible orders over €10
                  </h3>
                  <button type="button" class="btn_product btn-light mt-2">
                    View More
                  </button>
                </div>
                <div class="col-md-4">
                  <img
                    src={SliderOne}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default ClientSlider;
