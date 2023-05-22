import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React from "react";
import "./pricing.css";
import { useEffect, useRef } from "react";
function Pricing({ ku }) {
  const hy = useRef();
  useEffect(() => {
    if (ku) {
      window.scrollTo({
        top: hy.current.offsetTop,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <div className="all">
      <div className="sv-tit">
        <h1 className="all-title">Pricing Plans</h1>
        <div className="sv">
          <svg
            className="sv"
            width="309"
            height="58"
            viewBox="0 0 309 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="ml-2"
          >
            <path
              d="M5.33987 1.2134C5.38812 0.701535 5.81679 0.311641 6.33098 0.311938L307.618 0.486231C308.281 0.486616 308.764 1.1221 308.585 1.76069L293.094 57.0467C292.974 57.4765 292.582 57.7728 292.136 57.7726L1.12749 57.6042C0.536534 57.6039 0.0723163 57.0936 0.127771 56.5053L5.33987 1.2134Z"
              fill="#FEDB63"
            ></path>
          </svg>
        </div>
      </div>
      <p className="all-text">
        Whether you’re a team of 1 or 100,000, we’ve got a plan to meet all your
        needs. Sign up and get started right away!
      </p>
      <div className="khoa">
        <div className="hoc">
          <div className="hoc1">
            <div className="hoc1-on">
              <h1 className="hoc1-title">Free</h1>
              <p className="hoc1-text">
                Get started and try Stark’s essential tools for free
              </p>

              <ul className="hoc1-list">
                <li className="hoc1-item">
                  <div className="lo">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <a>
                    Access to limited set of tools in: Stark for Sketch, Figma,
                    Adobe XD, Google Chrome, Firefox, Microsoft Edge, Brave,
                    Safari and Arc
                  </a>
                </li>
                <li className="hoc1-item">
                  <div className="lo">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <a>Access to a max of 3 projects in Stark for Mac</a>
                </li>
                <li className="hoc1-item">
                  <div className="lo">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <a>Access to Stark Community</a>
                </li>
              </ul>
            </div>
            <Link className="hoc1-btn" to="/login">
              Try stark for free
            </Link>
          </div>
          <div className="hoc1 pro">
            <div className="hoc1-on">
              <h1 className="hoc1-title">$10 / month</h1>
              <p className="hoc1-text">
                Billed annually or $12 month-to-month, renews automatically
              </p>
              <ul className="hoc1-list">
                <li className="hoc1-item">
                  <div className="lo">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <a>
                    Unlimited access to Stark for Sketch, Figma and Adobe XD
                  </a>
                </li>
                <li className="hoc1-item">
                  <div className="hieu">
                    <svg
                      width="90"
                      height="98"
                      viewBox="0 0 90 98"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      class="absolute"
                    >
                      <path
                        d="M40.4618 4.23387C43.0175 1.84954 46.9825 1.84954 49.5382 4.23387C51.3836 5.95541 54.0441 6.48462 56.4077 5.60029C59.6814 4.3755 63.3446 5.89285 64.7933 9.07372C65.8394 11.3704 68.0948 12.8774 70.617 12.965C74.1101 13.0862 76.9138 15.8899 77.035 19.383C77.1226 21.9052 78.6296 24.1606 80.9263 25.2067C84.1072 26.6554 85.6245 30.3186 84.3997 33.5923C83.5154 35.9559 84.0446 38.6164 85.7661 40.4618C88.1505 43.0175 88.1505 46.9825 85.7661 49.5382C84.0446 51.3836 83.5154 54.0441 84.3997 56.4077C85.6245 59.6814 84.1072 63.3446 80.9263 64.7933C78.6296 65.8394 77.1226 68.0948 77.035 70.617C76.9138 74.1101 74.1101 76.9138 70.617 77.035C68.0948 77.1226 65.8394 78.6296 64.7933 80.9263C63.3446 84.1072 59.6814 85.6245 56.4077 84.3997C54.0441 83.5154 51.3836 84.0446 49.5382 85.7661C46.9825 88.1505 43.0175 88.1505 40.4618 85.7661C38.6164 84.0446 35.9559 83.5154 33.5923 84.3997C30.3186 85.6245 26.6554 84.1072 25.2067 80.9263C24.1606 78.6296 21.9052 77.1226 19.383 77.035C15.8899 76.9138 13.0862 74.1101 12.965 70.617C12.8774 68.0948 11.3704 65.8394 9.07372 64.7933C5.89285 63.3446 4.3755 59.6814 5.60029 56.4077C6.48462 54.0441 5.95541 51.3836 4.23387 49.5382C1.84954 46.9825 1.84954 43.0175 4.23387 40.4618C5.95541 38.6164 6.48462 35.9559 5.60029 33.5923C4.3755 30.3186 5.89285 26.6554 9.07372 25.2067C11.3704 24.1606 12.8774 21.9052 12.965 19.383C13.0862 15.8899 15.8899 13.0862 19.383 12.965C21.9052 12.8774 24.1606 11.3704 25.2067 9.07372C26.6554 5.89285 30.3186 4.3755 33.5923 5.60029C35.9559 6.48462 38.6164 5.95541 40.4618 4.23387Z"
                        fill="#381FD1"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M43.6799 66.9589V60.3425C48.2082 60.7366 52.6787 59.1058 55.8894 55.8887C61.0043 50.7734 61.8708 42.7887 57.9723 36.6954L36.6945 57.9714L31.9508 62.7146C31.0624 62.0582 30.2243 61.3364 29.4435 60.5551C20.8522 51.9646 20.8522 38.0359 29.4435 29.4447C33.8901 24.9887 40.0363 22.6565 46.3199 23.041V29.6574C41.7916 29.2634 37.3212 30.8942 34.1104 34.1113C28.9955 39.2266 28.129 47.2113 32.0275 53.3045L53.3053 32.029L58.0492 27.2857C58.9376 27.9421 59.7757 28.6639 60.5565 29.4452C69.1478 38.0358 69.1478 51.9644 60.5565 60.5556C56.1098 65.0116 49.9636 67.3436 43.6799 66.9589Z"
                        fill="white"
                      ></path>
                      <path
                        d="M30 80C30 77.7909 31.7909 76 34 76H56C58.2091 76 60 77.7909 60 80V92C60 94.2091 58.2091 96 56 96H34C31.7909 96 30 94.2091 30 92V80Z"
                        fill="#DBF4D7"
                      ></path>
                      <path
                        d="M35.5143 90.5H36.9362V87.3706H39.0817C40.8781 87.3706 42.1222 86.1455 42.1222 84.3555V84.3428C42.1222 82.5464 40.8781 81.3403 39.0817 81.3403H35.5143V90.5ZM38.7262 82.54C39.9577 82.54 40.675 83.2065 40.675 84.3491V84.3618C40.675 85.5107 39.9577 86.1772 38.7262 86.1772H36.9362V82.54H38.7262ZM43.7876 90.5H45.165V86.3804C45.165 85.3838 45.8823 84.7363 46.936 84.7363C47.1963 84.7363 47.4312 84.7681 47.6787 84.8188V83.5493C47.5391 83.5176 47.2979 83.4858 47.0757 83.4858C46.1553 83.4858 45.5142 83.9175 45.2666 84.6475H45.165V83.6064H43.7876V90.5ZM51.7245 90.6333C53.743 90.6333 54.9808 89.2812 54.9808 87.0596V87.0469C54.9808 84.8252 53.7367 83.4731 51.7245 83.4731C49.7059 83.4731 48.4618 84.8315 48.4618 87.0469V87.0596C48.4618 89.2812 49.6996 90.6333 51.7245 90.6333ZM51.7245 89.4844C50.5375 89.4844 49.8709 88.5894 49.8709 87.0596V87.0469C49.8709 85.5171 50.5375 84.6221 51.7245 84.6221C52.9051 84.6221 53.578 85.5171 53.578 87.0469V87.0596C53.578 88.583 52.9051 89.4844 51.7245 89.4844Z"
                        fill="#194111"
                      ></path>
                      <path
                        d="M34 78H56V74H34V78ZM58 80V92H62V80H58ZM56 94H34V98H56V94ZM32 92V80H28V92H32ZM34 94C32.8954 94 32 93.1046 32 92H28C28 95.3137 30.6863 98 34 98V94ZM58 92C58 93.1046 57.1046 94 56 94V98C59.3137 98 62 95.3137 62 92H58ZM56 78C57.1046 78 58 78.8954 58 80H62C62 76.6863 59.3137 74 56 74V78ZM34 74C30.6863 74 28 76.6863 28 80H32C32 78.8954 32.8954 78 34 78V74Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <div className="lo">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <a>
                    Unlimited access to Stark for Google Chrome, Firefox,
                    Microsoft Edge, Brave, Safari and Arc
                  </a>
                </li>
                <li className="hoc1-item">
                  <div className="lo">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <a>
                    Unlimited access to Sidekick, our revolutionary AI
                    assistant.
                  </a>
                </li>
                <li className="hoc1-item">
                  <div className="lo">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <a>
                    Plus new Pro-Features: Focus Order, Landmarks, Alt-Text,
                    Typography Analysis, Touch Targets, Live Preview in browser
                  </a>
                </li>
                <li className="hoc1-item">
                  <div className="lo">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <a>
                    Unlimited access to Sidekick, our revolutionary AI
                    assistant.
                  </a>
                </li>
              </ul>
            </div>
            <Link className="hoc1-btn" to="/login">
              Subscribe for 10$
            </Link>
          </div>
          <div className="hoc1 pro">
            <div className="hoc1-on">
              <div className="team">
                <svg
                  width="90"
                  height="98"
                  viewBox="0 0 90 98"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute"
                >
                  <path
                    d="M40.4618 4.23387C43.0175 1.84954 46.9825 1.84954 49.5382 4.23387C51.3836 5.95541 54.0441 6.48462 56.4077 5.60029C59.6814 4.3755 63.3446 5.89285 64.7933 9.07372C65.8394 11.3704 68.0948 12.8774 70.617 12.965C74.1101 13.0862 76.9138 15.8899 77.035 19.383C77.1226 21.9052 78.6296 24.1606 80.9263 25.2067C84.1072 26.6554 85.6245 30.3186 84.3997 33.5923C83.5154 35.9559 84.0446 38.6164 85.7661 40.4618C88.1505 43.0175 88.1505 46.9825 85.7661 49.5382C84.0446 51.3836 83.5154 54.0441 84.3997 56.4077C85.6245 59.6814 84.1072 63.3446 80.9263 64.7933C78.6296 65.8394 77.1226 68.0948 77.035 70.617C76.9138 74.1101 74.1101 76.9138 70.617 77.035C68.0948 77.1226 65.8394 78.6296 64.7933 80.9263C63.3446 84.1072 59.6814 85.6245 56.4077 84.3997C54.0441 83.5154 51.3836 84.0446 49.5382 85.7661C46.9825 88.1505 43.0175 88.1505 40.4618 85.7661C38.6164 84.0446 35.9559 83.5154 33.5923 84.3997C30.3186 85.6245 26.6554 84.1072 25.2067 80.9263C24.1606 78.6296 21.9052 77.1226 19.383 77.035C15.8899 76.9138 13.0862 74.1101 12.965 70.617C12.8774 68.0948 11.3704 65.8394 9.07372 64.7933C5.89285 63.3446 4.3755 59.6814 5.60029 56.4077C6.48462 54.0441 5.95541 51.3836 4.23387 49.5382C1.84954 46.9825 1.84954 43.0175 4.23387 40.4618C5.95541 38.6164 6.48462 35.9559 5.60029 33.5923C4.3755 30.3186 5.89285 26.6554 9.07372 25.2067C11.3704 24.1606 12.8774 21.9052 12.965 19.383C13.0862 15.8899 15.8899 13.0862 19.383 12.965C21.9052 12.8774 24.1606 11.3704 25.2067 9.07372C26.6554 5.89285 30.3186 4.3755 33.5923 5.60029C35.9559 6.48462 38.6164 5.95541 40.4618 4.23387Z"
                    fill="#381FD1"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M43.6799 66.9589V60.3425C48.2082 60.7366 52.6787 59.1058 55.8894 55.8887C61.0043 50.7734 61.8708 42.7887 57.9723 36.6954L36.6945 57.9714L31.9508 62.7146C31.0624 62.0582 30.2243 61.3364 29.4435 60.5551C20.8522 51.9646 20.8522 38.0359 29.4435 29.4447C33.8901 24.9887 40.0363 22.6565 46.3199 23.041V29.6574C41.7916 29.2634 37.3212 30.8942 34.1104 34.1113C28.9955 39.2266 28.129 47.2113 32.0275 53.3045L53.3053 32.029L58.0492 27.2857C58.9376 27.9421 59.7757 28.6639 60.5565 29.4452C69.1478 38.0358 69.1478 51.9644 60.5565 60.5556C56.1098 65.0116 49.9636 67.3436 43.6799 66.9589Z"
                    fill="white"
                  ></path>
                  <path
                    d="M24 80C24 77.7909 25.7909 76 28 76H62C64.2091 76 66 77.7909 66 80V92C66 94.2091 64.2091 96 62 96H28C25.7909 96 24 94.2091 24 92V80Z"
                    fill="#FCF0B7"
                  ></path>
                  <path
                    d="M31.6665 90.5H33.0884V82.5654H35.9638V81.3403H28.7846V82.5654H31.6665V90.5ZM39.1907 90.6333C40.9554 90.6333 41.9075 89.6177 42.1361 88.71L42.1488 88.6528L40.8221 88.6592L40.7967 88.71C40.6317 89.0654 40.1048 89.5034 39.2225 89.5034C38.0863 89.5034 37.3626 88.7354 37.3372 87.415H42.2249V86.9326C42.2249 84.8633 41.0443 83.4731 39.1209 83.4731C37.1976 83.4731 35.9534 84.9141 35.9534 87.0659V87.0723C35.9534 89.2559 37.1722 90.6333 39.1907 90.6333ZM39.1273 84.603C40.0604 84.603 40.7523 85.1997 40.8602 86.4312H37.3563C37.4769 85.2441 38.1878 84.603 39.1273 84.603ZM45.7438 90.6143C46.6579 90.6143 47.3815 90.2207 47.7878 89.5225H47.8957V90.5H49.2604V85.7837C49.2604 84.3364 48.2829 83.4731 46.55 83.4731C44.9821 83.4731 43.8967 84.2285 43.7316 85.3584L43.7253 85.4028H45.0519L45.0583 85.3774C45.2233 84.8887 45.7248 84.6094 46.4865 84.6094C47.4196 84.6094 47.8957 85.0283 47.8957 85.7837V86.3931L46.0295 86.501C44.3854 86.6025 43.4587 87.3198 43.4587 88.5513V88.564C43.4587 89.8145 44.4299 90.6143 45.7438 90.6143ZM44.8298 88.5068V88.4941C44.8298 87.8721 45.2614 87.5293 46.2136 87.4722L47.8957 87.3643V87.9546C47.8957 88.8433 47.1403 89.5161 46.112 89.5161C45.3693 89.5161 44.8298 89.1416 44.8298 88.5068ZM51.1924 90.5H52.5698V86.2661C52.5698 85.3647 53.1856 84.6538 54.0171 84.6538C54.8296 84.6538 55.3438 85.1489 55.3438 85.936V90.5H56.7149V86.1392C56.7149 85.3076 57.2925 84.6538 58.1685 84.6538C59.0698 84.6538 59.5015 85.1235 59.5015 86.0757V90.5H60.8726V85.7456C60.8726 84.311 60.0601 83.4731 58.6699 83.4731C57.7115 83.4731 56.918 83.9619 56.5689 84.7046H56.461C56.1563 83.9619 55.4898 83.4731 54.5503 83.4731C53.649 83.4731 52.9761 83.9111 52.6714 84.6665H52.5698V83.6064H51.1924V90.5Z"
                    fill="#473505"
                  ></path>
                  <path
                    d="M28 78H62V74H28V78ZM64 80V92H68V80H64ZM62 94H28V98H62V94ZM26 92V80H22V92H26ZM28 94C26.8954 94 26 93.1046 26 92H22C22 95.3137 24.6863 98 28 98V94ZM64 92C64 93.1046 63.1046 94 62 94V98C65.3137 98 68 95.3137 68 92H64ZM62 78C63.1046 78 64 78.8954 64 80H68C68 76.6863 65.3137 74 62 74V78ZM28 74C24.6863 74 22 76.6863 22 80H26C26 78.8954 26.8954 78 28 78V74Z"
                    fill="white"
                  ></path>
                </svg>
              </div>
              <h1 className="hoc1-title">$15 / month</h1>
              <p className="hoc1-text">
                Starting at 5 seats, billed annually, renews automatically
              </p>
              <ul className="hoc1-list">
                <li className="hoc1-item">
                  <div className="lo">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <a>Everything in Pro plus...</a>
                </li>
                <li className="hoc1-item">
                  <div className="lo">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <a>Group Billing</a>
                </li>
                <li className="hoc1-item">
                  <div className="lo">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <a>Admin Dashboard for account management</a>
                </li>
                <li className="hoc1-item">
                  <div className="lo">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <a>Multi-Team Management</a>
                </li>
                <li className="hoc1-item">
                  <div className="lo">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <a>Priority Support</a>
                </li>
                <li className="hoc1-item">
                  <div className="lo">
                    <FontAwesomeIcon icon={faCheck} />
                  </div>
                  <a>Admin Dashboard for account management</a>
                </li>
              </ul>
            </div>
            <Link
              className={ku ? "hoc1-btn anim" : "hoc1-btn"}
              to="./login"
              ref={hy}
            >
              Start free 30-day trial
            </Link>
          </div>
        </div>
        <div className="ngang">
          <div className="ngang-trai">
            <h1 className="ngang-heder">Enterprise</h1>
            <p className="ngang-text">
              Use Stark at large enterprise scale with advanced account
              management, enterprise-grade security and more flexible
              integrations. Security reviews and terms may be customized.
            </p>
          </div>
          <div className="ngang-phai">
            <button className="ngang-btn">Get in touch</button>
          </div>
        </div>
      </div>
      <div className="tt">
        <div className="om">
          <div className="posi-tit">
            <h1 className="om-title">Compare Plans</h1>
            <p className="om-text">
              Pick a plan that fits your needs. All our plans are flexible and
              can be changed at any time.
            </p>
            <div className="posi">
              <svg
                class="plan__compare-svg"
                width="247"
                height="73"
                viewBox="0 0 233 63"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M232.943 6.03127C232.974 5.46718 232.532 4.98941 231.967 4.97661L13.0846 0.018982C12.5998 0.00800118 12.177 0.346442 12.0815 0.82189L0.238159 59.8137C0.114594 60.4292 0.582123 61.0051 1.2099 61.0105L228.856 62.9917C229.39 62.9963 229.833 62.5801 229.863 62.0466L232.943 6.03127Z"
                  fill="#FEDB63"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="tt-body">
          <p className="body-dau">Features</p>
          <div className="body-cuoi">
            <p className="body-dau1">Free Plan</p>
            <p className="body-dau1">Pro Plan</p>
            <p className="body-dau2">Team Plan</p>
          </div>
        </div>
        <div className="tt-next">
          <h2 className="next-title">Stark for Figma</h2>
          <div className="chay">
            <p className="chay-dau">
              Sidekick: Your Accessibility AI Assistant
            </p>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Contrast Checker + Color Suggestions</p>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Vision Simulator + Generator</p>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Landmarks</p>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Focus Order</p>

            <div className="chay-icon cach">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Design Systems colors in Suggestions</p>

            <div className="chay-icon cach">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Alt-Text Annotations</p>

            <div className="chay-icon cach">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Typography Analysis</p>

            <div className="chay-icon cach">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Touch Targets</p>

            <div className="chay-icon cach">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
        </div>
        <div className="tt-next">
          <h2 className="next-title">Stark for Sketch</h2>
          <div className="chay">
            <p className="chay-dau">
              Sidekick: Your Accessibility AI Assistant
            </p>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Contrast Checker + Color Suggestions</p>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Vision Simulator + Generator</p>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Landmarks</p>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Focus Order</p>

            <div className="chay-icon cach">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Design Systems colors in Suggestions</p>

            <div className="chay-icon cach">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Alt-Text Annotations</p>

            <div className="chay-icon cach">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Typography Analysis</p>

            <div className="chay-icon cach">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Touch Targets</p>

            <div className="chay-icon cach">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
        </div>

        <div className="tt-next">
          <h2 className="next-title">Stark for Adobe XD</h2>

          <div className="chay">
            <p className="chay-dau">Contrast Checker + Color Suggestions</p>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Vision Simulator + Generator</p>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>

          <div className="chay">
            <p className="chay-dau">Typography Analysis</p>

            <div className="chay-icon cach">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Touch Targets</p>

            <div className="chay-icon cach">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
        </div>
        <div className="tt-next">
          <h2 className="next-title">
            Stark for Google Chrome, Firefox, Microsoft Edge, Brave, Safari, Arc
          </h2>
          <div className="chay">
            <p className="chay-dau">Contrast Checker</p>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>

          <div className="chay">
            <p className="chay-dau">Vision Simulator</p>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Focus Order</p>

            <div className="chay-icon cach">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Landmarks</p>

            <div className="chay-icon cach">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>

          <div className="chay">
            <p className="chay-dau">Alt-Text Annotations</p>

            <div className="chay-icon cach">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Typography Analysis</p>

            <div className="chay-icon cach">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Touch Targets</p>

            <div className="chay-icon cach">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Color Suggestions with Live Preview</p>

            <div className="chay-icon cach">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Audit Report</p>

            <div className="chay-icon cach">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
        </div>
        <div className="tt-next">
          <h2 className="next-title">Stark Platform & Account Management</h2>
          <div className="chay">
            <p className="chay-dau">Sign in with Google</p>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>

          <div className="chay">
            <p className="chay-dau">Sign in with Apple</p>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Sign in with Email</p>

            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">SSO (available as add-on option)</p>

            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>

          <div className="chay">
            <p className="chay-dau">Beta access to latest features</p>

            <div className="chay-icon cach">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Admin Dashboard</p>

            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Multi-team management</p>

            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Priority Support</p>

            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Group Billing</p>

            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
        </div>
        <div className="tt-next cui">
          <h2 className="next-title">Stark for Mac</h2>
          <div className="tt-body">
            <p className="body-dau1 ha">Projects</p>
            <div className="body-cuoi">
              <p className="body-dau6">2</p>
              <p className="body-dau3">Unlimited</p>
              <p className="body-dau4">Unlimited</p>
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">
              Sidekick: Your Accessibility AI Assistant
            </p>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Contrast Checker + Color Suggestions</p>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Vision Simulator + Generator</p>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Landmarks</p>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Focus Order</p>

            <div className="chay-icon cach">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Design Systems colors in Suggestions</p>

            <div className="chay-icon cach">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Alt-Text Annotations</p>

            <div className="chay-icon cach">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Typography Analysis</p>

            <div className="chay-icon cach">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
          <div className="chay">
            <p className="chay-dau">Touch Targets</p>

            <div className="chay-icon cach">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="chay-icon">
              <FontAwesomeIcon icon={faCheck} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
