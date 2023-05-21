import clsx from "clsx";
import Header from "../components/Header";

import Pricing from "../Page/Pricing";
import Footer from "../components/Footer";
import "./default.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
function DefaultLayout({ children, Page }) {
  const [chat, setChat] = useState(false);
  console.log(chat);
  return (
    <div className="all">
      <Header Page={Page} />
      <div className="wrapper">{children}</div>
      <Footer />

      <button className="nuttt" onClick={() => setChat(!chat)}>
        <FontAwesomeIcon icon={faMessage} />
      </button>
      <div className={chat ? "chatt" : "no"}>hêl</div>
    </div>
  );
}

export default DefaultLayout;
