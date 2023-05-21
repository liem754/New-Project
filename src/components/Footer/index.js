import clsx from "clsx";

import styles from "./Footer.module.scss";
import "./footer.css";
import "./grid.css";
function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className="container ">
        <div className="row ll2">
          <h1 className="col-6 le">
            Made remotely with love by Stark Lab, Inc.
          </h1>
          <div className="col-5"></div>
          <div className="col-1 ol">
            <div className="svv">
              <svg
                className="svv"
                viewBox="0 0 64 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="shrink-0"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M32 64.8574C49.6731 64.8574 64 50.5305 64 32.8574C64 15.1843 49.6731 0.857422 32 0.857422C14.3269 0.857422 0 15.1843 0 32.8574C0 50.5305 14.3269 64.8574 32 64.8574ZM30.8449 46.2821V52.0715C36.3431 52.4081 41.7211 50.3675 45.6119 46.4685C53.1294 38.9513 53.1294 26.7637 45.6119 19.247C44.9287 18.5634 44.1954 17.9318 43.418 17.3574L39.2672 21.5078L20.6491 40.1239C17.2379 34.7923 17.9961 27.8057 22.4716 23.3298C25.281 20.5148 29.1927 19.0879 33.1549 19.4327V13.6433C27.6567 13.3069 22.2788 15.3475 18.3881 19.2466C10.8706 26.7639 10.8706 38.9514 18.3881 46.4682C19.0713 47.1518 19.8046 47.7834 20.582 48.3577L24.7327 44.2074L43.3508 25.5909C46.762 30.9225 46.0038 37.9092 41.5283 42.385C38.7188 45.2 34.8072 46.6269 30.8449 46.2821Z"
                  fill="#F6F6EB"
                ></path>
              </svg>
            </div>
          </div>
        </div>

        <div className="row ll3">
          <div className="col-md-6">
            <div className="row">
              <div className="col-6">
                <div className="l-left">
                  <h3 className={styles.header}>PRODUCT</h3>
                  <ul className={styles.list}>
                    <li className={styles.item}>
                      <a href="">Stark for Mac</a>
                    </li>
                    <li className={styles.item}>
                      <a href="">Stark for Figma</a>
                    </li>
                    <li className={styles.item}>
                      <a href="">Stark for FigJam</a>
                    </li>
                    <li className={styles.item}>
                      <a href="">Stark for Sketch</a>
                    </li>
                    <li className={styles.item}>
                      <a href="">Stark for Adobe XD</a>
                    </li>
                    <li className={styles.item}>
                      <a href="">Stark for Chrome</a>
                    </li>
                    <li className={styles.item}>
                      <a href="">Stark for Edge</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6">
                <div className="l-left">
                  <h3 className={styles.header}>RESOURCES</h3>
                  <ul className={styles.list}>
                    <li className={styles.item}>
                      <a href="">Blog</a>
                    </li>
                    <li className={styles.item}>
                      <a href="">Library</a>
                    </li>
                    <li className={styles.item}>
                      <a href="">Release Notes</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-6">
                <div className="l-left">
                  <h3 className={styles.header}>HELP</h3>
                  <ul className={styles.list}>
                    <li className={styles.item}>
                      <a href="">My Account</a>
                    </li>
                    <li className={styles.item}>
                      <a href="">Support Docs</a>
                    </li>
                    <li className={styles.item}>
                      <a href="">Contact Us</a>
                    </li>
                    <li className={styles.item}>
                      <a href="">Feature Requests</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-6">
                <div className="l-left"></div>
                <h3 className={styles.header}>COMPANY</h3>
                <ul className={styles.list}>
                  <li className={styles.item}>
                    <a href="">Press Releases</a>
                  </li>
                  <li className={styles.item}>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li className={styles.item}>
                    <a href="">Cookie Policy</a>
                  </li>
                  <li className={styles.item}>
                    <a href="">Security Overview</a>
                  </li>
                  <li className={styles.item}>
                    <a href="">Status</a>
                  </li>
                  <li className={styles.item}>
                    <a href="">Terms of Service</a>
                  </li>
                  <li className={styles.item}>
                    <a href="">Code of Conduct</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.end}>
          <ul className={styles.list2}>
            <li className={styles.item2}>
              <a href="">
                <img
                  alt="Stark's Twitter account link"
                  src="https://images.getstark.co/marketing/social-media/twitter.png"
                />
              </a>
            </li>
            <li className={styles.item2}>
              <a href="">
                <img
                  alt="Stark's Instagram account link"
                  src="https://images.getstark.co/marketing/social-media/instagram.png"
                />
              </a>
            </li>
            <li className={styles.item2}>
              <a href="">
                <img
                  alt="Stark's Slack account link"
                  src="https://images.getstark.co/marketing/social-media/slack.png"
                />
              </a>
            </li>
            <li className={styles.item2}>
              <a href="">
                <img
                  alt="Stark's LinkedIn account link"
                  src="https://images.getstark.co/marketing/social-media/share-linkedin.webp"
                />
              </a>
            </li>
            <li className={styles.item2}>
              <a href="">
                <img
                  alt="Stark's YouTube account link"
                  src="https://images.getstark.co/marketing/social-media/youtube.png"
                />
              </a>
            </li>
            <li className={styles.item2}>
              <a href="">
                <img
                  alt="Stark's Dribbble account link"
                  src="https://images.getstark.co/marketing/social-media/dribbble.png"
                />
              </a>
            </li>
            <li className={styles.item2}>
              <a href="">
                <img
                  alt="Stark's Meetup account link"
                  src="https://images.getstark.co/marketing/social-media/meetup.png"
                />
              </a>
            </li>
          </ul>
          <div className={styles.cuoi}>
            <h2 className={styles.ti}>Stark Lab, Inc. Copyright 2023</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
