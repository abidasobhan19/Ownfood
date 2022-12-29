import React from "react";
import styled from "styled-components";

const SingleProject = (props) => {
  // console.log(props.item);
  const { item_image, item_name } = props.item;
  return (
    <Project className="project">
      <img src={item_image} alt="project" />
      <div className="disc">
        <h1>Description :</h1>
        <p>
          {item_name}
          {/* <a href="https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png">
            demo
          </a> */}
        </p>
      </div>
    </Project>
  );
};

export default SingleProject;

const Project = styled.div`
  height: 30rem;
  @media (max-width: 970px) {
    height: 14rem;
  }
  background-color: #e7eaf0;
  margin: 0 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
  position: relative;
  overflow: hidden;
  transition: all 400ms ease-in-out;
  cursor: pointer;
  img {
    transition: all 400ms ease-in-out;
    width: 100%;
    height: 100%;
    // object-fit: cover;
  }
  div {
    position: absolute;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
    right: 0;
    left: 0;
    bottom: -10rem;
    text-align: left;
    padding: 0.5rem;
    transition: bottom 400ms ease-in-out;
    h1 {
      font-size: 1rem;
    }
    p {
      width: 95%;
      font-size: 0.8rem;
      a {
        margin-left: 0.4rem;
        color: red;
      }
    }
  }
  &:hover > img {
    transform: scale(1.3);
    opacity: 0.6;
  }
  &:hover > div {
    bottom: 0;
  }
`;
