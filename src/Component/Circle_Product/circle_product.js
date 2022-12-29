import React, { useState } from "react";
import "./circle_product.css";
import im1 from "../../assets/img/cuisine-1.jpg";
import im2 from "../../assets/img/cuisine-2.jpg";
import im3 from "../../assets/img/cuisine-3.jpg";
import im4 from "../../assets/img/cuisine-4.jpg";
import im5 from "../../assets/img/cuisine-5.jpg";
import im6 from "../../assets/img/cuisine-6.jpg";
import im7 from "../../assets/img/dish-caro1.jpg";
import ShoppingPopUp from "../popup/popUpView";

const Anim = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section>
      <div className="container-fluid mt-5 ">
        <h2> Explore Foods By Categories</h2>
        <div className="row mt-5 ">
          <div className="col-4 d-flex align-items-center justify-content-center">
            <div className="upper">
              <div className="try"></div>

              <div className="main">
                <div className="name">Biryani</div>

                <img
                  className="img0 img-fluid"
                  src={im1}
                  onClick={() => {
                    setShow(true);
                  }}
                />

                <img
                  className="img1 img-fluid"
                  src={im2}
                  onClick={() => {
                    setShow(true);
                  }}
                />

                <img
                  className="img2 img-fluid"
                  src={im3}
                  onClick={() => {
                    setShow(true);
                  }}
                />
                <img
                  className="img3 img-fluid"
                  src={im4}
                  onClick={() => {
                    setShow(true);
                  }}
                />
                <img
                  className="img4 img-fluid"
                  src={im5}
                  onClick={() => {
                    setShow(true);
                  }}
                />
                <img
                  className="img5 img-fluid"
                  src={im6}
                  onClick={() => {
                    setShow(true);
                  }}
                />
                <img
                  className="img6 img-fluid"
                  src={im7}
                  onClick={() => {
                    setShow(true);
                  }}
                />
                {/* <div className='img6' style={{backgroundColo:'red'}}>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-4 d-flex align-items-center justify-content-center">
            <div className="upper">
              <div className="try"></div>

              <div className="main">
                <div className="name">Biryani</div>

                <img
                  className="img0 img-fluid"
                  src={im1}
                  onClick={() => {
                    setShow(true);
                  }}
                />

                <img
                  className="img1 img-fluid"
                  src={im2}
                  onClick={() => {
                    setShow(true);
                  }}
                />

                <img
                  className="img2 img-fluid"
                  src={im3}
                  onClick={() => {
                    setShow(true);
                  }}
                />
                <img
                  className="img3 img-fluid"
                  src={im4}
                  onClick={() => {
                    setShow(true);
                  }}
                />
                <img
                  className="img4 img-fluid"
                  src={im5}
                  onClick={() => {
                    setShow(true);
                  }}
                />
                <img
                  className="img5 img-fluid"
                  src={im6}
                  onClick={() => {
                    setShow(true);
                  }}
                />
                <img
                  className="img6 img-fluid"
                  src={im7}
                  onClick={() => {
                    setShow(true);
                  }}
                />
                {/* <div className='img6' style={{backgroundColo:'red'}}>
                </div> */}
              </div>
            </div>
          </div>

          <div className="col-4 d-flex align-items-center justify-content-center">
            <div className="upper">
              <div className="try"></div>

              <div className="main">
                <div className="name">Biryani</div>

                <img
                  className="img0 img-fluid"
                  src={im1}
                  onClick={() => {
                    setShow(true);
                  }}
                />

                <img
                  className="img1 img-fluid"
                  src={im2}
                  onClick={() => {
                    setShow(true);
                  }}
                />

                <img
                  className="img2 img-fluid"
                  src={im3}
                  onClick={() => {
                    setShow(true);
                  }}
                />
                <img
                  className="img3 img-fluid"
                  src={im4}
                  onClick={() => {
                    setShow(true);
                  }}
                />
                <img
                  className="img4 img-fluid"
                  src={im5}
                  onClick={() => {
                    setShow(true);
                  }}
                />
                <img
                  className="img5 img-fluid"
                  src={im6}
                  onClick={() => {
                    setShow(true);
                  }}
                />
                <img
                  className="img6 img-fluid"
                  src={im7}
                  onClick={() => {
                    setShow(true);
                  }}
                />
                {/* <div className='img6' style={{backgroundColo:'red'}}>
                </div> */}
              </div>
            </div>
          </div>

          {show === true ? (
            <ShoppingPopUp show={show} handleClose={handleClose} />
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};

export default Anim;
