import PropTypes from "prop-types";

import Footer from "../footer";
import Navigation from "../navigation";
import Header_login from "../header_login/Header_login";
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const Page_Layout = (props) => {
  return (
    <div>
      
        <Header_login />
        
          <Outlet />
       
        
      
    </div>
  );
};

Page_Layout.propTypes = {
  children: PropTypes.node,
};

export default Page_Layout;
