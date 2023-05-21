import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./header.module.scss";
import { Link, Route, Routes } from "react-router-dom";
import Pricing from "../../Page/Pricing";

import clsx from "clsx";
import { useState } from "react";
function Header({ Page }) {
  let cu = false;
  let ca = false;
  if (Page === "home") {
    cu = true;
  } else if (Page === "pricing") {
    ca = true;
  }
  let classs = clsx(styles.header, {
    [styles.Home]: cu,
    [styles.Pricing]: ca,
  });
  const [xuat, setxuat] = useState(false);
  return (
    <div className={classs}>
      <div className={styles.header_top}>
        <Link className={styles.linkk2} to="/">
          <svg
            width="40"
            height="40"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.4225 22.7124V25.607C18.1716 25.7753 20.8606 24.7551 22.806 22.8056C26.5647 19.0469 26.5647 12.9531 22.806 9.19477C22.4644 8.85297 22.0977 8.53716 21.709 8.25L19.6336 10.3252L10.3245 19.6332C8.61894 16.9674 8.99804 13.4741 11.2358 11.2362C12.6405 9.8287 14.5963 9.11525 16.5775 9.28762V6.39295C13.8284 6.22472 11.1394 7.24504 9.19403 9.19458C5.43532 12.9532 5.43532 19.047 9.19403 22.8054C9.53564 23.1472 9.90231 23.463 10.291 23.7501L12.3663 21.675L21.6754 12.3668C23.381 15.0325 23.0019 18.5259 20.7641 20.7638C19.3594 22.1713 17.4036 22.8847 15.4225 22.7124Z"
              fill="currentColor"
            ></path>
          </svg>
        </Link>

        <ul className={styles.list}>
          <li className={styles.item}>
            <a className={styles.link} href="/">
              PRODUCT
              <FontAwesomeIcon
                className={styles.link_icon}
                icon={faCaretDown}
              />
            </a>
            <ul className={styles.hove}>
              <li>
                <a className={styles.linkk} href="/mac">
                  Stark for Mac
                </a>
              </li>
              <li>
                <a className={styles.linkk} href="">
                  Stark for Figma
                </a>
              </li>
              <li>
                <a className={styles.linkk} href="">
                  Stark for FigJam
                </a>
              </li>
              <li>
                <a className={styles.linkk} href="">
                  Stark for Sketch
                </a>
              </li>
              <li>
                <a className={styles.linkk} href="">
                  Stark for Adobe XD
                </a>
              </li>
              <li>
                <a className={styles.linkk} href="">
                  Stark for Chorme
                </a>
              </li>
              <li>
                <a className={styles.linkk} href="">
                  Stark for Firefox
                </a>
              </li>
              <li>
                <a className={styles.linkk} href="">
                  Stark for Edge
                </a>
              </li>
              <li>
                <a className={styles.linkk} href="">
                  Stark for Safari
                </a>
              </li>
              <li>
                <a className={styles.linkk} href="">
                  Stark for Arc
                </a>
              </li>
              <li>
                <a className={styles.linkk} href="">
                  Stark for Brave
                </a>
              </li>
            </ul>
          </li>
          <li
            className={clsx(styles.item, { [styles.bo]: cu, [styles.bu]: ca })}
          >
            <a className={styles.link} href="/pricing" title="PRICING">
              PRICING
            </a>
          </li>
          <li
            className={clsx(styles.item, { [styles.bo]: cu, [styles.bu]: ca })}
          >
            <a className={styles.link} href="/blog" title="BLOG">
              BLOG
            </a>
          </li>
          <li
            className={clsx(styles.item, { [styles.bo]: cu, [styles.bu]: ca })}
          >
            <a className={styles.link} href="/library" title="LIBRARY">
              LIBRARY
            </a>
          </li>
          <li
            className={clsx(styles.item, { [styles.bo]: cu, [styles.bu]: ca })}
          >
            <a className={styles.link} href="/support" title="SUPPORT">
              SUPPORT
            </a>
          </li>
          <li
            className={clsx(styles.item, { [styles.bo]: cu, [styles.bu]: ca })}
          >
            <a className={styles.link} href="/login" title="LOG IN">
              LOG IN
            </a>
          </li>
        </ul>

        <Link className={clsx(styles.link, styles.nut)} to="/30day">
          30-DAY FREE TEAM TRIAL
        </Link>
        <button className={styles.menu}>
          <FontAwesomeIcon className={styles.ico} icon={faBars} />
        </button>

        <ul className={styles.bar}>
          <li className={styles.bar_item}>
            <a>LOGIN</a>
          </li>
          <li className={styles.bar_item}>
            <a>PRODUCT</a>
            <ul className={styles.produc}>
              <li className={styles.pro}>
                <a>Stark for Mac</a>
              </li>
              <li className={styles.pro}>
                <a>Stark for Mac</a>
              </li>
              <li className={styles.pro}>
                <a>Stark for Mac</a>
              </li>
              <li className={styles.pro}>
                <a>Stark for Mac</a>
              </li>
              <li className={styles.pro}>
                <a>Stark for Mac</a>
              </li>
              <li className={styles.pro}>
                <a>Stark for Mac</a>
              </li>
              <li className={styles.pro}>
                <a>Stark for Mac</a>
              </li>
              <li className={styles.pro}>
                <a>Stark for Mac</a>
              </li>
              <li className={styles.pro}>
                <a>Stark for Mac</a>
              </li>
            </ul>
          </li>
          <li className={styles.bar_item}>
            <a href="/pricing">PRICING</a>
          </li>
          <li className={styles.bar_item}>
            <a href="/blog">BLOG</a>
          </li>
          <li className={styles.bar_item}>
            <a href="/library">LIBRARY</a>
          </li>
          <li className={styles.bar_item}>
            <a href="/support">SUPPORT</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
