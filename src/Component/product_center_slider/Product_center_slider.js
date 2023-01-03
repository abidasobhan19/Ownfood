import React, { useEffect, useState } from "react";
import "./Product_center_slider.css";

const Product_center_slider = () => {
  const [text1, setText] = useState("");
  const [count, setCount] = useState(0);
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");
  const [main, setMain] = useState("");

  let imgObject = [
    "https://source.unsplash.com/450x450/?girl",
    "https://source.unsplash.com/450x450/?animals",
    "https://source.unsplash.com/450x450/?architecture",
    "https://source.unsplash.com/450x450/?nature",
    "https://source.unsplash.com/450x450/?people",
    "https://source.unsplash.com/450x450/?tech",
    "https://source.unsplash.com/450x450/?girl",
    "https://source.unsplash.com/450x450/?animals",
    "https://source.unsplash.com/450x450/?architecture",
    "https://source.unsplash.com/450x450/?nature",
    "https://source.unsplash.com/450x450/?people",
  ];

  const leftHandle = () => {
    if (count < imgObject.length - 5) {
      setCount(count + 1);
    }
  };
  const rightHandle = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div id="container">
        <div id="galleryView">
          <div id="galleryContainer">
            <div id="leftViewtwo">
              <img src={imgObject[count]} />
            </div>
            <div id="leftView">
              <img src={imgObject[count]} />
            </div>
            <button id="navLeft" onClick={() => leftHandle()} class="navBtns">
              <i class="fas fa-arrow-left fa-3x"></i>
            </button>
            <a id="linkTag">
              <div id="mainView">
                <img src={imgObject[count + 1]} />
              </div>
            </a>
            <div id="rightView">
              <img src={imgObject[count + 2]} className="" />
            </div>
            <div id="rightViewtwo">
              <img src={imgObject[count + 3]} className="" />
            </div>
            <button id="navRight" onClick={() => rightHandle()} class="navBtns">
              <i class="fas fa-arrow-right fa-3x"></i>
            </button>
          </div>
        </div>
        <div id="tilesView">
          <div id="tilesContainer"></div>
        </div>
      </div>
    </div>
  );
};

export default Product_center_slider;
