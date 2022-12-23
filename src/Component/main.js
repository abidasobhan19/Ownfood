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
import DrawerLeft from "../Component/drawerLeft/drawerleft";
import Shopping from "./shopping/shopping";
import Brand from "./Brand/brand";
import Work from "./how_it_works/work";
import Earn_Money from "./Earn_money_with_us/earn_money";
const Main = () => {
  const { sticky, stickyRef } = useSticky();
  const [state, setState] = useState({
    isPaneOpen: false,
  });
  const [paneLeft, SetpanLeft] = useState(false);
  console.log(paneLeft);

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
          onRequestClose={() => setState({ paneLeft: false })}
          <Sidebar setState={setState} />
        </SlidingPane>

        <div style={{ zIndex: 1 }}>
          <SlidingPane
            closeIcon={
              <div>
                <i class="icofont-close"></i>
              </div>
            }
            isOpen={paneLeft}
            from="left"
            width="400px"
            onRequestClose={() => SetpanLeft(false)}
          >
            <DrawerLeft />
          </SlidingPane>
        </div>
      </div>

      <Slider />
      <Custom_Search />
      <Brand />
      <Earn_Money />
      {/* <Work /> */}
      <Collection />
      <Item />
      <AllItem />
      {/* <Shopping /> */}
      <Blog />
      <Footer />
    </>
  );
};

export default Main;
