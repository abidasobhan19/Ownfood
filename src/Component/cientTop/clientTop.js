import React, { Component, useState } from "react";
import Slider from "react-slick";
import "./clientTop.css";
import { Uber_image } from "../data";
import { useNavigate } from "react-router-dom";
const ClientTop = () => {
  const navigate = useNavigate();
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="icofont-arrow-right right slick-arrow"
        style={{ ...style, display: "block", right: -0, marginTop: -10 }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="icofont-arrow-left left slick-arrow"
        style={{ ...style, display: "block", left: -0, marginTop: -10 }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    // autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplaySpeed: 3000,
    slidesToShow: 10,
    slidesToScroll: 1,
  };
  return (
    <section className="sf_section brand-part ">
      <div className="container-fluid">
        <div className="brand-slider slider-arrow slick-initialized slick-slider">
          {/* <i
            className="icofont-arrow-right dandik slick-arrow"
            style={{ display: "block" }}
          ></i> */}
          <div className="slick-list draggable ">
            <div
              className="slick-track"
              style={{
                opacity: 1,
                width: "100%",
                transform: `translate3d(${-1300}, ${0}, ${0}    )`,
              }}
            >
              <Slider {...settings}>
                {/* {Uber_image.map((item, index) => ( */}
                <div
                  className="sf_brand-wrap slick-slide slick-cloned mt-3"
                  data-slick-index="-5"
                  aria-hidden="true"
                  tabIndex="-1"
                  style={{ width: 224 }}
                >
                  <div className="sf_brand-media">
                    <img src={Uber_image[0].item_image} alt="brand" />
                    <div
                      className="sf_brand-overlay"
                      onClick={() => {
                        navigate("shoppingpage");
                      }}
                    ></div>
                  </div>
                  <div className="brand-meta">
                    <h4>vegan lover</h4>
                  </div>
                </div>
                {/* ))} */}

                <div
                  className="sf_brand-wrap slick-slide slick-cloned mt-3"
                  data-slick-index="-5"
                  aria-hidden="true"
                  tabIndex="-1"
                  style={{ width: 224 }}
                >
                  <div className="sf_brand-media">
                    <img src={Uber_image[1].item_image} alt="brand" />
                    <div
                      className="sf_brand-overlay"
                      onClick={() => {
                        navigate("shoppingpage");
                      }}
                    >
                      {/* <a href="#" tabIndex="-1">
                           <i className="fas fa-link"></i>
                         </a> */}
                    </div>
                  </div>
                  <div className="brand-meta">
                    <h5>vegan lover</h5>
                  </div>
                </div>

                <div
                  className="sf_brand-wrap slick-slide slick-cloned mt-3"
                  data-slick-index="-5"
                  aria-hidden="true"
                  tabIndex="-1"
                  style={{ width: 224 }}
                >
                  <div className="sf_brand-media">
                    <img src={Uber_image[2].item_image} alt="brand" />
                    <div
                      className="sf_brand-overlay"
                      onClick={() => {
                        navigate("shoppingpage");
                      }}
                    >
                      {/* <a href="#" tabIndex="-1">
                           <i className="fas fa-link"></i>
                         </a> */}
                    </div>
                  </div>
                  <div className="brand-meta">
                    <h5>vegan lover</h5>
                  </div>
                </div>

                <div
                  className="sf_brand-wrap slick-slide slick-cloned mt-3"
                  data-slick-index="-5"
                  aria-hidden="true"
                  tabIndex="-1"
                  style={{ width: 224 }}
                >
                  <div className="sf_brand-media">
                    <img src={Uber_image[3].item_image} alt="brand" />
                    <div
                      className="sf_brand-overlay"
                      onClick={() => {
                        navigate("shoppingpage");
                      }}
                    >
                      {/* <a href="#" tabIndex="-1">
                           <i className="fas fa-link"></i>
                         </a> */}
                    </div>
                  </div>
                  <div className="brand-meta">
                    <h5>vegan lover</h5>
                  </div>
                </div>

                <div
                  className="sf_brand-wrap slick-slide slick-cloned mt-3"
                  data-slick-index="-5"
                  aria-hidden="true"
                  tabIndex="-1"
                  style={{ width: 224 }}
                >
                  <div className="sf_brand-media">
                    <img src={Uber_image[6].item_image} alt="brand" />
                    <div
                      className="sf_brand-overlay"
                      onClick={() => {
                        navigate("shoppingpage");
                      }}
                    >
                      {/* <a href="#" tabIndex="-1">
                           <i className="fas fa-link"></i>
                         </a> */}
                    </div>
                  </div>
                  <div className="brand-meta">
                    <h5>vegan lover</h5>
                  </div>
                </div>

                <div
                  className="sf_brand-wrap slick-slide slick-cloned mt-3"
                  data-slick-index="-5"
                  aria-hidden="true"
                  tabIndex="-1"
                  style={{ width: 224 }}
                >
                  <div className="sf_brand-media">
                    <img src={Uber_image[7].item_image} alt="brand" />
                    <div
                      className="sf_brand-overlay"
                      onClick={() => {
                        navigate("shoppingpage");
                      }}
                    >
                      {/* <a href="#" tabIndex="-1">
                           <i className="fas fa-link"></i>
                         </a> */}
                    </div>
                  </div>
                  <div className="brand-meta">
                    <h5>vegan lover</h5>
                  </div>
                </div>

                <div
                  className="sf_brand-wrap slick-slide slick-cloned mt-3"
                  data-slick-index="-5"
                  aria-hidden="true"
                  tabIndex="-1"
                  style={{ width: 224 }}
                >
                  <div className="sf_brand-media">
                    <img src={Uber_image[8].item_image} alt="brand" />
                    <div
                      className="sf_brand-overlay"
                      onClick={() => {
                        navigate("shoppingpage");
                      }}
                    >
                      {/* <a href="#" tabIndex="-1">
                           <i className="fas fa-link"></i>
                         </a> */}
                    </div>
                  </div>
                  <div className="brand-meta">
                    <h5>vegan lover</h5>
                  </div>
                </div>

                <div
                  className="sf_brand-wrap slick-slide slick-cloned mt-3"
                  data-slick-index="-5"
                  aria-hidden="true"
                  tabIndex="-1"
                  style={{ width: 224 }}
                >
                  <div className="sf_brand-media">
                    <img src={Uber_image[9].item_image} alt="brand" />
                    <div
                      className="sf_brand-overlay"
                      onClick={() => {
                        navigate("shoppingpage");
                      }}
                    >
                      {/* <a href="#" tabIndex="-1">
                           <i className="fas fa-link"></i>
                         </a> */}
                    </div>
                  </div>
                  <div className="brand-meta">
                    <h5>vegan lover</h5>
                  </div>
                </div>
                <div
                  className="sf_brand-wrap slick-slide slick-cloned mt-3"
                  data-slick-index="-5"
                  aria-hidden="true"
                  tabIndex="-1"
                  style={{ width: 224 }}
                >
                  <div className="sf_brand-media">
                    <img src={Uber_image[1].item_image} alt="brand" />
                    <div
                      className="sf_brand-overlay"
                      onClick={() => {
                        navigate("shoppingpage");
                      }}
                    >
                      {/* <a href="#" tabIndex="-1">
                           <i className="fas fa-link"></i>
                         </a> */}
                    </div>
                  </div>
                  <div className="brand-meta">
                    <h5>vegan lover</h5>
                  </div>
                </div>
                <div
                  className="sf_brand-wrap slick-slide slick-cloned mt-3"
                  data-slick-index="-5"
                  aria-hidden="true"
                  tabIndex="-1"
                  style={{ width: 224 }}
                >
                  <div className="sf_brand-media">
                    <img src={Uber_image[2].item_image} alt="brand" />
                    <div
                      className="sf_brand-overlay"
                      onClick={() => {
                        navigate("shoppingpage");
                      }}
                    >
                      {/* <a href="#" tabIndex="-1">
                           <i className="fas fa-link"></i>
                         </a> */}
                    </div>
                  </div>
                  <div className="brand-meta">
                    <h5>vegan lover</h5>
                  </div>
                </div>
                <div
                  className="sf_brand-wrap slick-slide slick-cloned mt-3"
                  data-slick-index="-5"
                  aria-hidden="true"
                  tabIndex="-1"
                  style={{ width: 224 }}
                >
                  <div className="sf_brand-media">
                    <img src={Uber_image[3].item_image} alt="brand" />
                    <div
                      className="sf_brand-overlay"
                      onClick={() => {
                        navigate("shoppingpage");
                      }}
                    >
                      {/* <a href="#" tabIndex="-1">
                           <i className="fas fa-link"></i>
                         </a> */}
                    </div>
                  </div>
                  <div className="brand-meta">
                    <h5>vegan lover</h5>
                  </div>
                </div>
                <div
                  className="sf_brand-wrap slick-slide slick-cloned mt-3"
                  data-slick-index="-5"
                  aria-hidden="true"
                  tabIndex="-1"
                  style={{ width: 224 }}
                >
                  <div className="sf_brand-media">
                    <img src={Uber_image[4].item_image} alt="brand" />
                    <div
                      className="sf_brand-overlay"
                      onClick={() => {
                        navigate("shoppingpage");
                      }}
                    >
                      {/* <a href="#" tabIndex="-1">
                           <i className="fas fa-link"></i>
                         </a> */}
                    </div>
                  </div>
                  <div className="brand-meta">
                    <h5>vegan lover</h5>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          {/* <i
            className="icofont-arrow-left bamdik slick-arrow"
            style={{ display: "block" }}
          ></i> */}
        </div>
      </div>
    </section>
  );
};

export default ClientTop;

// import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import Slider from "react-slick";
// import productCategory from "../Scripts/ProductCategory";

// const ProductSlider = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 12,
//     slidesToScroll: 1,
//     speed: 500,
//     cssEase: "linear",
//     pauseOnHover: true,
//   };
//   return (
//     <section className="productSlider">
//       <Container fluid>
//         <Row>
//           <Col>
//             <Slider {...settings}>
//               {productCategory.map((item, index) => (
//                 <div key={index} className="slider_body">
//                   <div>
//                     <div className="img_file">
//                       <img className="img-fluid" src={item.img} alt="" />
//                     </div>
//                     <div className="textFile d-flex justify-content-center align-items-center">
//                       <p>{item.title}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default ProductSlider;
