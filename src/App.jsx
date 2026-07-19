import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Venue from "./pages/Venue";
import VenueDetails from "./pages/VenueDetails";
import Mybooking from "./pages/Mybooking";
import Confirm from "./pages/Confirm";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/venues" element={<Venue />} />
      <Route path="/venue/:id" element={<VenueDetails />} />
      <Route path="/my-bookings" element={<Mybooking />} />
      <Route path="/confirm" element={<Confirm />} />
    </Routes>
  );
};

export default App;
