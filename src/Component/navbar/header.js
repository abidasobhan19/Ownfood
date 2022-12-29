import React from "react";

const Header = ({ SetpanLeft, setState, handleOpen }) => {
  return (
    <header className="header-part shadow">
      <div className="container-fluid">
        <div className=" header-content">
          <a>
            <img src="images/logo.png" alt="logo" style={{ height: 90 }} />
          </a>

          <button
            onClick={(e) => {
              e.preventDefault();
              SetpanLeft(true);
            }}
            style={{
              height: 40,
              // width: 40,
              color: "#1b6dc1",
            }}
          >
            <i class="fas fa-bars fa-lg "></i>
          </button>

          <form className="">
            <input
              type="text"
              placeholder="Zip Code  "
              style={{ width: 70, marginLeft: 5 }}
            />

            <button>
              <i class="fas thin fa-location-crosshairs"></i>
            </button>
          </form>
          <div className="d-flex justify-content-between  ">
            <form className="zip-form ms-1">
              <input
                onClick={() => {
                  handleOpen();
                }}
                type="text"
                placeholder="Search anything..."
              />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </form>

            {/* <form className="header-form "></form> */}
          </div>

          <nav class="nav  bg-white">
            <div class="container-fluid ">
              <div class="row">
                <div class="col-12">
                  <div class="navbar-content">
                    <ul class="navbar-list bg-white">
                      <li className="navbar-item">
                        <a class="navbar-link " href="#">
                          EARN MONEY
                        </a>
                      </li>

                      <li class="navbar-item dropdown">
                        <a class="navbar-link dropdown-arrow" href="#">
                          ALL FOOD
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
                          CATERING
                        </a>
                      </li>

                      <li className="navbar-item">
                        <a class="navbar-link " href="#">
                          FAQ
                        </a>
                      </li>

                      <li className="navbar-item">
                        <a class="navbar-link " href="#">
                          BLOG
                        </a>
                      </li>
                    </ul>

                    <div>
                      <button
                        type="button"
                        style={{ backgroundColor: "#1b6dc1" }}
                        class="btnopen btn-primary"
                      >
                        {" "}
                        <i class="fa-solid fa-right-to-bracket me-1"></i>
                        Open Your Account
                      </button>

                      <button
                        type="button"
                        style={{ backgroundColor: "#1b6dc1" }}
                        class="btnSign btn-primary"
                      >
                        {" "}
                        <i class="fa-solid fa-right-to-bracket me-1"></i>
                        Sign In
                      </button>
                      <button
                        className="header-widget header-cart "
                        title="Cartlist"
                        onClick={() => {
                          setState({ isPaneOpen: true });
                        }}
                      >
                        <i className="fas fa-shopping-basket"></i>
                        <sup>9+</sup>
                      </button>
                    </div>
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
