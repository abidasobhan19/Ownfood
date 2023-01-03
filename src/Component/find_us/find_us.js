import React from "react";
import "./find_us.css";
const Find_Us = () => {
  return (
    <section className="mural-bg bg-main ">
      <div className="container-fluid  ">
        <div className="col-12">
          <h2
            className="text-center align-items-center justify-content-center"
            style={{ color: "white", paddingTop: 10, paddingBottom: 10 }}
          >
            {" "}
            Find Us In This State
          </h2>
        </div>
        <div className="row">
          <div className="col-sm-6 col-xl-2">
            <div className="footer-widget">
              <h3 className="footer-title" style={{ color: "white" }}>
                USA
              </h3>

              <div className="sf_footer-links" style={{ color: "white" }}>
                <ul>
                  <li>
                    <a href="#" style={{ color: "white", fontWeight: "bold" }}>
                      San Fransico
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "white", fontWeight: "bold" }}>
                      New York
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "white", fontWeight: "bold" }}>
                      Washington
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "white", fontWeight: "bold" }}>
                      Texas
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "white", fontWeight: "bold" }}>
                      Rodhe Iland
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "white", fontWeight: "bold" }}>
                      New Mexico
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "white", fontWeight: "bold" }}>
                      Maine
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Find_Us;
