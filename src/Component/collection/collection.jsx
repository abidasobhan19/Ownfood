import React from "react";

const Collection = () => {
  return (
    <section class="section newitem-part">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="section-heading">
              <h2>collected new items</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <ul class="new-slider slider-arrow slick-initialized slick-slider">
              <i
                class="icofont-arrow-right dandik slick-arrow"
                style={{ display: "block" }}
              ></i>
              <div class="slick-list draggable">
                <div
                  class="slick-track"
                  style={{
                    opacity: 1,
                    width: 3944,
                    transform: ` translate3d(${-2320} ${0} ${0})`,
                  }}
                >
                  <li
                    class="slick-slide slick-cloned"
                    data-slick-index="-5"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{ width: 208 }}
                  >
                    <div class="product-card">
                      <div class="product-media">
                        <div class="product-label">
                          <label class="label-text new">new</label>
                        </div>
                        <button class="product-wish wish" tabIndex="-1">
                          <i class="fas fa-heart"></i>
                        </button>
                        <a
                          class="product-image"
                          href="product-video.html"
                          tabIndex="-1"
                        >
                          <img src="images/product/16.jpg" alt="product" />
                        </a>
                        <div class="product-widget">
                          <a
                            title="Product Compare"
                            href="compare.html"
                            class="fas fa-random"
                            tabIndex="-1"
                          ></a>
                          <a
                            title="Product Video"
                            href="#"
                            class="venobox fas fa-play vbox-item"
                            data-autoplay="true"
                            data-vbtype="video"
                            tabIndex="-1"
                          ></a>
                          <a
                            title="Product View"
                            href="#"
                            class="fas fa-eye"
                            data-bs-toggle="modal"
                            data-bs-target="#product-view"
                            tabIndex="-1"
                          ></a>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-rating">
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="icofont-star"></i>
                          <a href="product-video.html" tabIndex="-1">
                            (3)
                          </a>
                        </div>
                        <h6 class="product-name">
                          <a href="product-video.html" tabIndex="-1">
                            fresh green chilis
                          </a>
                        </h6>
                        <h6 class="product-price">
                          <del>$34</del>
                          <span>
                            $28 <small>/piece</small>
                          </span>
                        </h6>
                        <button
                          class="product-add"
                          title="Add to Cart"
                          tabIndex="-1"
                        >
                          <i class="fas fa-shopping-basket"></i>
                          <span>add</span>
                        </button>
                        <div class="product-action">
                          <button
                            class="action-minus"
                            title="Quantity Minus"
                            tabIndex="-1"
                          >
                            <i class="icofont-minus"></i>
                          </button>
                          <input
                            class="action-input"
                            title="Quantity Number"
                            type="text"
                            name="quantity"
                            value="1"
                            tabIndex="-1"
                          />
                          <button
                            class="action-plus"
                            title="Quantity Plus"
                            tabIndex="-1"
                          >
                            <i class="icofont-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="slick-slide slick-cloned"
                    data-slick-index="-4"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{ width: 208 }}
                  >
                    <div class="product-card">
                      <div class="product-media">
                        <div class="product-label">
                          <label class="label-text new">new</label>
                        </div>
                        <button class="product-wish wish" tabIndex="-1">
                          <i class="fas fa-heart"></i>
                        </button>
                        <a
                          class="product-image"
                          href="product-video.html"
                          tabIndex="-1"
                        >
                          <img src="images/product/17.jpg" alt="product" />
                        </a>
                        <div class="product-widget">
                          <a
                            title="Product Compare"
                            href="compare.html"
                            class="fas fa-random"
                            tabIndex="-1"
                          ></a>
                          <a
                            title="Product Video"
                            href="#"
                            class="venobox fas fa-play vbox-item"
                            data-autoplay="true"
                            data-vbtype="video"
                            tabIndex="-1"
                          ></a>
                          <a
                            title="Product View"
                            href="#"
                            class="fas fa-eye"
                            data-bs-toggle="modal"
                            data-bs-target="#product-view"
                            tabIndex="-1"
                          ></a>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-rating">
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="icofont-star"></i>
                          <a href="product-video.html" tabIndex="-1">
                            (3)
                          </a>
                        </div>
                        <h6 class="product-name">
                          <a href="product-video.html" tabIndex="-1">
                            fresh green chilis
                          </a>
                        </h6>
                        <h6 class="product-price">
                          <del>$34</del>
                          <span>
                            $28 <small>/piece</small>
                          </span>
                        </h6>
                        <button
                          class="product-add"
                          title="Add to Cart"
                          tabIndex="-1"
                        >
                          <i class="fas fa-shopping-basket"></i>
                          <span>add</span>
                        </button>
                        <div class="product-action">
                          <button
                            class="action-minus"
                            title="Quantity Minus"
                            tabIndex="-1"
                          >
                            <i class="icofont-minus"></i>
                          </button>
                          <input
                            class="action-input"
                            title="Quantity Number"
                            type="text"
                            name="quantity"
                            value="1"
                            tabIndex="-1"
                          />
                          <button
                            class="action-plus"
                            title="Quantity Plus"
                            tabIndex="-1"
                          >
                            <i class="icofont-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="slick-slide slick-cloned"
                    data-slick-index="-3"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{ width: 208 }}
                  >
                    <div class="product-card">
                      <div class="product-media">
                        <div class="product-label">
                          <label class="label-text new">new</label>
                        </div>
                        <button class="product-wish wish" tabIndex="-1">
                          <i class="fas fa-heart"></i>
                        </button>
                        <a
                          class="product-image"
                          href="product-video.html"
                          tabIndex="-1"
                        >
                          <img src="images/product/18.jpg" alt="product" />
                        </a>
                        <div class="product-widget">
                          <a
                            title="Product Compare"
                            href="compare.html"
                            class="fas fa-random"
                            tabIndex="-1"
                          ></a>
                          <a
                            title="Product Video"
                            href="#"
                            class="venobox fas fa-play vbox-item"
                            data-autoplay="true"
                            data-vbtype="video"
                            tabIndex="-1"
                          ></a>
                          <a
                            title="Product View"
                            href="#"
                            class="fas fa-eye"
                            data-bs-toggle="modal"
                            data-bs-target="#product-view"
                            tabIndex="-1"
                          ></a>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-rating">
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="icofont-star"></i>
                          <a href="product-video.html" tabIndex="-1">
                            (3)
                          </a>
                        </div>
                        <h6 class="product-name">
                          <a href="product-video.html" tabIndex="-1">
                            fresh green chilis
                          </a>
                        </h6>
                        <h6 class="product-price">
                          <del>$34</del>
                          <span>
                            $28 <small>/piece</small>
                          </span>
                        </h6>
                        <button
                          class="product-add"
                          title="Add to Cart"
                          tabIndex="-1"
                        >
                          <i class="fas fa-shopping-basket"></i>
                          <span>add</span>
                        </button>
                        <div class="product-action">
                          <button
                            class="action-minus"
                            title="Quantity Minus"
                            tabIndex="-1"
                          >
                            <i class="icofont-minus"></i>
                          </button>
                          <input
                            class="action-input"
                            title="Quantity Number"
                            type="text"
                            name="quantity"
                            value="1"
                            tabIndex="-1"
                          />
                          <button
                            class="action-plus"
                            title="Quantity Plus"
                            tabIndex="-1"
                          >
                            <i class="icofont-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="slick-slide slick-cloned"
                    data-slick-index="-2"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{ width: 208 }}
                  >
                    <div class="product-card">
                      <div class="product-media">
                        <div class="product-label">
                          <label class="label-text new">new</label>
                        </div>
                        <button class="product-wish wish" tabIndex="-1">
                          <i class="fas fa-heart"></i>
                        </button>
                        <a
                          class="product-image"
                          href="product-video.html"
                          tabIndex="-1"
                        >
                          <img src="images/product/19.jpg" alt="product" />
                        </a>
                        <div class="product-widget">
                          <a
                            title="Product Compare"
                            href="compare.html"
                            class="fas fa-random"
                            tabIndex="-1"
                          ></a>
                          <a
                            title="Product Video"
                            href="#"
                            class="venobox fas fa-play vbox-item"
                            data-autoplay="true"
                            data-vbtype="video"
                            tabIndex="-1"
                          ></a>
                          <a
                            title="Product View"
                            href="#"
                            class="fas fa-eye"
                            data-bs-toggle="modal"
                            data-bs-target="#product-view"
                            tabIndex="-1"
                          ></a>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-rating">
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="icofont-star"></i>
                          <a href="product-video.html" tabIndex="-1">
                            (3)
                          </a>
                        </div>
                        <h6 class="product-name">
                          <a href="product-video.html" tabIndex="-1">
                            fresh green chilis
                          </a>
                        </h6>
                        <h6 class="product-price">
                          <del>$34</del>
                          <span>
                            $28 <small>/piece</small>
                          </span>
                        </h6>
                        <button
                          class="product-add"
                          title="Add to Cart"
                          tabIndex="-1"
                        >
                          <i class="fas fa-shopping-basket"></i>
                          <span>add</span>
                        </button>
                        <div class="product-action">
                          <button
                            class="action-minus"
                            title="Quantity Minus"
                            tabIndex="-1"
                          >
                            <i class="icofont-minus"></i>
                          </button>
                          <input
                            class="action-input"
                            title="Quantity Number"
                            type="text"
                            name="quantity"
                            value="1"
                            tabIndex="-1"
                          />
                          <button
                            class="action-plus"
                            title="Quantity Plus"
                            tabIndex="-1"
                          >
                            <i class="icofont-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="slick-slide slick-cloned"
                    data-slick-index="-1"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{ width: 208 }}
                  >
                    <div class="product-card">
                      <div class="product-media">
                        <div class="product-label">
                          <label class="label-text new">new</label>
                        </div>
                        <button class="product-wish wish" tabIndex="-1">
                          <i class="fas fa-heart"></i>
                        </button>
                        <a
                          class="product-image"
                          href="product-video.html"
                          tabIndex="-1"
                        >
                          <img src="images/product/20.jpg" alt="product" />
                        </a>
                        <div class="product-widget">
                          <a
                            title="Product Compare"
                            href="compare.html"
                            class="fas fa-random"
                            tabIndex="-1"
                          ></a>
                          <a
                            title="Product Video"
                            href="#"
                            class="venobox fas fa-play vbox-item"
                            data-autoplay="true"
                            data-vbtype="video"
                            tabIndex="-1"
                          ></a>
                          <a
                            title="Product View"
                            href="#"
                            class="fas fa-eye"
                            data-bs-toggle="modal"
                            data-bs-target="#product-view"
                            tabIndex="-1"
                          ></a>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-rating">
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="icofont-star"></i>
                          <a href="product-video.html" tabIndex="-1">
                            (3)
                          </a>
                        </div>
                        <h6 class="product-name">
                          <a href="product-video.html" tabIndex="-1">
                            fresh green chilis
                          </a>
                        </h6>
                        <h6 class="product-price">
                          <del>$34</del>
                          <span>
                            $28 <small>/piece</small>
                          </span>
                        </h6>
                        <button
                          class="product-add"
                          title="Add to Cart"
                          tabIndex="-1"
                        >
                          <i class="fas fa-shopping-basket"></i>
                          <span>add</span>
                        </button>
                        <div class="product-action">
                          <button
                            class="action-minus"
                            title="Quantity Minus"
                            tabIndex="-1"
                          >
                            <i class="icofont-minus"></i>
                          </button>
                          <input
                            class="action-input"
                            title="Quantity Number"
                            type="text"
                            name="quantity"
                            value="1"
                            tabIndex="-1"
                          />
                          <button
                            class="action-plus"
                            title="Quantity Plus"
                            tabIndex="-1"
                          >
                            <i class="icofont-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="slick-slide"
                    data-slick-index="0"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{ width: 208 }}
                  >
                    <div class="product-card">
                      <div class="product-media">
                        <div class="product-label">
                          <label class="label-text new">new</label>
                        </div>
                        <button class="product-wish wish" tabIndex="-1">
                          <i class="fas fa-heart"></i>
                        </button>
                        <a
                          class="product-image"
                          href="product-video.html"
                          tabIndex="-1"
                        >
                          <img src="images/product/15.jpg" alt="product" />
                        </a>
                        <div class="product-widget">
                          <a
                            title="Product Compare"
                            href="compare.html"
                            class="fas fa-random"
                            tabIndex="-1"
                          ></a>
                          <a
                            title="Product Video"
                            href="#"
                            class="venobox fas fa-play vbox-item"
                            data-autoplay="true"
                            data-vbtype="video"
                            tabIndex="-1"
                          ></a>
                          <a
                            title="Product View"
                            href="#"
                            class="fas fa-eye"
                            data-bs-toggle="modal"
                            data-bs-target="#product-view"
                            tabIndex="-1"
                          ></a>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-rating">
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="icofont-star"></i>
                          <a href="product-video.html" tabIndex="-1">
                            (3)
                          </a>
                        </div>
                        <h6 class="product-name">
                          <a href="product-video.html" tabIndex="-1">
                            fresh green chilis
                          </a>
                        </h6>
                        <h6 class="product-price">
                          <del>$34</del>
                          <span>
                            $28 <small>/piece</small>
                          </span>
                        </h6>
                        <button
                          class="product-add"
                          title="Add to Cart"
                          tabIndex="-1"
                        >
                          <i class="fas fa-shopping-basket"></i>
                          <span>add</span>
                        </button>
                        <div class="product-action">
                          <button
                            class="action-minus"
                            title="Quantity Minus"
                            tabIndex="-1"
                          >
                            <i class="icofont-minus"></i>
                          </button>
                          <input
                            class="action-input"
                            title="Quantity Number"
                            type="text"
                            name="quantity"
                            value="1"
                            tabIndex="-1"
                          />
                          <button
                            class="action-plus"
                            title="Quantity Plus"
                            tabIndex="-1"
                          >
                            <i class="icofont-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="slick-slide"
                    data-slick-index="1"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{ width: 208 }}
                  >
                    <div class="product-card">
                      <div class="product-media">
                        <div class="product-label">
                          <label class="label-text new">new</label>
                        </div>
                        <button class="product-wish wish" tabIndex="-1">
                          <i class="fas fa-heart"></i>
                        </button>
                        <a
                          class="product-image"
                          href="product-video.html"
                          tabIndex="-1"
                        >
                          <img src="images/product/16.jpg" alt="product" />
                        </a>
                        <div class="product-widget">
                          <a
                            title="Product Compare"
                            href="compare.html"
                            class="fas fa-random"
                            tabIndex="-1"
                          ></a>
                          <a
                            title="Product Video"
                            href="#"
                            class="venobox fas fa-play vbox-item"
                            data-autoplay="true"
                            data-vbtype="video"
                            tabIndex="-1"
                          ></a>
                          <a
                            title="Product View"
                            href="#"
                            class="fas fa-eye"
                            data-bs-toggle="modal"
                            data-bs-target="#product-view"
                            tabIndex="-1"
                          ></a>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-rating">
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="icofont-star"></i>
                          <a href="product-video.html" tabIndex="-1">
                            (3)
                          </a>
                        </div>
                        <h6 class="product-name">
                          <a href="product-video.html" tabIndex="-1">
                            fresh green chilis
                          </a>
                        </h6>
                        <h6 class="product-price">
                          <del>$34</del>
                          <span>
                            $28 <small>/piece</small>
                          </span>
                        </h6>
                        <button
                          class="product-add"
                          title="Add to Cart"
                          tabIndex="-1"
                        >
                          <i class="fas fa-shopping-basket"></i>
                          <span>add</span>
                        </button>
                        <div class="product-action">
                          <button
                            class="action-minus"
                            title="Quantity Minus"
                            tabIndex="-1"
                          >
                            <i class="icofont-minus"></i>
                          </button>
                          <input
                            class="action-input"
                            title="Quantity Number"
                            type="text"
                            name="quantity"
                            value="1"
                            tabIndex="-1"
                          />
                          <button
                            class="action-plus"
                            title="Quantity Plus"
                            tabIndex="-1"
                          >
                            <i class="icofont-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="slick-slide"
                    data-slick-index="2"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{ width: 208 }}
                  >
                    <div class="product-card">
                      <div class="product-media">
                        <div class="product-label">
                          <label class="label-text new">new</label>
                        </div>
                        <button class="product-wish wish" tabIndex="-1">
                          <i class="fas fa-heart"></i>
                        </button>
                        <a
                          class="product-image"
                          href="product-video.html"
                          tabIndex="-1"
                        >
                          <img src="images/product/17.jpg" alt="product" />
                        </a>
                        <div class="product-widget">
                          <a
                            title="Product Compare"
                            href="compare.html"
                            class="fas fa-random"
                            tabIndex="-1"
                          ></a>
                          <a
                            title="Product Video"
                            href="#"
                            class="venobox fas fa-play vbox-item"
                            data-autoplay="true"
                            data-vbtype="video"
                            tabIndex="-1"
                          ></a>
                          <a
                            title="Product View"
                            href="#"
                            class="fas fa-eye"
                            data-bs-toggle="modal"
                            data-bs-target="#product-view"
                            tabIndex="-1"
                          ></a>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-rating">
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="icofont-star"></i>
                          <a href="product-video.html" tabIndex="-1">
                            (3)
                          </a>
                        </div>
                        <h6 class="product-name">
                          <a href="product-video.html" tabIndex="-1">
                            fresh green chilis
                          </a>
                        </h6>
                        <h6 class="product-price">
                          <del>$34</del>
                          <span>
                            $28 <small>/piece</small>
                          </span>
                        </h6>
                        <button
                          class="product-add"
                          title="Add to Cart"
                          tabIndex="-1"
                        >
                          <i class="fas fa-shopping-basket"></i>
                          <span>add</span>
                        </button>
                        <div class="product-action">
                          <button
                            class="action-minus"
                            title="Quantity Minus"
                            tabIndex="-1"
                          >
                            <i class="icofont-minus"></i>
                          </button>
                          <input
                            class="action-input"
                            title="Quantity Number"
                            type="text"
                            name="quantity"
                            value="1"
                            tabIndex="-1"
                          />
                          <button
                            class="action-plus"
                            title="Quantity Plus"
                            tabIndex="-1"
                          >
                            <i class="icofont-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="slick-slide"
                    data-slick-index="3"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{ width: 208 }}
                  >
                    <div class="product-card">
                      <div class="product-media">
                        <div class="product-label">
                          <label class="label-text new">new</label>
                        </div>
                        <button class="product-wish wish" tabIndex="-1">
                          <i class="fas fa-heart"></i>
                        </button>
                        <a
                          class="product-image"
                          href="product-video.html"
                          tabIndex="-1"
                        >
                          <img src="images/product/18.jpg" alt="product" />
                        </a>
                        <div class="product-widget">
                          <a
                            title="Product Compare"
                            href="compare.html"
                            class="fas fa-random"
                            tabIndex="-1"
                          ></a>
                          <a
                            title="Product Video"
                            href="#"
                            class="venobox fas fa-play vbox-item"
                            data-autoplay="true"
                            data-vbtype="video"
                            tabIndex="-1"
                          ></a>
                          <a
                            title="Product View"
                            href="#"
                            class="fas fa-eye"
                            data-bs-toggle="modal"
                            data-bs-target="#product-view"
                            tabIndex="-1"
                          ></a>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-rating">
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="icofont-star"></i>
                          <a href="product-video.html" tabIndex="-1">
                            (3)
                          </a>
                        </div>
                        <h6 class="product-name">
                          <a href="product-video.html" tabIndex="-1">
                            fresh green chilis
                          </a>
                        </h6>
                        <h6 class="product-price">
                          <del>$34</del>
                          <span>
                            $28 <small>/piece</small>
                          </span>
                        </h6>
                        <button
                          class="product-add"
                          title="Add to Cart"
                          tabIndex="-1"
                        >
                          <i class="fas fa-shopping-basket"></i>
                          <span>add</span>
                        </button>
                        <div class="product-action">
                          <button
                            class="action-minus"
                            title="Quantity Minus"
                            tabIndex="-1"
                          >
                            <i class="icofont-minus"></i>
                          </button>
                          <input
                            class="action-input"
                            title="Quantity Number"
                            type="text"
                            name="quantity"
                            value="1"
                            tabIndex="-1"
                          />
                          <button
                            class="action-plus"
                            title="Quantity Plus"
                            tabIndex="-1"
                          >
                            <i class="icofont-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="slick-slide"
                    data-slick-index="4"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{ width: 208 }}
                  >
                    <div class="product-card">
                      <div class="product-media">
                        <div class="product-label">
                          <label class="label-text new">new</label>
                        </div>
                        <button class="product-wish wish" tabIndex="-1">
                          <i class="fas fa-heart"></i>
                        </button>
                        <a
                          class="product-image"
                          href="product-video.html"
                          tabIndex="-1"
                        >
                          <img src="images/product/19.jpg" alt="product" />
                        </a>
                        <div class="product-widget">
                          <a
                            title="Product Compare"
                            href="compare.html"
                            class="fas fa-random"
                            tabIndex="-1"
                          ></a>
                          <a
                            title="Product Video"
                            href="https://youtu.be/9xzcVxSBbG8"
                            class="venobox fas fa-play vbox-item"
                            data-autoplay="true"
                            data-vbtype="video"
                            tabIndex="-1"
                          ></a>
                          <a
                            title="Product View"
                            href="#"
                            class="fas fa-eye"
                            data-bs-toggle="modal"
                            data-bs-target="#product-view"
                            tabIndex="-1"
                          ></a>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-rating">
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="icofont-star"></i>
                          <a href="product-video.html" tabIndex="-1">
                            (3)
                          </a>
                        </div>
                        <h6 class="product-name">
                          <a href="product-video.html" tabIndex="-1">
                            fresh green chilis
                          </a>
                        </h6>
                        <h6 class="product-price">
                          <del>$34</del>
                          <span>
                            $28 <small>/piece</small>
                          </span>
                        </h6>
                        <button
                          class="product-add"
                          title="Add to Cart"
                          tabIndex="-1"
                        >
                          <i class="fas fa-shopping-basket"></i>
                          <span>add</span>
                        </button>
                        <div class="product-action">
                          <button
                            class="action-minus"
                            title="Quantity Minus"
                            tabIndex="-1"
                          >
                            <i class="icofont-minus"></i>
                          </button>
                          <input
                            class="action-input"
                            title="Quantity Number"
                            type="text"
                            name="quantity"
                            value="1"
                            tabIndex="-1"
                          />
                          <button
                            class="action-plus"
                            title="Quantity Plus"
                            tabIndex="-1"
                          >
                            <i class="icofont-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="slick-slide slick-current slick-active"
                    data-slick-index="5"
                    aria-hidden="false"
                    tabIndex="0"
                    style={{ width: 208 }}
                  >
                    <div class="product-card">
                      <div class="product-media">
                        <div class="product-label">
                          <label class="label-text new">new</label>
                        </div>
                        <button class="product-wish wish" tabIndex="0">
                          <i class="fas fa-heart"></i>
                        </button>
                        <a
                          class="product-image"
                          href="product-video.html"
                          tabIndex="0"
                        >
                          <img src="images/product/20.jpg" alt="product" />
                        </a>
                        <div class="product-widget">
                          <a
                            title="Product Compare"
                            href="compare.html"
                            class="fas fa-random"
                            tabIndex="0"
                          ></a>
                          <a
                            title="Product Video"
                            href="https://youtu.be/9xzcVxSBbG8"
                            class="venobox fas fa-play vbox-item"
                            data-autoplay="true"
                            data-vbtype="video"
                            tabIndex="0"
                          ></a>
                          <a
                            title="Product View"
                            href="#"
                            class="fas fa-eye"
                            data-bs-toggle="modal"
                            data-bs-target="#product-view"
                            tabIndex="0"
                          ></a>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-rating">
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="icofont-star"></i>
                          <a href="product-video.html" tabIndex="0">
                            (3)
                          </a>
                        </div>
                        <h6 class="product-name">
                          <a href="product-video.html" tabIndex="0">
                            fresh green chilis
                          </a>
                        </h6>
                        <h6 class="product-price">
                          <del>$34</del>
                          <span>
                            $28 <small>/piece</small>
                          </span>
                        </h6>
                        <button
                          class="product-add"
                          title="Add to Cart"
                          tabIndex="0"
                        >
                          <i class="fas fa-shopping-basket"></i>
                          <span>add</span>
                        </button>
                        <div class="product-action">
                          <button
                            class="action-minus"
                            title="Quantity Minus"
                            tabIndex="0"
                          >
                            <i class="icofont-minus"></i>
                          </button>
                          <input
                            class="action-input"
                            title="Quantity Number"
                            type="text"
                            name="quantity"
                            value="1"
                            tabIndex="0"
                          />
                          <button
                            class="action-plus"
                            title="Quantity Plus"
                            tabIndex="0"
                          >
                            <i class="icofont-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="slick-slide slick-cloned slick-active"
                    data-slick-index="6"
                    aria-hidden="false"
                    tabIndex="-1"
                    style={{ width: 208 }}
                  >
                    <div class="product-card">
                      <div class="product-media">
                        <div class="product-label">
                          <label class="label-text new">new</label>
                        </div>
                        <button class="product-wish wish" tabIndex="0">
                          <i class="fas fa-heart"></i>
                        </button>
                        <a
                          class="product-image"
                          href="product-video.html"
                          tabIndex="0"
                        >
                          <img src="images/product/15.jpg" alt="product" />
                        </a>
                        <div class="product-widget">
                          <a
                            title="Product Compare"
                            href="compare.html"
                            class="fas fa-random"
                            tabIndex="0"
                          ></a>
                          <a
                            title="Product Video"
                            href="https://youtu.be/9xzcVxSBbG8"
                            class="venobox fas fa-play vbox-item"
                            data-autoplay="true"
                            data-vbtype="video"
                            tabIndex="0"
                          ></a>
                          <a
                            title="Product View"
                            href="#"
                            class="fas fa-eye"
                            data-bs-toggle="modal"
                            data-bs-target="#product-view"
                            tabIndex="0"
                          ></a>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-rating">
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="icofont-star"></i>
                          <a href="product-video.html" tabIndex="0">
                            (3)
                          </a>
                        </div>
                        <h6 class="product-name">
                          <a href="product-video.html" tabIndex="0">
                            fresh green chilis
                          </a>
                        </h6>
                        <h6 class="product-price">
                          <del>$34</del>
                          <span>
                            $28 <small>/piece</small>
                          </span>
                        </h6>
                        <button
                          class="product-add"
                          title="Add to Cart"
                          tabIndex="0"
                        >
                          <i class="fas fa-shopping-basket"></i>
                          <span>add</span>
                        </button>
                        <div class="product-action">
                          <button
                            class="action-minus"
                            title="Quantity Minus"
                            tabIndex="0"
                          >
                            <i class="icofont-minus"></i>
                          </button>
                          <input
                            class="action-input"
                            title="Quantity Number"
                            type="text"
                            name="quantity"
                            value="1"
                            tabIndex="0"
                          />
                          <button
                            class="action-plus"
                            title="Quantity Plus"
                            tabIndex="0"
                          >
                            <i class="icofont-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="slick-slide slick-cloned slick-active"
                    data-slick-index="7"
                    aria-hidden="false"
                    tabIndex="-1"
                    style={{ width: 208 }}
                  >
                    <div class="product-card">
                      <div class="product-media">
                        <div class="product-label">
                          <label class="label-text new">new</label>
                        </div>
                        <button class="product-wish wish" tabIndex="0">
                          <i class="fas fa-heart"></i>
                        </button>
                        <a
                          class="product-image"
                          href="product-video.html"
                          tabIndex="0"
                        >
                          <img src="images/product/16.jpg" alt="product" />
                        </a>
                        <div class="product-widget">
                          <a
                            title="Product Compare"
                            href="compare.html"
                            class="fas fa-random"
                            tabIndex="0"
                          ></a>
                          <a
                            title="Product Video"
                            href="https://youtu.be/9xzcVxSBbG8"
                            class="venobox fas fa-play vbox-item"
                            data-autoplay="true"
                            data-vbtype="video"
                            tabIndex="0"
                          ></a>
                          <a
                            title="Product View"
                            href="#"
                            class="fas fa-eye"
                            data-bs-toggle="modal"
                            data-bs-target="#product-view"
                            tabIndex="0"
                          ></a>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-rating">
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="icofont-star"></i>
                          <a href="product-video.html" tabIndex="0">
                            (3)
                          </a>
                        </div>
                        <h6 class="product-name">
                          <a href="product-video.html" tabIndex="0">
                            fresh green chilis
                          </a>
                        </h6>
                        <h6 class="product-price">
                          <del>$34</del>
                          <span>
                            $28 <small>/piece</small>
                          </span>
                        </h6>
                        <button
                          class="product-add"
                          title="Add to Cart"
                          tabIndex="0"
                        >
                          <i class="fas fa-shopping-basket"></i>
                          <span>add</span>
                        </button>
                        <div class="product-action">
                          <button
                            class="action-minus"
                            title="Quantity Minus"
                            tabIndex="0"
                          >
                            <i class="icofont-minus"></i>
                          </button>
                          <input
                            class="action-input"
                            title="Quantity Number"
                            type="text"
                            name="quantity"
                            value="1"
                            tabIndex="0"
                          />
                          <button
                            class="action-plus"
                            title="Quantity Plus"
                            tabIndex="0"
                          >
                            <i class="icofont-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="slick-slide slick-cloned slick-active"
                    data-slick-index="8"
                    aria-hidden="false"
                    tabIndex="-1"
                    style={{ width: 208 }}
                  >
                    <div class="product-card">
                      <div class="product-media">
                        <div class="product-label">
                          <label class="label-text new">new</label>
                        </div>
                        <button class="product-wish wish" tabIndex="0">
                          <i class="fas fa-heart"></i>
                        </button>
                        <a
                          class="product-image"
                          href="product-video.html"
                          tabIndex="0"
                        >
                          <img src="images/product/17.jpg" alt="product" />
                        </a>
                        <div class="product-widget">
                          <a
                            title="Product Compare"
                            href="compare.html"
                            class="fas fa-random"
                            tabIndex="0"
                          ></a>
                          <a
                            title="Product Video"
                            href="https://youtu.be/9xzcVxSBbG8"
                            class="venobox fas fa-play vbox-item"
                            data-autoplay="true"
                            data-vbtype="video"
                            tabIndex="0"
                          ></a>
                          <a
                            title="Product View"
                            href="#"
                            class="fas fa-eye"
                            data-bs-toggle="modal"
                            data-bs-target="#product-view"
                            tabIndex="0"
                          ></a>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-rating">
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="icofont-star"></i>
                          <a href="product-video.html" tabIndex="0">
                            (3)
                          </a>
                        </div>
                        <h6 class="product-name">
                          <a href="product-video.html" tabIndex="0">
                            fresh green chilis
                          </a>
                        </h6>
                        <h6 class="product-price">
                          <del>$34</del>
                          <span>
                            $28 <small>/piece</small>
                          </span>
                        </h6>
                        <button
                          class="product-add"
                          title="Add to Cart"
                          tabIndex="0"
                        >
                          <i class="fas fa-shopping-basket"></i>
                          <span>add</span>
                        </button>
                        <div class="product-action">
                          <button
                            class="action-minus"
                            title="Quantity Minus"
                            tabIndex="0"
                          >
                            <i class="icofont-minus"></i>
                          </button>
                          <input
                            class="action-input"
                            title="Quantity Number"
                            type="text"
                            name="quantity"
                            value="1"
                            tabIndex="0"
                          />
                          <button
                            class="action-plus"
                            title="Quantity Plus"
                            tabIndex="0"
                          >
                            <i class="icofont-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="slick-slide slick-cloned slick-active"
                    data-slick-index="9"
                    aria-hidden="false"
                    tabIndex="-1"
                    style={{ width: 208 }}
                  >
                    <div class="product-card">
                      <div class="product-media">
                        <div class="product-label">
                          <label class="label-text new">new</label>
                        </div>
                        <button class="product-wish wish" tabIndex="0">
                          <i class="fas fa-heart"></i>
                        </button>
                        <a
                          class="product-image"
                          href="product-video.html"
                          tabIndex="0"
                        >
                          <img src="images/product/18.jpg" alt="product" />
                        </a>
                        <div class="product-widget">
                          <a
                            title="Product Compare"
                            href="compare.html"
                            class="fas fa-random"
                            tabIndex="0"
                          ></a>
                          <a
                            title="Product Video"
                            href="https://youtu.be/9xzcVxSBbG8"
                            class="venobox fas fa-play vbox-item"
                            data-autoplay="true"
                            data-vbtype="video"
                            tabIndex="0"
                          ></a>
                          <a
                            title="Product View"
                            href="#"
                            class="fas fa-eye"
                            data-bs-toggle="modal"
                            data-bs-target="#product-view"
                            tabIndex="0"
                          ></a>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-rating">
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="icofont-star"></i>
                          <a href="product-video.html" tabIndex="0">
                            (3)
                          </a>
                        </div>
                        <h6 class="product-name">
                          <a href="product-video.html" tabIndex="0">
                            fresh green chilis
                          </a>
                        </h6>
                        <h6 class="product-price">
                          <del>$34</del>
                          <span>
                            $28 <small>/piece</small>
                          </span>
                        </h6>
                        <button
                          class="product-add"
                          title="Add to Cart"
                          tabIndex="0"
                        >
                          <i class="fas fa-shopping-basket"></i>
                          <span>add</span>
                        </button>
                        <div class="product-action">
                          <button
                            class="action-minus"
                            title="Quantity Minus"
                            tabIndex="0"
                          >
                            <i class="icofont-minus"></i>
                          </button>
                          <input
                            class="action-input"
                            title="Quantity Number"
                            type="text"
                            name="quantity"
                            value="1"
                            tabIndex="0"
                          />
                          <button
                            class="action-plus"
                            title="Quantity Plus"
                            tabIndex="0"
                          >
                            <i class="icofont-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="slick-slide slick-cloned"
                    data-slick-index="10"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{ width: 208 }}
                  >
                    <div class="product-card">
                      <div class="product-media">
                        <div class="product-label">
                          <label class="label-text new">new</label>
                        </div>
                        <button class="product-wish wish" tabIndex="-1">
                          <i class="fas fa-heart"></i>
                        </button>
                        <a
                          class="product-image"
                          href="product-video.html"
                          tabIndex="-1"
                        >
                          <img src="images/product/19.jpg" alt="product" />
                        </a>
                        <div class="product-widget">
                          <a
                            title="Product Compare"
                            href="compare.html"
                            class="fas fa-random"
                            tabIndex="-1"
                          ></a>
                          <a
                            title="Product Video"
                            href="https://youtu.be/9xzcVxSBbG8"
                            class="venobox fas fa-play vbox-item"
                            data-autoplay="true"
                            data-vbtype="video"
                            tabIndex="-1"
                          ></a>
                          <a
                            title="Product View"
                            href="#"
                            class="fas fa-eye"
                            data-bs-toggle="modal"
                            data-bs-target="#product-view"
                            tabIndex="-1"
                          ></a>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-rating">
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="icofont-star"></i>
                          <a href="product-video.html" tabIndex="-1">
                            (3)
                          </a>
                        </div>
                        <h6 class="product-name">
                          <a href="product-video.html" tabIndex="-1">
                            fresh green chilis
                          </a>
                        </h6>
                        <h6 class="product-price">
                          <del>$34</del>
                          <span>
                            $28 <small>/piece</small>
                          </span>
                        </h6>
                        <button
                          class="product-add"
                          title="Add to Cart"
                          tabIndex="-1"
                        >
                          <i class="fas fa-shopping-basket"></i>
                          <span>add</span>
                        </button>
                        <div class="product-action">
                          <button
                            class="action-minus"
                            title="Quantity Minus"
                            tabIndex="-1"
                          >
                            <i class="icofont-minus"></i>
                          </button>
                          <input
                            class="action-input"
                            title="Quantity Number"
                            type="text"
                            name="quantity"
                            value="1"
                            tabIndex="-1"
                          />
                          <button
                            class="action-plus"
                            title="Quantity Plus"
                            tabIndex="-1"
                          >
                            <i class="icofont-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li
                    class="slick-slide slick-cloned"
                    data-slick-index="11"
                    aria-hidden="true"
                    tabIndex="-1"
                    style={{ width: 208 }}
                  >
                    <div class="product-card">
                      <div class="product-media">
                        <div class="product-label">
                          <label class="label-text new">new</label>
                        </div>
                        <button class="product-wish wish" tabIndex="-1">
                          <i class="fas fa-heart"></i>
                        </button>
                        <a
                          class="product-image"
                          href="product-video.html"
                          tabIndex="-1"
                        >
                          <img src="images/product/20.jpg" alt="product" />
                        </a>
                        <div class="product-widget">
                          <a
                            title="Product Compare"
                            href="compare.html"
                            class="fas fa-random"
                            tabIndex="-1"
                          ></a>
                          <a
                            title="Product Video"
                            href="https://youtu.be/9xzcVxSBbG8"
                            class="venobox fas fa-play vbox-item"
                            data-autoplay="true"
                            data-vbtype="video"
                            tabIndex="-1"
                          ></a>
                          <a
                            title="Product View"
                            href="#"
                            class="fas fa-eye"
                            data-bs-toggle="modal"
                            data-bs-target="#product-view"
                            tabIndex="-1"
                          ></a>
                        </div>
                      </div>
                      <div class="product-content">
                        <div class="product-rating">
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="active icofont-star"></i>
                          <i class="icofont-star"></i>
                          <a href="product-video.html" tabIndex="-1">
                            (3)
                          </a>
                        </div>
                        <h6 class="product-name">
                          <a href="product-video.html" tabIndex="-1">
                            fresh green chilis
                          </a>
                        </h6>
                        <h6 class="product-price">
                          <del>$34</del>
                          <span>
                            $28 <small>/piece</small>
                          </span>
                        </h6>
                        <button
                          class="product-add"
                          title="Add to Cart"
                          tabIndex="-1"
                        >
                          <i class="fas fa-shopping-basket"></i>
                          <span>add</span>
                        </button>
                        <div class="product-action">
                          <button
                            class="action-minus"
                            title="Quantity Minus"
                            tabIndex="-1"
                          >
                            <i class="icofont-minus"></i>
                          </button>
                          <input
                            class="action-input"
                            title="Quantity Number"
                            type="text"
                            name="quantity"
                            value="1"
                            tabIndex="-1"
                          />
                          <button
                            class="action-plus"
                            title="Quantity Plus"
                            tabIndex="-1"
                          >
                            <i class="icofont-plus"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                </div>
              </div>
              <i
                class="icofont-arrow-left bamdik slick-arrow"
                style={{ display: "block" }}
              ></i>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="section-btn-25">
              <a href="shop-4column.html" class="btn btn-outline">
                <i class="fas fa-eye"></i>
                <span>show more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
