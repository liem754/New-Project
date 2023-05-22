import "./homelogin.css";
import React from "react";
function HomeLogin() {
  return (
    <div className="homelogin">
      <h1 className="ho-h1">Hey there!</h1>
      <div className="looo">
        <div class="ho-ol">
          <div>
            <h2 class="headline ">Connect with a community of experts</h2>
            <p class="bodyline  ">
              Connect with a global community of experts from all industries and
              stay up to date with.
            </p>
            <button className="ho-btn ">Join our community</button>
          </div>
          <div className="ho-img">
            <img
              src="https://images.getstark.co/web-app/users-cluster.webp"
              class="hidden sm:block"
              alt="Group of Stark users clustered in a circle with teal, yellow, and coral colored circles surrounding them."
              width="113"
            />
          </div>
        </div>
      </div>
      <h3 className="ho-h3">Make the most of Stark</h3>
      <a className="ho-tt">
        <p className="ho-p">Getting Starts</p>
        <p className="ho-pp">Tips, tricks, and all you need to use Stark</p>
      </a>
      <a className="ho-tt">
        <p className="ho-p">Getting Starts</p>
        <p className="ho-pp">Tips, tricks, and all you need to use Stark</p>
      </a>
      <a className="ho-tt">
        <p className="ho-p">Getting Starts</p>
        <p className="ho-pp">Tips, tricks, and all you need to use Stark</p>
      </a>
      <a className="ho-tt">
        <p className="ho-p">Getting Starts</p>
        <p className="ho-pp">Tips, tricks, and all you need to use Stark</p>
      </a>
      <a className="ho-tt">
        <p className="ho-p">Getting Starts</p>
        <p className="ho-pp">Tips, tricks, and all you need to use Stark</p>
      </a>
      <a className="ho-tt">
        <p className="ho-p">Getting Starts</p>
        <p className="ho-pp">Tips, tricks, and all you need to use Stark</p>
      </a>
    </div>
  );
}

export default HomeLogin;
