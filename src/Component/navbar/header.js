import React from "react";

const Header = ({ SetpanLeft }) => {
  return (
    <header className="header-part">
      <div className="container-fluid">
        <div className="header-content">
          <a href="index.html" className="text-center col-md-6 col-lg-1 ">
            <img
              src="images/logo.png"
              alt="logo"
              style={{ width: 100, height: 90, marginLeft: -20 }}
            />

            <button onClick={() => SetpanLeft(true)}>
              <i class="fas fa-bars "></i>
            </button>
          </a>

          <div className="d-flex justify-content-center align-items-end ">
            <form className="zip-form">
              <input
                type="text"
                placeholder="Zip Code  "
                style={{ width: 94 }}
              />

              <button>
                <i class="fas thin fa-location-crosshairs"></i>
              </button>
              <div
                class="vl"
                style={{ border: `1px solid rgba(0, 0, 0, 0.05)`, height: 3 }}
              ></div>
              <input type="text" placeholder="Search anything..." />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </form>

            {/* <form className="header-form "></form> */}
          </div>

          <nav class="nav" style={{ marginLeft: 120 }}>
            <div class="container align-items-end">
              <div class="row">
                <div class="col-lg-12">
                  <div class="navbar-content">
                    <ul class="navbar-list">
                      <li className="navbar-item">
                        <a class="navbar-link " href="#">
                          Earn Money
                        </a>
                      </li>

                      <li class="navbar-item dropdown">
                        <a class="navbar-link dropdown-arrow" href="#">
                          All Food
                        </a>
                        <ul class="dropdown-position-list">
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
                            <a href="#">Find us in these state</a>
                          </li>
                          <li>
                            <a href="#">All Categories</a>
                          </li>
                        </ul>
                      </li>

                      <li className="navbar-item">
                        <a class="navbar-link " href="#">
                          Catering
                        </a>
                      </li>

                      <li className="navbar-item">
                        <a class="navbar-link " href="#">
                          Faq
                        </a>
                      </li>

                      <li className="navbar-item">
                        <a class="navbar-link " href="#">
                          Blog
                        </a>
                      </li>

                      <button type="button" class="btnopen btn-primary">
                        {" "}
                        <i class="fa-solid fa-right-to-bracket me-1"></i>
                        Open Your Account
                      </button>

                      <button
                        type="button"
                        class="btnSign btn-outline-primary ms-2"
                      >
                        <i class="fa-regular fa-user me-1"></i>
                        Sign In
                      </button>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
