import SidebarLogin from "../SidebarLogin";
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
