import React from "react";
import Content from "./Content";
import Footer from "./Footer";

const Header = () => {
  return (
    <div className="main-div">
      <div className="sub-div">
        <div className="header-div">
          <div>Home</div>
          <div>About</div>
          <div>Schedules</div>
          <div>Membership</div>
          <div>Pricing</div>
        </div>
        <div className="offer-course">
          <div>Offers</div>
          <div>Courses</div>
        </div>
      </div>
      <Content/>
      <Footer/>
    </div>
  );
};

export default Header;
