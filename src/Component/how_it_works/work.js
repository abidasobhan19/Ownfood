import React from "react";
import Arrow from "../../assets/img/arrow.png";
const Work = () => {
  return (
    <section class="popular-categories-section section-space-pb">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 position-relative">
            <div class="section-title-wrap">
              <h2 class="section-title">Popular Categories</h2>
              <p>Some of our popular categories include grocery</p>
            </div>
          </div>
        </div>

        <div class="categories-box product-border-box">
          <div class="categories-slider-col-20">
            {/* <a href="shop.html" class="categories-banner-wrap"> */}
            Open Your Account
            {/* </a> */}
          </div>
          <div className="categories-slider-col-80">
            <div class="categories-slider-active slick-initialized slick-slider">
              <div class="slick-list draggable">
                <div
                  class="slick-track"
                  style={{
                    opacity: 1,
                    width: 1036,
                    transform: ` translate3d(${0}, ${0}, ${0})`,
                  }}
                >
                  <div
                    class="slick-slide slick-current slick-active"
                    data-slick-index="0"
                    aria-hidden="false"
                    style={{ width: 259 }}
                    tabIndex="0"
                  >
                    <div>
                      <div
                        class="single-categories-item"
                        style={{ width: "100% ", display: "inline-block" }}
                      >
                        <div class="category-image">
                          <a href="shop-show-subcategories.html" tabIndex="0">
                            <img
                              src={Arrow}
                              alt=""
                              style={{ height: 40, width: 40 }}
                            />
                          </a>
                        </div>
                        <div class="category-content">
                          <h6>
                            <a href="shop-show-subcategories.html" tabIndex="0">
                              Fresh Vegetables
                            </a>
                          </h6>
                          <p class="count">8 Products</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        class="single-categories-item"
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div class="category-image">
                          <a href="shop-show-subcategories.html" tabIndex="0">
                            <img
                              src={Arrow}
                              alt=""
                              style={{ height: 40, width: 40 }}
                            />
                          </a>
                        </div>
                        <div class="category-content">
                          <h6>
                            <a href="shop-show-subcategories.html" tabIndex="0">
                              Bread &amp; Bakery
                            </a>
                          </h6>
                          <p class="count">9 Products</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="slick-slide slick-active"
                    data-slick-index="1"
                    aria-hidden="false"
                    style={{ width: 259 }}
                    tabIndex="0"
                  >
                    <div>
                      <div
                        class="single-categories-item"
                        style={{ width: "100% ", display: "inline-block" }}
                      >
                        <div class="category-image">
                          <a href="shop-show-subcategories.html" tabIndex="0">
                            <img
                              src={Arrow}
                              alt=""
                              style={{ height: 40, width: 40 }}
                            />
                          </a>
                        </div>
                        <div class="category-content">
                          <h6>
                            <a href="shop-show-subcategories.html" tabIndex="0">
                              Canned Goods
                            </a>
                          </h6>
                          <p class="count">10 Products</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        class="single-categories-item"
                        style={{ width: "100% ", display: "inline-block" }}
                      >
                        <div class="category-image">
                          <a href="shop-show-subcategories.html" tabIndex="0">
                            <img
                              src={Arrow}
                              alt=""
                              style={{ height: 40, width: 40 }}
                            />
                          </a>
                        </div>
                        <div class="category-content">
                          <h6>
                            <a href="shop-show-subcategories.html" tabIndex="0">
                              Eggs &amp; Dairy
                            </a>
                          </h6>
                          <p class="count">18 Products</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="slick-slide slick-active"
                    data-slick-index="2"
                    aria-hidden="false"
                    style={{ width: 259 }}
                    tabIndex="0"
                  >
                    <div>
                      <div
                        class="single-categories-item"
                        style={{ width: "100% ", display: "inline-block" }}
                      >
                        <div class="category-image">
                          <a href="shop-show-subcategories.html" tabIndex="0">
                            <img
                              src={Arrow}
                              alt=""
                              style={{ height: 40, width: 40 }}
                            />
                          </a>
                        </div>
                        <div class="category-content">
                          <h6>
                            <a href="shop-show-subcategories.html" tabIndex="0">
                              Meats &amp; Seafood
                            </a>
                          </h6>
                          <p class="count">8 Products</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        class="single-categories-item"
                        style={{ width: "100% ", display: "inline-block" }}
                      >
                        <div class="category-image">
                          <a href="shop-show-subcategories.html" tabIndex="0">
                            <img
                              src={Arrow}
                              alt=""
                              style={{ height: 40, width: 40 }}
                            />
                          </a>
                        </div>
                        <div class="category-content">
                          <h6>
                            <a href="#" tabIndex="0">
                              Soft Drinks
                            </a>
                          </h6>
                          <p class="count">8 Products</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="slick-slide slick-active"
                    data-slick-index="3"
                    aria-hidden="false"
                    style={{ width: 259 }}
                    tabIndex="0"
                  >
                    <div>
                      <div
                        class="single-categories-item"
                        style={{ width: "100% ", display: "inline-block" }}
                      >
                        <div class="category-image">
                          <a href="shop-show-subcategories.html" tabIndex="0">
                            <img
                              src={Arrow}
                              alt=""
                              style={{ height: 40, width: 40 }}
                            />
                          </a>
                        </div>
                        <div class="category-content">
                          <h6>
                            <a href="shop-show-subcategories.html" tabIndex="0">
                              Fresh Fruits
                            </a>
                          </h6>
                          <p class="count">8 Products</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        class="single-categories-item"
                        style={{ width: "100% ", display: "inline-block" }}
                      >
                        <div class="category-image">
                          <a href="shop-show-subcategories.html" tabIndex="0">
                            <img
                              src={Arrow}
                              alt=""
                              style={{ height: 40, width: 40 }}
                            />
                          </a>
                        </div>
                        <div class="category-content">
                          <h6>
                            <a href="shop-show-subcategories.html" tabIndex="0">
                              Fresh Fruits
                            </a>
                          </h6>
                          <p class="count">8 Products</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
