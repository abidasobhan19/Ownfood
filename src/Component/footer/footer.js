import React from "react";

const Footer = () => {
  return (
    <footer class="footer-part">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6 col-xl-3">
            <div class="footer-widget">
              <a class="footer-logo text-center" href="#">
                <img src="images/logo.png" alt="logo" />
              </a>
              <p class="footer-desc text-center">
                Adipisci asperiores ipsum ipsa repellat consequatur repudiandae
                quisquam assumenda dolor perspiciatis sit ipsum dolor amet.
              </p>
              <ul class="footer-social text-center">
                <li>
                  <a class="icofont-facebook" href="#"></a>
                </li>
                <li>
                  <a class="icofont-twitter" href="#"></a>
                </li>
                <li>
                  <a class="icofont-linkedin" href="#"></a>
                </li>
                <li>
                  <a class="icofont-instagram" href="#"></a>
                </li>
                <li>
                  <a class="icofont-pinterest" href="#"></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-xl-3">
            <div class="footer-widget contact">
              <h3 class="footer-title">User </h3>
              <ul class="footer-contact">
                <li>
                  <i class="icofont-ui-email"></i>
                  <p>
                    <span>Open Your Account</span>
                    <span>Sign In</span>
                  </p>
                </li>
                {/* <li>
                  <i class="icofont-ui-touch-phone"></i>
                  <p>
                    <span>+120 279 532 13</span>
                    <span>+120 279 532 14</span>
                  </p>
                </li> */}
                {/* <li>
                  <i class="icofont-location-pin"></i>
                  <p>1Hd- 50, 010 Avenue, NY 90001 United States</p>
                </li> */}
              </ul>
            </div>
          </div>
          <div class="col-sm-6 col-xl-3">
            <div class="footer-widget">
              <h3 class="footer-title">quick Links</h3>
              <div class="footer-links">
                <ul>
                  <li>
                    <a href="#">Popular Kitchen</a>
                  </li>
                  <li>
                    <a href="#">Instant Food</a>
                  </li>
                  <li>
                    <a href="#">Pre-Order Food</a>
                  </li>
                  <li>
                    <a href="#">Wish Order</a>
                  </li>
                  <li>
                    <a href="#">Catering Food</a>
                  </li>
                  <li>
                    <a href="#">Find us in this State</a>
                  </li>
                  <li>
                    <a href="#">All Categories</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">Location</a>
                  </li>
                  <li>
                    <a href="#">Affiliates</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Carrer</a>
                  </li>
                  <li>
                    <a href="#">Faq</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-xl-3">
            <div class="footer-widget">
              <h3 class="footer-title">Download App</h3>
              <p class="footer-desc">
                Lorem ipsum dolor sit amet tenetur dignissimos ipsum eligendi
                autem obcaecati minus ducimus totam reprehenderit
                exercitationem!
              </p>
              <div class="footer-app">
                <a href="#">
                  <img src="images/google-store.png" alt="google" />
                </a>
                <a href="#">
                  <img src="images/app-store.png" alt="app" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="footer-bottom">
              <p class="footer-copytext">
                © All Copyrights Reserved by <a href="#">Mironcoder</a>
              </p>
              <div class="footer-card">
                <a href="#">
                  <img src="images/payment/jpg/01.jpg" alt="payment" />
                </a>
                <a href="#">
                  <img src="images/payment/jpg/02.jpg" alt="payment" />
                </a>
                <a href="#">
                  <img src="images/payment/jpg/03.jpg" alt="payment" />
                </a>
                <a href="#">
                  <img src="images/payment/jpg/04.jpg" alt="payment" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
