// import { useState, useEffect, useLayoutEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
import logo from "../misc/logo.png";

const NavigationBar = () => {
    
    /*
    const location = useLocation();
    const isHome = location.pathname === "/home" || location.pathname === "/";
    const isAbout = location.pathname === "/about";
    const ilgiscellaneous = location.pathname === "/miscellaneous";
    */

  return (
    <div class="navigation-bar navbar navbar-expand-md navbar-white bg-orange-50 h-20 flex items-center justify-between">
        <div class="navbar-brand ml-36 w-30 h-auto" id="logo">
            <a href="/"><img src={logo} alt="logo" title="logo" class="w-full h-auto"/></a>
        </div>
        <nav id="navbar">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item px-2"><a class="nav-link" href="#">Home</a></li>
                <li class="nav-item px-2"><a class="nav-link" href="#about">About</a></li>
                <li class="nav-item px-2"><a class="nav-link" href="/destionation" >Destination</a></li>
                <li class="nav-item px-2"><a class="nav-link" href="/tour">Tour</a></li>
                <li class="nav-item px-2"><a class="nav-link" href="/blog">Blog</a></li>
            </ul>
        </nav>
        <div class="nav-login mr-36">
            <button class="text-md px-10 text-orange-500 hover:text-orange-400">
                Login
            </button>
            <button class="text-md px-10 py-2 bg-orange-500 hover:bg-orange-400 text-white shadow-md rounded-md">
                Sign up
            </button>
        </div>
    </div>
  );
};

export default NavigationBar;