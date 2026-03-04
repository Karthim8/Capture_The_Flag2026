import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LoginPage from "./components/LoginPage";
import Register from "./components/Register.jsx";
import TechCategories from "./components/TechCategories";
import About from "./components/About.jsx";
import DashboardPage from "./components/DashboardPage";
import FlagForm from "./components/FlagForm";
import Scoreboard from "./components/Scoreboard";
//import Categories from "./components/Categories";

// Background Video
// import bgVideo from "./video/videoplayback.mp4";
// import bgVideo from "./video/video bg ctf.mp4";
import bgVideo from "./video/bg-img.mp4";


//challenges
import Challenge0x01 from "./components/challenges/Challenge0x01/Challenge0x01.jsx";
import Challenge0x02 from "./components/challenges/Challenge0x02/Challenge0x02.jsx";
import Challenge0x03 from "./components/challenges/Challenge0x03/Challenge0x03.jsx";
import Challenge0x04 from "./components/challenges/Challenge0x04/Challenge0x04.jsx";
import Challenge0x05 from "./components/challenges/Challenge0x05/Challenge0x05.jsx";
import Challenge0x06 from "./components/challenges/Challenge0x06/Challenge0x06.jsx";
import Challenge0x07 from "./components/challenges/Challenge0x07/Challenge0x07.jsx";
import Challenge0x08 from "./components/challenges/Challenge0x08/Challenge0x08.jsx";
import Challenge0x09 from "./components/challenges/Challenge0x09/Challenge0x09.jsx";
import Challenge0x10 from "./components/challenges/Challenge0x10/Challenge0x10.jsx";
import Challenge0x11 from "./components/challenges/Challenge0x11/Challenge0x11.jsx";
import Challenge0x12 from "./components/challenges/Challenge0x12/Challenge0x12.jsx";
import Challenge0x13 from "./components/challenges/Challenge0x13/Challenge0x13.jsx";
import Challenge0x14 from "./components/challenges/Challenge0x14/Challenge0x14.jsx";
import Challenge0x15 from "./components/challenges/Challenge0x15/Challenge0x15.jsx";
import Challenge0x16 from "./components/challenges/Challenge0x16/Challenge0x16.jsx";
import Challenge0x17 from "./components/challenges/Challenge0x17/Challenge0x17.jsx";
import Challenge0x18 from "./components/challenges/Challenge0x18/Challenge0x18.jsx";
import Challenge0x19 from "./components/challenges/Challenge0x19/Challenge0x19.jsx";
import Challenge0x20 from "./components/challenges/Challenge0x20/Challenge0x20.jsx";
import Challenge0x21 from "./components/challenges/Challenge0x21/Challenge0x21.jsx";
import Challenge0x22 from "./components/challenges/Challenge0x22/Challenge0x22.jsx";
import Challenge0x23 from "./components/challenges/Challenge0x23/Challenge0x23.jsx";
import Challenge0x24 from "./components/challenges/Challenge0x24/Challenge0x24.jsx";
import Challenge0x25 from "./components/challenges/Challenge0x25/Challenge0x25.jsx";
import Challenge0x26 from "./components/challenges/Challenge0x26/Challenge0x26.jsx";
import Challenge0x27 from "./components/challenges/Challenge0x27/Challenge0x27.jsx";
import Challenge0x28 from "./components/challenges/Challenge0x28/Challenge0x28.jsx";
import Challenge0x29 from "./components/challenges/Challenge0x29/Challenge0x29.jsx";
import Challenge0x30 from "./components/challenges/Challenge0x30/Challenge0x30.jsx";
import Challenge0x31 from "./components/challenges/Challenge0x31/Challenge0x31.jsx";
import Challenge0x32 from "./components/challenges/Challenge0x32/Challenge0x32.jsx";
import Challenge0x33 from "./components/challenges/Challenge0x33/Challenge0x33.jsx";
import Challenge0x34 from "./components/challenges/Challenge0x34/Challenge0x34.jsx";
import Challenge0x35 from "./components/challenges/Challenge0x35/Challenge0x35.jsx";
import Challenge0x36 from "./components/challenges/Challenge0x36/Challenge0x36.jsx";
import Challenge0x37 from "./components/challenges/Challenge0x37/Challenge0x37.jsx";
import Challenge0x38 from "./components/challenges/Challenge0x38/Challenge0x38.jsx";
import Challenge0x39 from "./components/challenges/Challenge0x39/Challenge0x39.jsx";
import Flag from "./components/challenges/Challenge0x34/flag.jsx";
import Flagcopy from "./components/challenges/Challenge0x34/flagcopy.jsx";


// Redirect to /login if not logged in
const PrivateRoute = ({ children }) => {
  return localStorage.getItem("loggedInTeam") ? children : <Navigate to="/login" replace />;
};

