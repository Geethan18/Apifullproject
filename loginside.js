import React from "react";
import {Link } from "react-router-dom";
function LoginPage(){
    return(
        <div>
          
          <div>
  <Link to='/am'><div class="card">
    <div class="wrapper">
    <img src="https://res.cloudinary.com/dvyby9jur/image/upload/v1678087563/automobile/83444cb7e30e52a9e5c410cf033de112_zw1kap.jpg" class="cover-image" />
    </div>
    <img src="https://res.cloudinary.com/dvyby9jur/image/upload/v1678094459/automobile/e3ad2135ea7b32b02fd5d2b8f8a21872-removebg-preview-removebg-preview_f5lvy2.png" class="character" />
  </div>
  </Link>
  <Link to='/am' >
  <div class="card2">
    <div class="wrapper">
    <img src="https://res.cloudinary.com/dvyby9jur/image/upload/v1678086643/automobile/download_npau40.jpg" class="cover-image" />
    </div>
    <img src="https://res.cloudinary.com/dvyby9jur/image/upload/v1678086795/automobile/super-car-wallpapers-for-mobile-free-download-best-wallpapers-52-best-wallpapers-removebg-preview_eerzvh.png" class="character" />
  </div>
  </Link>
  </div>
        </div>
    );
}
export default LoginPage;