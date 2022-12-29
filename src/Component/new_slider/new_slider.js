import React from "react";
import { foodItem } from "../data";
import "./new_slider.css";
const New_Slider = () => {
  return (
    <div className=" mt-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8   rounded">
            <div class="card">
              <header class="card-header sf_card_header">
                <h3>Order Foods by Categories</h3>
              </header>
              <span></span>
              <div class="card-body searchform show-hide-content">
                <div class="d-flex flex-wrap">
                  <div className="col-md-3">
                    <div className="col shadow">
                      <div className="product-card">
                        <div className="product-media">
                          <div className="product-label">
                            <label className="label-text rate">4.8</label>
                          </div>
                          <button className="product-wish wish">
                            <i className="fas fa-heart"></i>
                          </button>
                          <a className="product-image" href="#">
                            <img src={foodItem[1].item_image} alt="product" />
                          </a>
                          <div className="product-widget">
                            <a
                              title="Product View"
                              href="#"
                              className="fas fa-eye"
                              data-bs-toggle="modal"
                              data-bs-target="#product-view"
                            ></a>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="product-rating">
                            <i className="active icofont-star"></i>
                            <i className="active icofont-star"></i>
                            <i className="active icofont-star"></i>
                            <i className="active icofont-star"></i>
                            <i className="icofont-star"></i>
                            <a href="#">(3)</a>
                          </div>
                          <h6 className="product-name">
                            <a href="#">fresh green chilis</a>
                          </h6>
                          <h6 className="product-price">
                            <del>$34</del>
                            <span>
                              $28 <small>/piece</small>
                            </span>
                          </h6>
                          <button className="product-add" title="Add to Cart">
                            <i className="fas fa-shopping-basket"></i>
                            <span>add</span>
                          </button>
                          <div className="product-action">
                            <button
                              className="action-minus"
                              title="Quantity Minus"
                            >
                              <i className="icofont-minus"></i>
                            </button>
                            <input
                              className="action-input"
                              title="Quantity Number"
                              type="text"
                              name="quantity"
                              value="1"
                            />
                            <button
                              className="action-plus"
                              title="Quantity Plus"
                            >
                              <i className="icofont-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 ">
                    <div className="col shadow">
                      <div className="product-card">
                        <div className="product-media">
                          <div className="product-label">
                            <label className="label-text rate">4.8</label>
                          </div>
                          <button className="product-wish wish">
                            <i className="fas fa-heart"></i>
                          </button>
                          <a className="product-image" href="#">
                            <img src={foodItem[1].item_image} alt="product" />
                          </a>
                          <div className="product-widget">
                            <a
                              title="Product View"
                              href="#"
                              className="fas fa-eye"
                              data-bs-toggle="modal"
                              data-bs-target="#product-view"
                            ></a>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="product-rating">
                            <i className="active icofont-star"></i>
                            <i className="active icofont-star"></i>
                            <i className="active icofont-star"></i>
                            <i className="active icofont-star"></i>
                            <i className="icofont-star"></i>
                            <a href="#">(3)</a>
                          </div>
                          <h6 className="product-name">
                            <a href="#">fresh green chilis</a>
                          </h6>
                          <h6 className="product-price">
                            <del>$34</del>
                            <span>
                              $28 <small>/piece</small>
                            </span>
                          </h6>
                          <button className="product-add" title="Add to Cart">
                            <i className="fas fa-shopping-basket"></i>
                            <span>add</span>
                          </button>
                          <div className="product-action">
                            <button
                              className="action-minus"
                              title="Quantity Minus"
                            >
                              <i className="icofont-minus"></i>
                            </button>
                            <input
                              className="action-input"
                              title="Quantity Number"
                              type="text"
                              name="quantity"
                              value="1"
                            />
                            <button
                              className="action-plus"
                              title="Quantity Plus"
                            >
                              <i className="icofont-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 ">
                    <div className="col shadow">
                      <div className="product-card">
                        <div className="product-media">
                          <div className="product-label">
                            <label className="label-text rate">4.8</label>
                          </div>
                          <button className="product-wish wish">
                            <i className="fas fa-heart"></i>
                          </button>
                          <a className="product-image" href="#">
                            <img src={foodItem[1].item_image} alt="product" />
                          </a>
                          <div className="product-widget">
                            <a
                              title="Product View"
                              href="#"
                              className="fas fa-eye"
                              data-bs-toggle="modal"
                              data-bs-target="#product-view"
                            ></a>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="product-rating">
                            <i className="active icofont-star"></i>
                            <i className="active icofont-star"></i>
                            <i className="active icofont-star"></i>
                            <i className="active icofont-star"></i>
                            <i className="icofont-star"></i>
                            <a href="#">(3)</a>
                          </div>
                          <h6 className="product-name">
                            <a href="#">fresh green chilis</a>
                          </h6>
                          <h6 className="product-price">
                            <del>$34</del>
                            <span>
                              $28 <small>/piece</small>
                            </span>
                          </h6>
                          <button className="product-add" title="Add to Cart">
                            <i className="fas fa-shopping-basket"></i>
                            <span>add</span>
                          </button>
                          <div className="product-action">
                            <button
                              className="action-minus"
                              title="Quantity Minus"
                            >
                              <i className="icofont-minus"></i>
                            </button>
                            <input
                              className="action-input"
                              title="Quantity Number"
                              type="text"
                              name="quantity"
                              value="1"
                            />
                            <button
                              className="action-plus"
                              title="Quantity Plus"
                            >
                              <i className="icofont-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 ">
                    <div className="col shadow">
                      <div className="product-card">
                        <div className="product-media">
                          <div className="product-label">
                            <label className="label-text rate">4.8</label>
                          </div>
                          <button className="product-wish wish">
                            <i className="fas fa-heart"></i>
                          </button>
                          <a className="product-image" href="#">
                            <img src={foodItem[1].item_image} alt="product" />
                          </a>
                          <div className="product-widget">
                            <a
                              title="Product View"
                              href="#"
                              className="fas fa-eye"
                              data-bs-toggle="modal"
                              data-bs-target="#product-view"
                            ></a>
                          </div>
                        </div>
                        <div className="product-content">
                          <div className="product-rating">
                            <i className="active icofont-star"></i>
                            <i className="active icofont-star"></i>
                            <i className="active icofont-star"></i>
                            <i className="active icofont-star"></i>
                            <i className="icofont-star"></i>
                            <a href="#">(3)</a>
                          </div>
                          <h6 className="product-name">
                            <a href="#">fresh green chilis</a>
                          </h6>
                          <h6 className="product-price">
                            <del>$34</del>
                            <span>
                              $28 <small>/piece</small>
                            </span>
                          </h6>
                          <button className="product-add" title="Add to Cart">
                            <i className="fas fa-shopping-basket"></i>
                            <span>add</span>
                          </button>
                          <div className="product-action">
                            <button
                              className="action-minus"
                              title="Quantity Minus"
                            >
                              <i className="icofont-minus"></i>
                            </button>
                            <input
                              className="action-input"
                              title="Quantity Number"
                              type="text"
                              name="quantity"
                              value="1"
                            />
                            <button
                              className="action-plus"
                              title="Quantity Plus"
                            >
                              <i className="icofont-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <a href="#" className="see_more">
                      {" "}
                      See more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4  rounded ">
            <div class="card">
              <header class="card-header sf_card_header">
                {" "}
                <h3>Buy Categories</h3>
              </header>
              <span></span>
              <div class="card-body searchform show-hide-content">
                <div class="d-flex flex-wrap">
                  <div className="col-md-6  ">
                    <div className="sf_product-card shadow">
                      <div className="sf_product-media">
                        <div className="sf_product-label">
                          <label className="label-text rate">4.8</label>
                        </div>
                        <button className="sf_product-wish wish">
                          <i className="fas fa-heart"></i>
                        </button>
                        <a className="sf_product-image" href="#">
                          <img src={foodItem[0].item_image} alt="product" />
                        </a>
                        <div className="sf_product-widget">
                          <a
                            title="Product View"
                            href="#"
                            className="fas fa-eye"
                            data-bs-toggle="modal"
                            data-bs-target="#product-view"
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6" style={{ marginLeft: -30 }}>
                    <div className="sf_product-card">
                      <div className="sf_product-media">
                        <div className="sf_product-label">
                          <label className="label-text rate">4.8</label>
                        </div>
                        <button className="sf_product-wish wish">
                          <i className="fas fa-heart"></i>
                        </button>
                        <a className="sf_product-image" href="#">
                          <img src={foodItem[2].item_image} alt="product" />
                        </a>
                        <div className="sf_product-widget">
                          <a
                            title="Product View"
                            href="#"
                            className="fas fa-eye"
                            data-bs-toggle="modal"
                            data-bs-target="#product-view"
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6  ">
                    <div className="sf_product-card shadow">
                      <div className="sf_product-media">
                        <div className="sf_product-label">
                          <label className="label-text rate">4.8</label>
                        </div>
                        <button className="sf_product-wish wish">
                          <i className="fas fa-heart"></i>
                        </button>
                        <a className="sf_product-image" href="#">
                          <img src={foodItem[0].item_image} alt="product" />
                        </a>
                        <div className="sf_product-widget">
                          <a
                            title="Product View"
                            href="#"
                            className="fas fa-eye"
                            data-bs-toggle="modal"
                            data-bs-target="#product-view"
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6" style={{ marginLeft: -30 }}>
                    <div className="sf_product-card">
                      <div className="sf_product-media">
                        <div className="sf_product-label">
                          <label className="label-text rate">4.8</label>
                        </div>
                        <button className="sf_product-wish wish">
                          <i className="fas fa-heart"></i>
                        </button>
                        <a className="sf_product-image" href="#">
                          <img src={foodItem[2].item_image} alt="product" />
                        </a>
                        <div className="sf_product-widget">
                          <a
                            title="Product View"
                            href="#"
                            className="fas fa-eye"
                            data-bs-toggle="modal"
                            data-bs-target="#product-view"
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mt-3">
                    <a href="#" style={{ fontWeight: "bold" }}>
                      {" "}
                      See more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New_Slider;