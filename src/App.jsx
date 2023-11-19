import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import AuthContext from "./contexts/auth/auth-context";

import Landing from "./pages/landing";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import Home from "./pages/home";
import UserProfile from "./pages/user-profile";
import Page_Layout from "./components/shared/layout";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
  const { user } = React.useContext(AuthContext);
  return (
    <>
      <GlobalStyle />
      <Routes>
       
        <Route element={<Page_Layout />}>
          <Route path='/' element={<Landing />} />
          {user ? (
            <>
             <Route path="/home" element={<Home/>} /> 
             <Route path="/user-profile" element={<UserProfile />}/>
            </>
          ) : (
            <Navigate to="/sign-in" />
          )}
        </Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
