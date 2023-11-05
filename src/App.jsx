import Layout from "./components/shared/Layout";
import { Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import SignIn from "./pages/sign-in";
import SignUp from "./pages/sign-up";
import Home from "./pages/home";
import UserProfile from "./pages/user-profile";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
