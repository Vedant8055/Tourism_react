import React, { useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

export default function Navbar(props) {
  
  return (
    <>
    
      <ul style={props.mystyle} >
        <li>
          <a href="#home" class="Title">
            Home
          </a>
        </li>
        <li class="dropdown">
          <h href="javascript:void(0)" class="dropbtn">
            India
          </h>
          <div class="dropdown-content">
            <div class="dropdown">
              <a href="javascript:void(0)" class="dropbtn">
                Religious
              </a>
              <div class="dropdown-content2">
                <a href="#">Kedarnath</a>
                <a href="#">Ujjain</a>
                <a href="#">Nashik</a>
              </div>
            </div>

            <div class="dropdown">
              <a href="javascript:void(0)" class="dropbtn">
                Winter
              </a>
              <div class="dropdown-content2">
                <a href="#">Kashmir</a>
                <a href="#">Ladakh</a>
                <a href="#">Shimla</a>
              </div>
            </div>
            <div class="dropdown">
              <a href="javascript:void(0)" class="dropbtn">
                Summer
              </a>
              <div class="dropdown-content2">
                <a href="#">Goa</a>
                <a href="#">lakshadweep</a>
                <a href="#">Andaman & Nicobar</a>
              </div>
            </div>
          </div>
        </li>
        <li class="dropdown">
          <h href="javascript:void(0)" class="dropbtn">
            World
          </h>
          <div class="dropdown-content">
            <div class="dropdown">
              <a href="javascript:void(0)" class="dropbtn">
                America
              </a>
              <div class="dropdown-content2">
                <a href="#">Las Vegas</a>
                <a href="#">Los Angeles</a>
                <a href="#">New York</a>
              </div>
            </div>
            <div class="dropdown">
              <a href="javascript:void(0)" class="dropbtn">
                africa
              </a>
              <div class="dropdown-content2">
                <a href="#">Egypt</a>
                <a href="#">Kenya</a>
                <a href="#">Tanzania</a>
              </div>
            </div>
            <div class="dropdown">
              <a href="javascript:void(0)" class="dropbtn">
                Australia
              </a>
              <div class="dropdown-content2">
                <a href="#">Gold coast</a>
                <a href="#">Melbourne</a>
                <a href="#">Sydney</a>
              </div>
            </div>
            <div class="dropdown">
              <a href="javascript:void(0)" class="dropbtn">
                Asia
              </a>
              <div class="dropdown-content2">
                <a href="#">Malaysia</a>
                <a href="#">Japan</a>
                <a href="#">Bhutan</a>
              </div>
            </div>
            <div class="dropdown">
              <a href="javascript:void(0)" class="dropbtn">
                Europe
              </a>
              <div class="dropdown-content2">
                <a href="#">West Europe</a>
                <a href="#">East Europe</a>
                <a href="#">North Europe</a>
              </div>
            </div>
            <div class="dropdown">
              <a href="javascript:void(0)" class="dropbtn">
                Antartica
              </a>
              <div class="dropdown-content2"></div>
            </div>
          </div>
        </li>
        <div className="divv">
          <button class="LogBtn">Log in</button>
          <button onClick={props.togglebtn} class="DarkBTn">
            {props.textt}{" "}
          </button>
        </div>
      </ul>
    </>
  );
}
