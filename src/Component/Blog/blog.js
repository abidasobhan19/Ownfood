import React from "react";
import { foodItem } from "../data";
const Blog = () => {
  return (
    <section class="section blog-part">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="section-heading">
              <h2>Read our articles</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="blog-slider slider-arrow slick-initialized slick-slider">
              <i
                class="icofont-arrow-right dandik slick-arrow"
                style={{ display: "block" }}
              ></i>
              <div class="slick-list draggable">
                <div
                  class="slick-track"
                  style={{
                    opacity: 1,
                    width: 4246,
                    transform: `translate3d(${-1158} ${0}, ${0})`,
                  }}
                >
                  <div
                    class="blog-card slick-slide shadow p-3 mb-5 bg-body rounded"
                    data-slick-index="-3"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{ width: 356 }}
                  >
                    <div class="blog-media">
                      <a class="blog-img" href="#" tabIndex="-1">
                        <img src={foodItem[3].item_image} alt="blog" />
                      </a>
                    </div>
                    <div class="blog-content">
                      <ul class="blog-meta">
                        <li>
                          <i class="fas fa-calendar-alt"></i>
                          <span>february 02, 2021</span>
                        </li>
                      </ul>
                      <h4 class="blog-title  text-center">
                        <a href="" tabIndex="-1">
                          Instant Food
                        </a>
                      </h4>
                      <p class="blog-desc">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Alias autem recusandae deleniti nam dignissimos
                        sequi ...{" "}
                      </p>
                      <a class="blog-btn" href="#" tabIndex="-1">
                        <span>read more</span>
                        <i class="icofont-arrow-right"></i>
                      </a>
                      <a class="blog-btn">
                        {" "}
                        <li>
                          <i class="fa-sharp fa-solid fa-comments fa-lg text-primary ms-4"></i>
                          <span>19 Comments</span>
                        </li>
                      </a>
                    </div>
                  </div>

                  <div
                    class="blog-card slick-slide shadow p-3 mb-5 bg-body rounded"
                    data-slick-index="-3"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{ width: 356 }}
                  >
                    <div class="blog-media">
                      <a class="blog-img" href="#" tabIndex="-1">
                        <img src={foodItem[5].item_image} alt="blog" />
                      </a>
                    </div>
                    <div class="blog-content">
                      <ul class="blog-meta">
                        <li>
                          <i class="fas fa-calendar-alt"></i>
                          <span>february 02, 2021</span>
                        </li>
                      </ul>
                      <h4 class="blog-title text-center">
                        <a href="" tabIndex="-1">
                          Pre-Order Food
                        </a>
                      </h4>
                      <p class="blog-desc">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Alias autem recusandae deleniti nam dignissimos
                        sequi ...{" "}
                      </p>
                      <a class="blog-btn" href="#" tabIndex="-1">
                        <span>read more</span>
                        <i class="icofont-arrow-right"></i>
                      </a>
                      <a class="blog-btn">
                        <li>
                          <i class="fa-sharp fa-solid fa-comments fa-lg text-primary ms-4"></i>
                          <span>19 Comments</span>
                        </li>
                      </a>
                    </div>
                  </div>

                  <div
                    class="blog-card slick-slide shadow p-3 mb-5 bg-body rounded"
                    data-slick-index="-3"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{ width: 356 }}
                  >
                    <div class="blog-media">
                      <a class="blog-img" href="#" tabIndex="-1">
                        <img src={foodItem[2].item_image} alt="blog" />
                      </a>
                    </div>
                    <div class="blog-content">
                      <ul class="blog-meta">
                        <li>
                          <i class="fas fa-calendar-alt"></i>
                          <span>february 02, 2021</span>
                        </li>
                      </ul>
                      <h4 class="blog-title  text-center">
                        <a href="" tabIndex="-1">
                          Wish Food
                        </a>
                      </h4>
                      <p class="blog-desc">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Alias autem recusandae deleniti nam dignissimos
                        sequi ...{" "}
                      </p>
                      <a class="blog-btn" href="#" tabIndex="-1">
                        <span>read more</span>
                        <i class="icofont-arrow-right"></i>
                      </a>
                      <a class="blog-btn">
                        <li>
                          <i class="fas fa-userfa-sharp fa-solid fa-comments fa-lg text-primary ms-4"></i>
                          <span>19 Comments</span>
                        </li>
                      </a>
                    </div>
                  </div>

                  <div
                    class="blog-card slick-slide shadow p-3 mb-5 bg-body rounded"
                    data-slick-index="-3"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{ width: 356 }}
                  >
                    <div class="blog-media">
                      <a class="blog-img" href="#" tabIndex="-1">
                        <img src={foodItem[1].item_image} alt="blog" />
                      </a>
                    </div>
                    <div class="blog-content">
                      <ul class="blog-meta">
                        <li>
                          <i class="fas fa-calendar-alt"></i>
                          <span>february 02, 2021</span>
                        </li>
                      </ul>
                      <h4 class="blog-title  text-center">
                        <a href="" tabIndex="-1">
                          Catering Food
                        </a>
                      </h4>
                      <p class="blog-desc">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Alias autem recusandae deleniti nam dignissimos
                        sequi ...{" "}
                      </p>
                      <a class="blog-btn" href="#" tabIndex="-1">
                        <span>read more</span>
                        <i class="icofont-arrow-right"></i>
                      </a>
                      <a class="blog-btn">
                        <li>
                          <i class="fa-sharp fa-solid fa-comments fa-lg text-primary ms-4"></i>
                          <span>19 Comments</span>
                        </li>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <i
                class="icofont-arrow-left bamdik slick-arrow"
                style={{ display: "block" }}
              ></i>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="section-btn-25">
              <a href="" class="btn btn-outline">
                <i class="fas fa-eye"></i>
                <span>view all blog</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
