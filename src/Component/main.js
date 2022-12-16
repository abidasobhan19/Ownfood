import React from "react";
import { Box } from "@mui/material";
import classNames from "classnames";
import Appbar from "./TopBar/appbar";
import TopBar_wrap from "./Sticky_Bar/topWrap";
import StickyBar from "./Sticky_Bar/sticky";
import "../App.css";
import Slider from "./Slider/slider";
import Custom_Search from "./Search_Bar_OnSlider/custom_Search";
import Earn_money from "./earn_money/earn_money";
import Cuisine from "./cuisine/cuisine";
import Work from "./how_its_work/works";
import "./main.css";
// import ItemList from "./item/itemList";
const Main = () => {
  const { sticky, stickyRef } = TopBar_wrap();
  return (
    <Box>
      {/* <Appbar /> */}
      <>
        <header className="header" style={{ backgroundColor: "white" }}>
          <StickyBar />
        </header>
        <nav ref={stickyRef} className={classNames("nav", { sticky })}>
          <Box style={{ width: "100%" }}>
            <Appbar />
          </Box>
        </nav>
        <div
          style={{
            height: sticky ? `${stickyRef.current?.clientHeight}px` : "0px",
            // backgroundColor: "#F4F5ED",
          }}
        />

        <Slider />
        <Custom_Search />
        <Box style={{ marginLeft: 10, backgroundColor: "#f3f5ed" }}>
          <Earn_money />
        </Box>

        <Box class="wrap">
          <Work />
        </Box>

        <Box style={{ margin: 20, marginTop: -40 }}>
          <Cuisine />
        </Box>
      </>
    </Box>
  );
};

export default Main;
