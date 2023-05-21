import { Children } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";
import "./libraryDefault.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
function LibraryDefault({ children, Page, Mau }) {
  const [chat, setChat] = useState(false);
  return (
    <div>
      <Header Page={Page} />
      <div className="library-all">
        <Sidebar Mau={Mau} />
        <div className="library-phai">{children}</div>
      </div>
      <Footer />
      <button className="nuttt" onClick={() => setChat(!chat)}>
        <FontAwesomeIcon icon={faMessage} />
      </button>
      <div className={chat ? "chatt" : "no"}>hêl</div>
    </div>
  );
}

export default LibraryDefault;
