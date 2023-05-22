import {
  faChevronCircleDown,
  faChevronDown,
  faChevronUp,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./sidebar.css";
import { useRef, useState } from "react";
import clsx from "clsx";
import styles from "./Sidebar.module.scss";
function Sidebar({ Mau }) {
  const [dung, setdung] = useState(false);
  const [dun, setdun] = useState(false);
  let lot = true;
  let lit = false;
  if (Mau === "col") {
    lot = false;
    lit = true;
  }
  // let classs = clsx(styles.link, {
  //   [styles.Xanh]: lot,
  // });

  return (
    <div className="w">
      <div className="library-trai">
        <h3 className="library-title">Search Library</h3>
        <div action="" className={dun ? "search bor" : "search"}>
          <FontAwesomeIcon className={dun ? "bor" : ""} icon={faSearch} />
          <input
            type="text"
            className="search-input"
            onFocus={() => setdun(!dun)}
            onBlur={() => setdun(false)}
          ></input>
        </div>
        <ul className="library-list">
          <li className={lot ? "library-item xanh" : "library-item"}>
            <a href="/libraryhom">Home</a>
          </li>
          <li className={lit ? "library-item xanh" : "library-item"}>
            <a href="/collection">Collections</a>
          </li>
          <li className="library-item focu" onClick={() => setdung(!dung)}>
            <a className={dung ? "focuu xanh" : "focuu"}>
              Categories
              {dung ? (
                <div className={dung ? "len xanh" : "len"}>
                  <FontAwesomeIcon icon={faChevronUp} />
                </div>
              ) : (
                <div className={dung ? "len xanh" : "len"}>
                  <FontAwesomeIcon icon={faChevronDown} />
                </div>
              )}
            </a>

            {dung && (
              <ul className="list-chil">
                <li className="item-chill">
                  <a href="">All</a>
                </li>
                <li className="item-chill">
                  <a href="">Blogs & Articles</a>
                </li>
                <li className="item-chill">
                  <a href="">Books</a>
                </li>
                <li className="item-chill">
                  <a href="">Checkslist</a>
                </li>
                <li className="item-chill">
                  <a href="">Color</a>
                </li>
                <li className="item-chill">
                  <a href="">Community</a>
                </li>
                <li className="item-chill">
                  <a href="">Companies & Organizations</a>
                </li>
                <li className="item-chill">
                  <a href="">Courses & Certificates</a>
                </li>
                <li className="item-chill">
                  <a href="">Design Patterns</a>
                </li>
                <li className="item-chill">
                  <a href="">Design Systems</a>
                </li>
              </ul>
            )}
          </li>
        </ul>
        <div className="trai-duoi">
          <div className="trai-item">
            <h2 className="trai-title">Contribute to Stark</h2>
            <p>Got any accessibility resources or news?</p>
            <button className="trai-nu">Submit a Resource</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
