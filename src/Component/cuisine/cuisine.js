import React from "react";
// import "./cuisine.css";
import SimpleImage from "../../assets/img/simpleImage.jpg";

const Cuisine = () => {
  let items = document.querySelectorAll(".carousel .carousel-item");

  items.forEach((el) => {
    const minPerSlide = 4;
    let next = el.nextElementSibling;
    for (var i = 1; i < minPerSlide; i++) {
      if (!next) {
        // wrap carousel by using first child
        next = items[0];
      }
      let cloneChild = next.cloneNode(true);
      el.appendChild(cloneChild.children[0]);
      next = next.nextElementSibling;
    }
  });

  return (
    <section classNameName="product-item-section pb-5">
      <div classNameName="container">
        <div classNameName="row">
          <div classNameName="col-12 position-relative">
            <div classNameName="section-title-wrap">
              <h2 classNameName="section-title">Best Sellers</h2>
              <p>Add bestselling products to weekly line up</p>
            </div>
          </div>
        </div>
        {/*  */}

        <div className="product-slider-active product-border-box slick-initialized slick-slider">
          <button type="button" className="slick-prev slick-arrow" style={{}}>
            <i className="icon-rt-arrow-left-solid"> </i>
          </button>

          <div className="slick-list draggable">
            <div
              className="slick-track"
              style={{
                opacity: 1,
                width: 4403,
                transform: `translate3d(${-1295}, ${0},${0})`,
              }}
            >
              <div
                className="single-product-item slick-slide slick-cloned"
                data-slick-index="-5"
                id=""
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: 259 }}
              >
                <div className="single-product-item-image">
                  <a
                    href="product-details.html"
                    className="prodcut-images"
                    tabIndex="-1"
                  >
                    <img
                      className="primary-image"
                      src="assets/images/products/product-image-1-1.jpg"
                      alt=""
                    />
                    <img
                      className="secondary-image"
                      src="assets/images/products/product-image-1-2.jpg"
                      alt=""
                    />
                  </a>
                  <ul className="single-product-item-action">
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-heart2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        title="Quick View"
                        data-bs-toggle="modal"
                        data-bs-target="#quick-view-modal"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-eye2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list product-cart">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-basket-outline"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="single-product-item-content">
                  <div className="single-product-item-rating">
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid"></i>
                  </div>
                  <h6 className="single-product-item-title">
                    <a href="product-details.html" tabIndex="-1">
                      Dried mango
                    </a>
                  </h6>
                  <div className="single-product-item-price">
                    $10.00 - $70.00
                  </div>
                </div>
              </div>

              <div
                className="single-product-item slick-slide slick-cloned"
                data-slick-index="-4"
                id=""
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: 259 }}
              >
                <div className="single-product-item-image">
                  <a
                    href="product-details.html"
                    className="prodcut-images"
                    tabIndex="-1"
                  >
                    <img
                      className="primary-image"
                      src="assets/images/products/product-image-3-1.jpg"
                      alt=""
                    />
                    <img
                      className="secondary-image"
                      src="assets/images/products/product-image-3-2.jpg"
                      alt=""
                    />
                  </a>
                  <ul className="single-product-item-action">
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-heart2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        title="Quick View"
                        data-bs-toggle="modal"
                        data-bs-target="#quick-view-modal"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-eye2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list product-cart">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-basket-outline"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="single-product-item-content">
                  <div className="single-product-item-rating">
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid"></i>
                  </div>
                  <h6 className="single-product-item-title">
                    <a href="product-details.html" tabIndex="-1">
                      Dried banana
                    </a>
                  </h6>
                  <div className="single-product-item-price">
                    $60.00 - $80.00
                  </div>
                </div>
              </div>

              <div
                className="single-product-item slick-slide slick-cloned"
                data-slick-index="-3"
                id=""
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: 259 }}
              >
                <div className="single-product-item-image">
                  <a
                    href="product-details.html"
                    className="prodcut-images"
                    tabIndex="-1"
                  >
                    <img
                      className="primary-image"
                      src="assets/images/products/product-image-4-1.jpg"
                      alt=""
                    />
                    <img
                      className="secondary-image"
                      src="assets/images/products/product-image-4-2.jpg"
                      alt=""
                    />
                  </a>
                  <ul className="single-product-item-action">
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-heart2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        title="Quick View"
                        data-bs-toggle="modal"
                        data-bs-target="#quick-view-modal"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-eye2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list product-cart">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-basket-outline"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="single-product-item-content">
                  <div className="single-product-item-rating">
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid"></i>
                  </div>
                  <h6 className="single-product-item-title">
                    <a href="product-details.html" tabIndex="-1">
                      Crunchy crisps
                    </a>
                  </h6>
                  <div className="single-product-item-price">
                    $50.00 - $90.00
                  </div>
                </div>
              </div>

              <div
                className="single-product-item slick-slide slick-cloned"
                data-slick-index="-2"
                id=""
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: 259 }}
              >
                <div className="single-product-item-image">
                  <a
                    href="product-details.html"
                    className="prodcut-images"
                    tabIndex="-1"
                  >
                    <img
                      className="primary-image"
                      src="assets/images/products/product-image-5-1.jpg"
                      alt=""
                    />
                    <img
                      className="secondary-image"
                      src="assets/images/products/product-image-5-2.jpg"
                      alt=""
                    />
                  </a>
                  <ul className="single-product-item-action">
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-heart2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        title="Quick View"
                        data-bs-toggle="modal"
                        data-bs-target="#quick-view-modal"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-eye2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list product-cart">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-basket-outline"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="single-product-item-content">
                  <div className="single-product-item-rating">
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid"></i>
                  </div>
                  <h6 className="single-product-item-title">
                    <a href="product-details.html" tabIndex="-1">
                      Jewel cranberries
                    </a>
                  </h6>
                  <div className="single-product-item-price">
                    $60.00 - $67.00
                  </div>
                </div>
              </div>

              <div
                className="single-product-item slick-slide slick-cloned"
                data-slick-index="-1"
                id=""
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: 259 }}
              >
                <div className="single-product-item-image">
                  <a
                    href="product-details.html"
                    className="prodcut-images"
                    tabIndex="-1"
                  >
                    <img
                      className="primary-image"
                      src="assets/images/products/product-image-6-1.jpg"
                      alt=""
                    />
                    <img
                      className="secondary-image"
                      src="assets/images/products/product-image-6-2.jpg"
                      alt=""
                    />
                  </a>
                  <ul className="single-product-item-action">
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-heart2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        title="Quick View"
                        data-bs-toggle="modal"
                        data-bs-target="#quick-view-modal"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-eye2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list product-cart">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-basket-outline"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="single-product-item-content">
                  <div className="single-product-item-rating">
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid"></i>
                  </div>
                  <h6 className="single-product-item-title">
                    <a href="product-details.html" tabIndex="-1">
                      Fresh Broccoli
                    </a>
                  </h6>
                  <div className="single-product-item-price">
                    $60.00 - $68.00
                  </div>
                </div>
              </div>

              <div
                className="single-product-item slick-slide slick-current slick-active"
                data-slick-index="0"
                aria-hidden="false"
                tabIndex="0"
                style={{ width: 259 }}
              >
                <div className="single-product-item-image">
                  <a
                    href="product-details.html"
                    className="prodcut-images"
                    tabIndex="0"
                  >
                    <img
                      className="primary-image"
                      src="assets/images/products/product-image-2-1.jpg"
                      alt=""
                    />
                    <img
                      className="secondary-image"
                      src="assets/images/products/product-image-2-2.jpg"
                      alt=""
                    />
                  </a>
                  <ul className="single-product-item-action">
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="0"
                      >
                        <i className="icon-rt-heart2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        title="Quick View"
                        data-bs-toggle="modal"
                        data-bs-target="#quick-view-modal"
                        className="single-product-item-action-link"
                        tabIndex="0"
                      >
                        <i className="icon-rt-eye2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list product-cart">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="0"
                      >
                        <i className="icon-rt-basket-outline"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="single-product-item-content">
                  <div className="single-product-item-rating">
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid"></i>
                  </div>
                  <h6 className="single-product-item-title">
                    <a href="product-details.html" tabIndex="0">
                      Fresh organic kiwi
                    </a>
                  </h6>
                  <div className="single-product-item-price">
                    $10.00 - $70.00
                  </div>
                </div>
              </div>

              <div
                className="single-product-item slick-slide slick-active"
                data-slick-index="1"
                aria-hidden="false"
                tabIndex="0"
                style={{ width: 259 }}
              >
                <div className="single-product-item-image">
                  <a
                    href="product-details.html"
                    className="prodcut-images"
                    tabIndex="0"
                  >
                    <img
                      className="primary-image"
                      src="assets/images/products/product-image-1-1.jpg"
                      alt=""
                    />
                    <img
                      className="secondary-image"
                      src="assets/images/products/product-image-1-2.jpg"
                      alt=""
                    />
                  </a>
                  <ul className="single-product-item-action">
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="0"
                      >
                        <i className="icon-rt-heart2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        title="Quick View"
                        data-bs-toggle="modal"
                        data-bs-target="#quick-view-modal"
                        className="single-product-item-action-link"
                        tabIndex="0"
                      >
                        <i className="icon-rt-eye2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list product-cart">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="0"
                      >
                        <i className="icon-rt-basket-outline"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="single-product-item-content">
                  <div className="single-product-item-rating">
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid"></i>
                  </div>
                  <h6 className="single-product-item-title">
                    <a href="product-details.html" tabIndex="0">
                      Dried mango
                    </a>
                  </h6>
                  <div className="single-product-item-price">
                    $10.00 - $70.00
                  </div>
                </div>
              </div>

              <div
                className="single-product-item slick-slide slick-active"
                data-slick-index="2"
                aria-hidden="false"
                tabIndex="0"
                style={{ width: 259 }}
              >
                <div className="single-product-item-image">
                  <a
                    href="product-details.html"
                    className="prodcut-images"
                    tabIndex="0"
                  >
                    <img
                      className="primary-image"
                      src="assets/images/products/product-image-3-1.jpg"
                      alt=""
                    />
                    <img
                      className="secondary-image"
                      src="assets/images/products/product-image-3-2.jpg"
                      alt=""
                    />
                  </a>
                  <ul className="single-product-item-action">
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="0"
                      >
                        <i className="icon-rt-heart2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        title="Quick View"
                        data-bs-toggle="modal"
                        data-bs-target="#quick-view-modal"
                        className="single-product-item-action-link"
                        tabIndex="0"
                      >
                        <i className="icon-rt-eye2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list product-cart">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="0"
                      >
                        <i className="icon-rt-basket-outline"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="single-product-item-content">
                  <div className="single-product-item-rating">
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid"></i>
                  </div>
                  <h6 className="single-product-item-title">
                    <a href="product-details.html" tabIndex="0">
                      Dried banana
                    </a>
                  </h6>
                  <div className="single-product-item-price">
                    $60.00 - $80.00
                  </div>
                </div>
              </div>

              <div
                className="single-product-item slick-slide slick-active"
                data-slick-index="3"
                aria-hidden="false"
                tabIndex="0"
                style={{ width: 259 }}
              >
                <div className="single-product-item-image">
                  <a
                    href="product-details.html"
                    className="prodcut-images"
                    tabIndex="0"
                  >
                    <img
                      className="primary-image"
                      src="assets/images/products/product-image-4-1.jpg"
                      alt=""
                    />
                    <img
                      className="secondary-image"
                      src="assets/images/products/product-image-4-2.jpg"
                      alt=""
                    />
                  </a>
                  <ul className="single-product-item-action">
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="0"
                      >
                        <i className="icon-rt-heart2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        title="Quick View"
                        data-bs-toggle="modal"
                        data-bs-target="#quick-view-modal"
                        className="single-product-item-action-link"
                        tabIndex="0"
                      >
                        <i className="icon-rt-eye2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list product-cart">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="0"
                      >
                        <i className="icon-rt-basket-outline"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="single-product-item-content">
                  <div className="single-product-item-rating">
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid"></i>
                  </div>
                  <h6 className="single-product-item-title">
                    <a href="product-details.html" tabIndex="0">
                      Crunchy crisps
                    </a>
                  </h6>
                  <div className="single-product-item-price">
                    $50.00 - $90.00
                  </div>
                </div>
              </div>

              <div
                className="single-product-item slick-slide slick-active"
                data-slick-index="4"
                aria-hidden="false"
                tabIndex="0"
                style={{ width: 259 }}
              >
                <div className="single-product-item-image">
                  <a
                    href="product-details.html"
                    className="prodcut-images"
                    tabIndex="0"
                  >
                    <img
                      className="primary-image"
                      src="assets/images/products/product-image-5-1.jpg"
                      alt=""
                    />
                    <img
                      className="secondary-image"
                      src="assets/images/products/product-image-5-2.jpg"
                      alt=""
                    />
                  </a>
                  <ul className="single-product-item-action">
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="0"
                      >
                        <i className="icon-rt-heart2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        title="Quick View"
                        data-bs-toggle="modal"
                        data-bs-target="#quick-view-modal"
                        className="single-product-item-action-link"
                        tabIndex="0"
                      >
                        <i className="icon-rt-eye2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list product-cart">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="0"
                      >
                        <i className="icon-rt-basket-outline"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="single-product-item-content">
                  <div className="single-product-item-rating">
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid"></i>
                  </div>
                  <h6 className="single-product-item-title">
                    <a href="product-details.html" tabIndex="0">
                      Jewel cranberries
                    </a>
                  </h6>
                  <div className="single-product-item-price">
                    $60.00 - $67.00
                  </div>
                </div>
              </div>

              <div
                className="single-product-item slick-slide"
                data-slick-index="5"
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: 259 }}
              >
                <div className="single-product-item-image">
                  <a
                    href="product-details.html"
                    className="prodcut-images"
                    tabIndex="-1"
                  >
                    <img
                      className="primary-image"
                      src="assets/images/products/product-image-6-1.jpg"
                      alt=""
                    />
                    <img
                      className="secondary-image"
                      src="assets/images/products/product-image-6-2.jpg"
                      alt=""
                    />
                  </a>
                  <ul className="single-product-item-action">
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-heart2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        title="Quick View"
                        data-bs-toggle="modal"
                        data-bs-target="#quick-view-modal"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-eye2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list product-cart">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-basket-outline"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="single-product-item-content">
                  <div className="single-product-item-rating">
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid"></i>
                  </div>
                  <h6 className="single-product-item-title">
                    <a href="product-details.html" tabIndex="-1">
                      Fresh Broccoli
                    </a>
                  </h6>
                  <div className="single-product-item-price">
                    $60.00 - $68.00
                  </div>
                </div>
              </div>

              <div
                className="single-product-item slick-slide slick-cloned"
                data-slick-index="6"
                id=""
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: 259 }}
              >
                <div className="single-product-item-image">
                  <a
                    href="product-details.html"
                    className="prodcut-images"
                    tabIndex="-1"
                  >
                    <img
                      className="primary-image"
                      src="assets/images/products/product-image-2-1.jpg"
                      alt=""
                    />
                    <img
                      className="secondary-image"
                      src="assets/images/products/product-image-2-2.jpg"
                      alt=""
                    />
                  </a>
                  <ul className="single-product-item-action">
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-heart2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        title="Quick View"
                        data-bs-toggle="modal"
                        data-bs-target="#quick-view-modal"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-eye2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list product-cart">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-basket-outline"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="single-product-item-content">
                  <div className="single-product-item-rating">
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid"></i>
                  </div>
                  <h6 className="single-product-item-title">
                    <a href="product-details.html" tabIndex="-1">
                      Fresh organic kiwi
                    </a>
                  </h6>
                  <div className="single-product-item-price">
                    $10.00 - $70.00
                  </div>
                </div>
              </div>

              <div
                className="single-product-item slick-slide slick-cloned"
                data-slick-index="7"
                id=""
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: 259 }}
              >
                <div className="single-product-item-image">
                  <a
                    href="product-details.html"
                    className="prodcut-images"
                    tabIndex="-1"
                  >
                    <img
                      className="primary-image"
                      src="assets/images/products/product-image-1-1.jpg"
                      alt=""
                    />
                    <img
                      className="secondary-image"
                      src="assets/images/products/product-image-1-2.jpg"
                      alt=""
                    />
                  </a>
                  <ul className="single-product-item-action">
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-heart2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        title="Quick View"
                        data-bs-toggle="modal"
                        data-bs-target="#quick-view-modal"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-eye2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list product-cart">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-basket-outline"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="single-product-item-content">
                  <div className="single-product-item-rating">
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid"></i>
                  </div>
                  <h6 className="single-product-item-title">
                    <a href="product-details.html" tabIndex="-1">
                      Dried mango
                    </a>
                  </h6>
                  <div className="single-product-item-price">
                    $10.00 - $70.00
                  </div>
                </div>
              </div>

              <div
                className="single-product-item slick-slide slick-cloned"
                data-slick-index="8"
                id=""
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: 259 }}
              >
                <div className="single-product-item-image">
                  <a
                    href="product-details.html"
                    className="prodcut-images"
                    tabIndex="-1"
                  >
                    <img
                      className="primary-image"
                      src="assets/images/products/product-image-3-1.jpg"
                      alt=""
                    />
                    <img
                      className="secondary-image"
                      src="assets/images/products/product-image-3-2.jpg"
                      alt=""
                    />
                  </a>
                  <ul className="single-product-item-action">
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-heart2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        title="Quick View"
                        data-bs-toggle="modal"
                        data-bs-target="#quick-view-modal"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-eye2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list product-cart">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-basket-outline"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="single-product-item-content">
                  <div className="single-product-item-rating">
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid"></i>
                  </div>
                  <h6 className="single-product-item-title">
                    <a href="product-details.html" tabIndex="-1">
                      Dried banana
                    </a>
                  </h6>
                  <div className="single-product-item-price">
                    $60.00 - $80.00
                  </div>
                </div>
              </div>

              <div
                className="single-product-item slick-slide slick-cloned"
                data-slick-index="9"
                id=""
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: 259 }}
              >
                <div className="single-product-item-image">
                  <a
                    href="product-details.html"
                    className="prodcut-images"
                    tabIndex="-1"
                  >
                    <img
                      className="primary-image"
                      src="assets/images/products/product-image-4-1.jpg"
                      alt=""
                    />
                    <img
                      className="secondary-image"
                      src="assets/images/products/product-image-4-2.jpg"
                      alt=""
                    />
                  </a>
                  <ul className="single-product-item-action">
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-heart2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        title="Quick View"
                        data-bs-toggle="modal"
                        data-bs-target="#quick-view-modal"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-eye2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list product-cart">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-basket-outline"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="single-product-item-content">
                  <div className="single-product-item-rating">
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid"></i>
                  </div>
                  <h6 className="single-product-item-title">
                    <a href="product-details.html" tabIndex="-1">
                      Crunchy crisps
                    </a>
                  </h6>
                  <div className="single-product-item-price">
                    $50.00 - $90.00
                  </div>
                </div>
              </div>

              <div
                className="single-product-item slick-slide slick-cloned"
                data-slick-index="10"
                id=""
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: 259 }}
              >
                <div className="single-product-item-image">
                  <a
                    href="product-details.html"
                    className="prodcut-images"
                    tabIndex="-1"
                  >
                    <img
                      className="primary-image"
                      src="assets/images/products/product-image-5-1.jpg"
                      alt=""
                    />
                    <img
                      className="secondary-image"
                      src="assets/images/products/product-image-5-2.jpg"
                      alt=""
                    />
                  </a>
                  <ul className="single-product-item-action">
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-heart2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        title="Quick View"
                        data-bs-toggle="modal"
                        data-bs-target="#quick-view-modal"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-eye2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list product-cart">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-basket-outline"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="single-product-item-content">
                  <div className="single-product-item-rating">
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid"></i>
                  </div>
                  <h6 className="single-product-item-title">
                    <a href="product-details.html" tabIndex="-1">
                      Jewel cranberries
                    </a>
                  </h6>
                  <div className="single-product-item-price">
                    $60.00 - $67.00
                  </div>
                </div>
              </div>

              <div
                className="single-product-item slick-slide slick-cloned"
                data-slick-index="11"
                id=""
                aria-hidden="true"
                tabIndex="-1"
                style={{ width: 259 }}
              >
                <div className="single-product-item-image">
                  <a
                    href="product-details.html"
                    className="prodcut-images"
                    tabIndex="-1"
                  >
                    <img
                      className="primary-image"
                      src="assets/images/products/product-image-6-1.jpg"
                      alt=""
                    />
                    <img
                      className="secondary-image"
                      src="assets/images/products/product-image-6-2.jpg"
                      alt=""
                    />
                  </a>
                  <ul className="single-product-item-action">
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-heart2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list">
                      <a
                        href="#"
                        title="Quick View"
                        data-bs-toggle="modal"
                        data-bs-target="#quick-view-modal"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-eye2"></i>
                      </a>
                    </li>
                    <li className="single-product-item-action-list product-cart">
                      <a
                        href="#"
                        className="single-product-item-action-link"
                        tabIndex="-1"
                      >
                        <i className="icon-rt-basket-outline"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="single-product-item-content">
                  <div className="single-product-item-rating">
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid select-star"></i>
                    <i className="icon-rt-star-solid"></i>
                  </div>
                  <h6 className="single-product-item-title">
                    <a href="product-details.html" tabIndex="-1">
                      Fresh Broccoli
                    </a>
                  </h6>
                  <div className="single-product-item-price">
                    $60.00 - $68.00
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button type="button" className="slick-next slick-arrow" style={{}}>
            <i className="icon-rt-arrow-right-solid"> </i>
          </button>
        </div>

        {/*  */}
      </div>
    </section>
  );
};

export default Cuisine;
