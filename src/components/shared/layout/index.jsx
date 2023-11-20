import PropTypes from "prop-types";
import { useContext } from "react";

import HeaderNotLogin from "../header/HeaderNotLogin";
import HeaderLogin from "../header/HeaderLogin";
import { Outlet } from "react-router-dom";
import AuthContext from "../../../contexts/auth/auth-context";



const Page_Layout = () => {
  const { user } = useContext(AuthContext);
  console.log("user:", user)
  return (
    <div>
      {user ? <HeaderLogin/>: <HeaderNotLogin /> }
      
      <Outlet />
    </div>
  );
};

Page_Layout.propTypes = {
  children: PropTypes.node,
};

export default Page_Layout;
