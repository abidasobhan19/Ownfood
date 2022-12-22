import React from "react";

const AllItem = () => {
  return (
    <section className="section niche-part">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>Browse by Top Niche</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="nav nav-tabs">
              <li>
                <a
                  href="#top-order"
                  className="tab-link active"
                  data-bs-toggle="tab"
                >
                  <i className="icofont-price"></i>
                  <span>top order</span>
                </a>
              </li>
              <li>
                <a href="#top-rate" className="tab-link" data-bs-toggle="tab">
                  <i className="icofont-star"></i>
                  <span>top rating</span>
                </a>
              </li>
              <li>
                <a href="#top-disc" className="tab-link" data-bs-toggle="tab">
                  <i className="icofont-sale-discount"></i>
                  <span>top discount</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-pane fade show active" id="top-order">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text order">314</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/01.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text order">314</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/02.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text order">314</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/03.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text order">314</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/04.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text order">314</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/05.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text order">314</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/06.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card product-disable">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text order">314</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/07.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text order">314</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/08.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text order">314</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/09.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text order">314</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/10.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="top-rate">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text rate">4.8</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/11.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text rate">4.8</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/12.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text rate">4.8</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/13.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text rate">4.8</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/14.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text rate">4.8</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/15.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text rate">4.8</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/16.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card product-disable">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text rate">4.8</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/17.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text rate">4.8</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/18.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text rate">4.8</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/19.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text rate">4.8</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/20.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-pane fade" id="top-disc">
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text off">-10%</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/06.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text off">-10%</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/07.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text off">-10%</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/08.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text off">-10%</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/09.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text off">-10%</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/10.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text off">-10%</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/11.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text off">-10%</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/12.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text off">-10%</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/13.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text off">-10%</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/14.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="product-card">
                <div className="product-media">
                  <div className="product-label">
                    <label className="label-text off">-10%</label>
                  </div>
                  <button className="product-wish wish">
                    <i className="fas fa-heart"></i>
                  </button>
                  <a className="product-image" href="product-video.html">
                    <img src="images/product/15.jpg" alt="product" />
                  </a>
                  <div className="product-widget">
                    <a
                      title="Product Compare"
                      href="compare.html"
                      className="fas fa-random"
                    ></a>
                    <a
                      title="Product Video"
                      href="https://youtu.be/9xzcVxSBbG8"
                      className="venobox fas fa-play vbox-item"
                      data-autoplay="true"
                      data-vbtype="video"
                    ></a>
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
                    <a href="product-video.html">(3)</a>
                  </div>
                  <h6 className="product-name">
                    <a href="product-video.html">fresh green chilis</a>
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
                    <button className="action-minus" title="Quantity Minus">
                      <i className="icofont-minus"></i>
                    </button>
                    <input
                      className="action-input"
                      title="Quantity Number"
                      type="text"
                      name="quantity"
                      value="1"
                    />
                    <button className="action-plus" title="Quantity Plus">
                      <i className="icofont-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="section-btn-25">
              <a href="shop-4column.html" className="btn btn-outline">
                <i className="fas fa-eye"></i>
                <span>show more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllItem;
