
import { Routes, Route, Outlet } from "react-router-dom";
import Landing from "./pages/landing";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import Home from "./pages/home";
import UserProfile from "./pages/user-profile";

import { createGlobalStyle } from 'styled-components';
import Page_Layout from "./components/shared/layout";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`;

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
        <Routes>
          <Route element={<Page_Layout />}>

            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/user-profile" element={<UserProfile />} />


            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
