import React, { useState } from "react";

import Slider from "./slider/slider";
import Header from "./navbar/header";
import Collection from "./collection/collection";
import Footer from "./footer/footer";
import Blog from "./Blog/blog";
import AllItem from "./allItems/allItem";
import Custom_Search from "./Search_Bar_OnSlider/custom_Search";
import Item from "./new_Items/new_item";
import Sidebar from "./slidebar/sidebar";
import ClientSlider from "./slider/cliSlider";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import DrawerLeft from "../Component/drawerLeft/drawerleft";
// import Shopping from "./shopping/shopping";
import Brand from "./Brand/brand";

import Earn_Money from "./Earn_money_with_us/earn_money";
import ClientTop from "./cientTop/clientTop";
import New_Slider from "./new_slider/new_slider";
import Circle_Product from "./Circle_Product/circle_product";
import FourbyTwo from "./fourbyTwo/fourbytwo";
import SliderComp from "./product_center_slider/Product_center_slider";
const Main = () => {
  return (
    <>
      <ClientTop />
      {/* <Slider /> */}
      <ClientSlider />
      {/* <Custom_Search /> */}
      {/* <Brand /> */}

      <Earn_Money />
      <Circle_Product />
      <FourbyTwo />
      <New_Slider />
      <Collection />

      {/* <SliderComp /> */}
      {/* <Item /> */}

      {/* <AllItem /> */}
      <Blog />
    </>
  );
};

export default Main;
