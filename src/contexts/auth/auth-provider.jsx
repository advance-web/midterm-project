import { useState } from "react";
import AuthContext from "./auth-context"
import PropTypes from "prop-types";

const AuthProvider = (props) => {
    const [user, setUser] = useState(null)

    return <AuthContext.Provider value={{user, setUser}} >
        {props.children}
    </AuthContext.Provider>
}
AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider