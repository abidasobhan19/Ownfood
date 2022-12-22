import React, { useState } from "react";
import classNames from "classnames";
import useSticky from "./sticky";

import Stickybar from "./stickybar/stickybar";
import "../App.css";
import Slider from "./slider/slider";
import Header from "./navbar/header";
import Collection from "./collection/collection";
import Footer from "./footer/footer";
import Blog from "./Blog/blog";
import AllItem from "./allItems/allItem";
import Custom_Search from "./Search_Bar_OnSlider/custom_Search";
import Item from "./new_Items/new_item";
import Sidebar from "./slidebar/sidebar";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
const Main = () => {
  const { sticky, stickyRef } = useSticky();
  const [state, setState] = useState({
    isPaneOpen: false,
  });
  const [paneLeft, SetpanLeft] = useState(false);

  return (
    <>
      <header className="header">
        <Stickybar setState={setState} />
      </header>
      <nav ref={stickyRef} className={classNames("Static_Menu", { sticky })}>
        <Header SetpanLeft={SetpanLeft} />
      </nav>
      <div
        style={{
          height: sticky ? `${stickyRef.current?.clientHeight}px` : "0px",
        }}
      />

      <div>
        <SlidingPane
          className="some-custom-class"
          overlayClassName="some-custom-overlay-class"
          isOpen={state.isPaneOpen}
          width="400px"
        >
          onRequestClose={() => SetpanLeft(false)}
          <Sidebar setState={setState} />
        </SlidingPane>
        <SlidingPane
          closeIcon={<div>Some div containing custom close icon.</div>}
          isOpen={paneLeft}
          title="Hey, it is optional pane title.  I can be React component too."
          from="left"
          width="200px"
          onRequestClose={() => SetpanLeft(false)}
        >
          <div>And I am pane content on left.</div>
        </SlidingPane>
      </div>

      <Slider />
      <Custom_Search />
      <Collection />
      <Item />
      <AllItem />
      <Blog />
      <Footer />
    </>
  );
};

export default Main;
