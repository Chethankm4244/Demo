import React from "react";
import "./Sidenav.css";
import { TbArrowsLeft } from "react-icons/tb";
import { ImHome } from "react-icons/im";
import { TbSection } from "react-icons/tb";
import { RxSection } from "react-icons/rx";
import { RiShareFill } from "react-icons/ri";
import { SiNamecheap } from "react-icons/si";
import { TfiWorld } from "react-icons/tfi";
import { RiMoonClearLine } from "react-icons/ri";
import { BsCircleFill } from "react-icons/bs";

const Sidenav = () => {
  return (
    <div className="sidenav">
      <div className="containers">
        <div className="top">
          <div className="name">
            <SiNamecheap className="icon1" />
            <span>Name</span>
            <TbArrowsLeft className="icon2" />
          </div>
          <div className="input1">
            <ImHome className="icon3" />
            <span>Home</span>
          </div>
          <div className="input1">
            <TbSection className="icon3" />
            <span>Section 1</span>
          </div>
          <div className="input1">
            <RxSection className="icon3" />
            <span>Section 2</span>
          </div>
          <div className="input1">
            <RiShareFill className="icon3" />
            <span>Section 7</span>
          </div>
          <div className="input2">
            <RiShareFill className="icon3" />
            <span>Section 8</span>
          </div>
        </div>

        <div className="bottom">
          <div className="list2">
            <div className="nameicon">
              <SiNamecheap className="icon12" />
              <span className="amount">$0.90</span>
            </div>
            <div className="list3">
              <span>Buy $XYZ</span>
            </div>
          </div>

          <div className="list20">
            <div className="icon9">
              {" "}
              <TfiWorld />{" "}
            </div>
            <div className="icons">
              <div className="icon10">
                {" "}
                <RiMoonClearLine />{" "}
              </div>
              <div className="icon11">
                {" "}
                <BsCircleFill />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="verticalLine"></div>
    </div>
  );
};

export default Sidenav;
