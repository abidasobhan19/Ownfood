import React from "react";

const Brand = () => {
  return (
    <section className="section brand-part ">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="section-heading">{/* <h2>Top Seller</h2> */}</div>
          </div>
        </div>
        <div className="brand-slider slider-arrow slick-initialized slick-slider">
          <i
            className="icofont-arrow-right dandik slick-arrow"
            style={{ display: "block" }}
          ></i>
          <div className="slick-list draggable ">
            <div
              className="slick-track"
              style={{
                opacity: 1,
                width: 4420,
                transform: `translate3d(${-1300}, ${0}, ${0}    )`,
              }}
            >
              <div
                className="brand-wrap slick-slide slick-cloned mt-3"
                data-slick-index="-5"
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: 224 }}
              >
                <div className="brand-media">
                  <img src="images/brand/02.jpg" alt="brand" />
                  <div className="brand-overlay">
                    <a href="#" tabIndex="-1">
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
                <div className="brand-meta">
                  <h4>vegan lover</h4>
                  <p>(45 items)</p>
                </div>
              </div>
              <div
                className="brand-wrap slick-slide slick-cloned mt-3"
                data-slick-index="-4"
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: 260 }}
              >
                <div className="brand-media">
                  <img src="images/brand/03.jpg" alt="brand" />
                  <div className="brand-overlay">
                    <a href="#" tabIndex="-1">
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
                <div className="brand-meta">
                  <h4>organic foody</h4>
                  <p>(45 items)</p>
                </div>
              </div>
              <div
                className="brand-wrap slick-slide slick-cloned mt-3"
                data-slick-index="-3"
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: 260 }}
              >
                <div className="brand-media">
                  <img src="images/brand/04.jpg" alt="brand" />
                  <div className="brand-overlay">
                    <a href="#" tabIndex="-1">
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
                <div className="brand-meta">
                  <h4>ecomart limited</h4>
                  <p>(45 items)</p>
                </div>
              </div>
              <div
                className="brand-wrap slick-slide slick-cloned mt-3"
                data-slick-index="-2"
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: 260 }}
              >
                <div className="brand-media">
                  <img src="images/brand/05.jpg" alt="brand" />
                  <div className="brand-overlay">
                    <a href="#" tabIndex="-1">
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
                <div className="brand-meta">
                  <h4>fresh fortune</h4>
                  <p>(45 items)</p>
                </div>
              </div>

              <div
                className="brand-wrap slick-slide slick-cloned mt-3"
                data-slick-index="-1"
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: 260 }}
              >
                <div className="brand-media">
                  <img src="images/brand/06.jpg" alt="brand" />
                  <div className="brand-overlay">
                    <a href="brand-single.html" tabIndex="-1">
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
                <div className="brand-meta">
                  <h4>econature</h4>
                  <p>(45 items)</p>
                </div>
              </div>
              <div
                className="brand-wrap slick-slide slick-current slick-active mt-3"
                data-slick-index="0"
                aria-hidden="false"
                tabIndex="0"
                style={{ width: 260 }}
              >
                <div className="brand-media">
                  <img src="images/brand/01.jpg" alt="brand" />
                  <div className="brand-overlay">
                    <a href="#" tabIndex="0">
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
                <div className="brand-meta">
                  <h4>natural greeny</h4>
                  <p>(45 items)</p>
                </div>
              </div>

              <div
                className="brand-wrap slick-slide slick-active mt-3"
                data-slick-index="1"
                aria-hidden="false"
                tabIndex="0"
                style={{ width: 260 }}
              >
                <div className="brand-media">
                  <img src="images/brand/02.jpg" alt="brand" />
                  <div className="brand-overlay">
                    <a href="#" tabIndex="0">
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
                <div className="brand-meta">
                  <h4>vegan lover</h4>
                  <p>(45 items)</p>
                </div>
              </div>
              <div
                className="brand-wrap slick-slide slick-active mt-3"
                data-slick-index="2"
                aria-hidden="false"
                tabIndex="0"
                style={{ width: 260 }}
              >
                <div className="brand-media">
                  <img src="images/brand/03.jpg" alt="brand" />
                  <div className="brand-overlay">
                    <a href="#" tabIndex="0">
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
                <div className="brand-meta">
                  <h4>organic foody</h4>
                  <p>(45 items)</p>
                </div>
              </div>

              <div
                className="brand-wrap slick-slide slick-active mt-3"
                data-slick-index="3"
                aria-hidden="false"
                tabIndex="0"
                style={{ width: 260 }}
              >
                <div className="brand-media">
                  <img src="images/brand/04.jpg" alt="brand" />
                  <div className="brand-overlay">
                    <a href="#" tabIndex="0">
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
                <div className="brand-meta">
                  <h4>ecomart limited</h4>
                  <p>(45 items)</p>
                </div>
              </div>

              <div
                className="brand-wrap slick-slide slick-active mt-3"
                data-slick-index="4"
                aria-hidden="false"
                tabIndex="0"
                style={{ width: 260 }}
              >
                <div className="brand-media">
                  <img src="images/brand/05.jpg" alt="brand" />
                  <div className="brand-overlay">
                    <a href="" tabIndex="0">
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
                <div className="brand-meta">
                  <h4>fresh fortune</h4>
                  <p>(45 items)</p>
                </div>
              </div>
              <div
                className="brand-wrap slick-slide mt-3"
                data-slick-index="5"
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: 260 }}
              >
                <div className="brand-media">
                  <img src="images/brand/06.jpg" alt="brand" />
                  <div className="brand-overlay">
                    <a href="#" tabIndex="-1">
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
                <div className="brand-meta">
                  <h4>econature</h4>
                  <p>(45 items)</p>
                </div>
              </div>

              <div
                className="brand-wrap slick-slide slick-cloned mt-3"
                data-slick-index="6"
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: 260 }}
              >
                <div className="brand-media">
                  <img src="images/brand/01.jpg" alt="brand" />
                  <div className="brand-overlay">
                    <a href="#" tabIndex="-1">
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
                <div className="brand-meta">
                  <h4>natural greeny</h4>
                  <p>(45 items)</p>
                </div>
              </div>
              <div
                className="brand-wrap slick-slide slick-cloned mt-3"
                data-slick-index="7"
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: 260 }}
              >
                <div className="brand-media">
                  <img src="images/brand/02.jpg" alt="brand" />
                  <div className="brand-overlay">
                    <a href="brand-single.html" tabIndex="-1">
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
                <div className="brand-meta">
                  <h4>vegan lover</h4>
                  <p>(45 items)</p>
                </div>
              </div>
              <div
                className="brand-wrap slick-slide slick-cloned mt-3"
                data-slick-index="8"
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: 260 }}
              >
                <div className="brand-media">
                  <img src="images/brand/03.jpg" alt="brand" />
                  <div className="brand-overlay">
                    <a href="#" tabIndex="-1">
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
                <div className="brand-meta">
                  <h4>organic foody</h4>
                  <p>(45 items)</p>
                </div>
              </div>
              <div
                className="brand-wrap slick-slide slick-cloned mt-3"
                data-slick-index="9"
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: 260 }}
              >
                <div className="brand-media">
                  <img src="images/brand/04.jpg" alt="brand" />
                  <div className="brand-overlay">
                    <a href="brand-single.html" tabIndex="-1">
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
                <div className="brand-meta">
                  <h4>ecomart limited</h4>
                  <p>(45 items)</p>
                </div>
              </div>
              <div
                className="brand-wrap slick-slide slick-cloned mt-3"
                data-slick-index="10"
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: 260 }}
              >
                <div className="brand-media">
                  <img src="images/brand/05.jpg" alt="brand" />
                  <div className="brand-overlay">
                    <a href="#" tabIndex="-1">
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
                <div className="brand-meta">
                  <h4>fresh fortune</h4>
                  <p>(45 items)</p>
                </div>
              </div>
              <div
                className="brand-wrap slick-slide slick-cloned mt-3"
                data-slick-index="11"
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: 260 }}
              >
                <div className="brand-media">
                  <img src="images/brand/06.jpg" alt="brand" />
                  <div className="brand-overlay">
                    <a href="#" tabIndex="-1">
                      <i className="fas fa-link"></i>
                    </a>
                  </div>
                </div>
                <div className="brand-meta">
                  <h4>econature</h4>
                  <p>(45 items)</p>
                </div>
              </div>
            </div>
          </div>
          <i
            className="icofont-arrow-left bamdik slick-arrow"
            style={{ display: "block" }}
          ></i>
        </div>
      </div>
    </section>
  );
};

export default Brand;
