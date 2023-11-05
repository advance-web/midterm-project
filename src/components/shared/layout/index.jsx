import PropTypes from "prop-types";

import Footer from "../footer";
import Navigation from "../navigation";

const Layout = (props) => {
  return (
    <div>
      <Navigation />
      {props.children}
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
