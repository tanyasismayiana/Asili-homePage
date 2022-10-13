import React from "react";
import ai from "../images/ai.jpg";
import dress from "../images/dress.png";
import jacket from "../images/jacket.png";
import tshirt from "../images/tshirt.png";
import trouser from "../images/trouser.png";
import fashion from "../images/fashion.png";

import "./Nav.css";

const Navbar = () => {
  return (
    <div className="nav">
      <nav>
        <div className="nav-list">
          <div className="asili-logo">
            <img src={ai} />
          </div>
          <div className="people-category">
            <a href="https://www.pinterest.com/search/pins/?q=men%20cloths&rs=typed">Men</a>
            <a href="https://www.pinterest.com/search/pins/?q=african%20women%20cloths&rs=typed">Women</a>
            <a href="https://www.pinterest.com/search/pins/?q=african%20kids%20cloths&rs=typed">Kids</a>
          </div>
        </div>
        <div className="nav-search">
          <input type="text" placeholder="Search" />
          <button className="btnRegister" ><a href="https://www.formpl.us/form/5365252036362240">Register</a></button>
        </div>
      </nav>
      <div className="landing-page">
        <div className="intro">
          <h1>Asili Active wear</h1>
          <p>
            Asili Active Wear the leading cloth brand which brings you high
            quality products at affordable prices.<br></br>Visit our website
            today and get the best deals!
          </p>
          <button className="btnRegister" ><a href="https://www.pinterest.com/search/pins/?q=trouser%20no%20human&rs=typed">Explore</a></button>

        </div>
        <div className="image">
          <img src={fashion} />
        </div>
      </div>

      <div className="top-categories">
        <h1>Top Categories</h1>
        <p className="parag-one">
          Duis aute irure dolor in reprehenderit in voluptate velit essecillum
          dolore eu fugiat nulla pariatur{" "}
        </p>
        <p>
          cillum dolore eu fugiat nulla pariatur. cillum dolore eu fugiat nulla
          pariatur{" "}
        </p>
      </div>
      <div className="cloth-categories">
        <img></img>
      </div>
      <div className="cloth-categories">
        <div className="clothes">
          <img src={dress} />
          <p className="cloth-name"> <a href="https://www.pinterest.com/pin/476466835587014279/">Dress</a></p>
        </div>
        <div className="clothes">
          <img src={jacket} />
          <p className="cloth-name"> <a href="https://www.pinterest.com/pin/476466835587014279/">Jacket</a></p>
        </div>
        <div className="clothes">
          <img src={trouser} />
          <p className="cloth-name"> <a href="https://www.pinterest.com/pin/476466835587014279/">Trousers</a></p>
        </div>
        <div className="clothes">
          <img src={tshirt} />
          <p className="cloth-name"> <a href="https://www.pinterest.com/pin/476466835587014279/">T-shirts</a></p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
