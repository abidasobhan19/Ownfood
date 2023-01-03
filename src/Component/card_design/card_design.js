import React from "react";
import "./card_design.css";
import { Container, Col, Row } from "react-bootstrap";
import { foodItem } from "../data";
import { Avatar } from "@mui/material";
const Card_Design = () => {
  return (
    <div className="Container main_container">
      <Row>
        {foodItem.map((item, index) => {
          return (
            <Col>
              <div className="product_container">
                <div className="product_media">
                  <div className="kitchen">
                    <div>
                      {" "}
                      <Avatar variant="rounded">h</Avatar>
                    </div>
                    <h3 className="kitchen_name"> {item.item_name}</h3>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Card_Design;
