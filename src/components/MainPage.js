import React from "react";
import "./MainPage.css";
import {AiFillPlusCircle} from 'react-icons/ai'
import {IoMdContact} from 'react-icons/io'
import {RiEditCircleFill} from 'react-icons/ri'

const MainPage = () => {
  return (
    <div className="wrapper">

      <div className="header">
        <span>Section</span>
        <div className="line1"></div>
      </div>
      <div className="horizontal"></div>
      <div className="lists">
        <span className="lists1">List : Things to Buy</span>
        <span className="lists1">List : Empty List</span>
        <span className="lists1">Add Todo-List</span>
       </div>

       <div className="container1">
        <div className="content">
          <div className="icon5"><IoMdContact className="left1"/></div>
          <span className="first">Add Todo</span>
          <span  className="second">Add Todo Discription</span>
          <div className="icon4"> <AiFillPlusCircle /> </div>
         </div>

        <div className="containt12">
          <div className="icon5"> <IoMdContact className="left1"/> </div>
          <span className="first">Add Todo</span>
          <span  className="second">Add Todo Discription</span>
          <div className="icon4"> <AiFillPlusCircle /></div>
        </div>
       </div>

       <div className="container1">

       <div className="content">
          <div className="icon5"> <IoMdContact className="left1" /> </div>
          <span className="first">Carrot</span>
          <span  className="second">Carrot improves eyesight.</span>
          <div className="icon4"><RiEditCircleFill/></div>
       </div>
       </div>

       <div className="container1">
       <div className="content">
        <div className="icon5"> <IoMdContact className="left1"/></div>
          <span className="first">Bicycle</span>
          <span className="second">Bicycles makes commuting easier.</span>
          <div className="icon4"><RiEditCircleFill/></div>
          </div>
       </div>

       <div className="vertivalline2"></div>

       <div className="icon6"><AiFillPlusCircle /> </div>
       <div className="line2"></div>
   </div>
);
};

export default MainPage;
