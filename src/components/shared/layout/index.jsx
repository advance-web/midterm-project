import PropTypes from "prop-types";
import { useContext } from "react";

import HeaderNotLogin from "../header/HeaderNotLogin";
import HeaderLogin from "../header/HeaderLogin";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import AuthContext from "../../../contexts/auth/auth-context";



const Page_Layout = (props) => {
  const { user } = useContext(AuthContext);

  return (
    <div>
    
      {false ? <HeaderNotLogin /> : <HeaderLogin/>}
      
      <Outlet />
    </div>
  );
};

Page_Layout.propTypes = {
  children: PropTypes.node,
};

export default Page_Layout;
