import {
  faFaceSmile,
  faRectangleXmark,
} from "@fortawesome/free-regular-svg-icons";
import "./sidebarlogin.css";
import React from "react";
import {
  faBarsProgress,
  faCircleUser,
  faSliders,
  faStarOfDavid,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { auth } from "../../Page/Firebase/config";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";

function SidebarLogin({ mau, mau1, mau2 }) {
  const hanlog = () => {
    auth.signOut();
    window.href = "/login";
  };

  const {
    user: { displayName, email },
  } = useContext(AuthContext);
  const thay = email.slice(0, 4);
  return (
    <div className="sidelogin">
      <ul className="side-list">
        <li className="side-item ten">
          <a href="/home">
            <FontAwesomeIcon className="sideicon" icon={faCircleUser} />
            {displayName || thay}
          </a>
        </li>
        <li className="side-item">
          <a href="" className={mau ? "mauu" : ""}>
            <FontAwesomeIcon className="sideicon" icon={faStarOfDavid} />
            Getting start
          </a>
        </li>
        <li className="side-item">
          <a href="" className={mau1 ? "mauu" : ""}>
            <FontAwesomeIcon className="sideicon" icon={faSliders} />
            Account Settings
          </a>
        </li>
        <li className="side-item">
          <a href="" className={mau2 ? "mauu" : ""}>
            <FontAwesomeIcon className="sideicon" icon={faBarsProgress} />
            Billing & Subcription
          </a>
        </li>
      </ul>
      <ul className="side-list2">
        <li className="side-item2">
          <a href="">
            <FontAwesomeIcon className="sideicon" icon={faFaceSmile} />
            Support
          </a>
        </li>
      </ul>
      <a href="/login" className="btn-ho" onClick={hanlog}>
        <FontAwesomeIcon className="sideicon" icon={faRectangleXmark} />
        Log Out
      </a>
      <div className="noi"></div>
    </div>
  );
}

export default SidebarLogin;
