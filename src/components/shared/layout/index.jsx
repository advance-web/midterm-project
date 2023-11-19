import PropTypes from "prop-types";
import { useContext } from "react"; // Import useContext directly from "react"

import Footer from "../footer";
import Navigation from "../navigation";
import Header_login from "../header/HeaderLogin";
import HeaderNotLogin from "../header/HeaderNotLogin";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import AuthContext from "../../../contexts/auth/auth-context";

const Page_Layout = (props) => {
  const { user } = useContext(AuthContext); 

  return (
    <div>

      <Header_login />


      <Outlet />

      <Footer />


    </div>
  );
};

Page_Layout.propTypes = {
  children: PropTypes.node,
};

export default Page_Layout;
