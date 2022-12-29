import React from "react";
import { Uber_image } from "../data";
import { foodItem } from "../data";
const FourbyTwo = () => {
  return (
    <section className="section mt-5" style={{ padding: 5 }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3  ">
            <div className="card" style={{ padding: 15 }}>
              <h3 className="mt-1" style={{ paddingBottom: 15 }}>
                {" "}
                Top Food Category
              </h3>
              <div className="row mt-1" style={{ padding: 2 }}>
                <div className="col-md-6" style={{ marginBottom: 15 }}>
                  <img src={foodItem[0].item_image} className="img-fluid" />
                  <p className="text-center"> {foodItem[0].item_name}</p>
                </div>
                <div className="col-md-6" style={{ marginBottom: 15 }}>
                  <img src={foodItem[1].item_image} className="img-fluid" />
                  <p className="text-center"> {Uber_image[1].item_name}</p>
                </div>{" "}
                <div className="col-md-6 ">
                  <img src={foodItem[2].item_image} className="img-fluid" />
                  <p className="text-center"> {Uber_image[2].item_name}</p>
                </div>{" "}
                <div className="col-md-6 ">
                  <img src={foodItem[3].item_image} className="img-fluid" />
                  <p className="text-center"> {Uber_image[3].item_name}</p>
                </div>{" "}
              </div>
              <div className="col-md-12">
                <a href="#" className="see_more">
                  {" "}
                  See more
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3  ">
            <div className="card" style={{ padding: 15 }}>
              <h3 className="mt-1" style={{ paddingBottom: 15 }}>
                {" "}
                Top Food Category
              </h3>
              <div className="row mt-1" style={{ padding: 2 }}>
                <div className="col-md-6" style={{ marginBottom: 15 }}>
                  <img src={foodItem[0].item_image} className="img-fluid" />
                  <p className="text-center"> {foodItem[0].item_name}</p>
                </div>
                <div className="col-md-6" style={{ marginBottom: 15 }}>
                  <img src={foodItem[1].item_image} className="img-fluid" />
                  <p className="text-center"> {Uber_image[1].item_name}</p>
                </div>{" "}
                <div className="col-md-6 ">
                  <img src={foodItem[2].item_image} className="img-fluid" />
                  <p className="text-center"> {Uber_image[2].item_name}</p>
                </div>{" "}
                <div className="col-md-6 ">
                  <img src={foodItem[3].item_image} className="img-fluid" />
                  <p className="text-center"> {Uber_image[3].item_name}</p>
                </div>{" "}
              </div>
              <div className="col-md-12">
                <a href="#" className="see_more">
                  {" "}
                  See more
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3  ">
            <div className="card" style={{ padding: 15 }}>
              <h3 className="mt-1" style={{ paddingBottom: 15 }}>
                {" "}
                Top Food Category
              </h3>
              <div className="row mt-1" style={{ padding: 2 }}>
                <div style={{ marginBottom: 15 }}>
                  <img src={foodItem[0].item_image} className="img-fluid" />
                  <p> {foodItem[0].item_name}</p>
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

          <div className="col-md-3  ">
            <div className="card" style={{ padding: 15 }}>
              <h3 className="mt-1" style={{ paddingBottom: 15 }}>
                {" "}
                Top Food Category
              </h3>
              <div className="row mt-1" style={{ padding: 2 }}>
                <div style={{ marginBottom: 15 }}>
                  <img src={foodItem[0].item_image} className="img-fluid" />
                  <p> {foodItem[0].item_name}</p>
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
    </section>
  );
};

export default FourbyTwo;
