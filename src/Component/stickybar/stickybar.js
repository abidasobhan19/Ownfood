import React from "react";

const Stickybar = ({ setState }) => {
  return (
    <div className="header-top">
      <div className="container-fluid">
        <div className="row">
          <div class="col-md-6 col-lg-6">
            <div className="col-md-6 col-lg-6 mt-1 d-flex justify-content-between  ">
              <p className="ms-4" style={{ color: "white" }}>
                <i
                  class="fas fa-phone-volume me-2"
                  style={{ color: "white" }}
                ></i>
                +49260-5731-08
              </p>

              <p style={{ color: "white" }}>
                <i class="fas fa-envelope me-2" style={{ color: "white" }}></i>
                support@fitmeal.us
              </p>
            </div>
          </div>
          {/* <div className="col-md-5 col-lg-3"></div> */}

          <div className="col-md-6 col-lg-6 mt-2 ms-auto header-widget-group justify-content-end">
            <button
              className="header-widget header-cart me-5"
              title="Cartlist"
              onClick={() => {
                setState({ isPaneOpen: true });
              }}
            >
              <i className="fas fa-shopping-basket"></i>
              <sup>9+</sup>
              {/* <span>
              total price<small>$345.00</small>
              </span>   */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stickybar;
