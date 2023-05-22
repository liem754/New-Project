import SidebarLogin from "../SidebarLogin";
import React from "react";
import "./defaultlogin.css";
function DefaultLogin({ children, mau }) {
  return (
    <div className="defaultlogin">
      <SidebarLogin className="side" mau={mau} />
      <div className="conext">{children}</div>
    </div>
  );
}

export default DefaultLogin;