function App() {

  return (
    <Router>
      <Navbar /> {/* ✅ Added Navbar */}
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <video autoPlay loop muted className="background-video">
                  <source src={bgVideo} type="video/mp4" />
                </video>
                <Hero />
              </>
            }
          />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/categories" element={<PrivateRoute><TechCategories /></PrivateRoute>} />
          <Route path="/about" element={<About />} />
          <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
          <Route path="/scoreboard" element={<Scoreboard />} />
          <Route path="/flags" element={<PrivateRoute><FlagForm /></PrivateRoute>} />

          <Route path="/challenges/0x01" element={<PrivateRoute><Challenge0x01 /></PrivateRoute>} />
          <Route path="/challenges/0x02" element={<PrivateRoute><Challenge0x02 /></PrivateRoute>} />
          <Route path="/challenges/0x03" element={<PrivateRoute><Challenge0x03 /></PrivateRoute>} />
          <Route path="/challenges/0x04" element={<PrivateRoute><Challenge0x04 /></PrivateRoute>} />
          <Route path="/challenges/0x05" element={<PrivateRoute><Challenge0x05 /></PrivateRoute>} />
          <Route path="/challenges/0x06" element={<PrivateRoute><Challenge0x06 /></PrivateRoute>} />
          <Route path="/challenges/0x07" element={<PrivateRoute><Challenge0x07 /></PrivateRoute>} />
          <Route path="/challenges/0x08" element={<PrivateRoute><Challenge0x08 /></PrivateRoute>} />
          <Route path="/challenges/0x09" element={<PrivateRoute><Challenge0x09 /></PrivateRoute>} />
          <Route path="/challenges/0x10" element={<PrivateRoute><Challenge0x10 /></PrivateRoute>} />
          <Route path="/challenges/0x11" element={<PrivateRoute><Challenge0x11 /></PrivateRoute>} />
          <Route path="/challenges/0x12" element={<PrivateRoute><Challenge0x12 /></PrivateRoute>} />
          <Route path="/challenges/0x13" element={<PrivateRoute><Challenge0x13 /></PrivateRoute>} />
          <Route path="/challenges/0x14" element={<PrivateRoute><Challenge0x14 /></PrivateRoute>} />
          <Route path="/challenges/0x15" element={<PrivateRoute><Challenge0x15 /></PrivateRoute>} />
          <Route path="/challenges/0x16" element={<PrivateRoute><Challenge0x16 /></PrivateRoute>} />
          <Route path="/challenges/0x17" element={<PrivateRoute><Challenge0x17 /></PrivateRoute>} />
          <Route path="/challenges/0x18" element={<PrivateRoute><Challenge0x18 /></PrivateRoute>} />
          <Route path="/challenges/0x19" element={<PrivateRoute><Challenge0x19 /></PrivateRoute>} />
          <Route path="/challenges/0x20" element={<PrivateRoute><Challenge0x20 /></PrivateRoute>} />
          <Route path="/challenges/0x21" element={<PrivateRoute><Challenge0x21 /></PrivateRoute>} />
          <Route path="/challenges/0x22" element={<PrivateRoute><Challenge0x22 /></PrivateRoute>} />
          <Route path="/challenges/0x23" element={<PrivateRoute><Challenge0x23 /></PrivateRoute>} />
          <Route path="/challenges/0x24" element={<PrivateRoute><Challenge0x24 /></PrivateRoute>} />
          <Route path="/challenges/0x25" element={<PrivateRoute><Challenge0x25 /></PrivateRoute>} />
          <Route path="/challenges/0x26" element={<PrivateRoute><Challenge0x26 /></PrivateRoute>} />
          <Route path="/challenges/0x27" element={<PrivateRoute><Challenge0x27 /></PrivateRoute>} />
          <Route path="/challenges/0x28" element={<PrivateRoute><Challenge0x28 /></PrivateRoute>} />
          <Route path="/challenges/0x29" element={<PrivateRoute><Challenge0x29 /></PrivateRoute>} />
          <Route path="/challenges/0x30" element={<PrivateRoute><Challenge0x30 /></PrivateRoute>} />
          <Route path="/challenges/0x31" element={<PrivateRoute><Challenge0x31 /></PrivateRoute>} />
          <Route path="/challenges/0x32" element={<PrivateRoute><Challenge0x32 /></PrivateRoute>} />
          <Route path="/challenges/0x33" element={<PrivateRoute><Challenge0x33 /></PrivateRoute>} />
          <Route path="/challenges/0x34" element={<PrivateRoute><Challenge0x34 /></PrivateRoute>} />
          <Route path="/challenges/0x35" element={<PrivateRoute><Challenge0x35 /></PrivateRoute>} />
          <Route path="/challenges/0x36" element={<PrivateRoute><Challenge0x36 /></PrivateRoute>} />
          <Route path="/challenges/0x37" element={<PrivateRoute><Challenge0x37 /></PrivateRoute>} />
          <Route path="/challenges/0x38" element={<PrivateRoute><Challenge0x38 /></PrivateRoute>} />
          <Route path="/challenges/0x39" element={<PrivateRoute><Challenge0x39 /></PrivateRoute>} />
          <Route path="/challenges/yrtne-neddih/" element={<PrivateRoute><Flag /></PrivateRoute>} />
          <Route path="/challenges/hidden-entry/" element={<PrivateRoute><Flagcopy /></PrivateRoute>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;