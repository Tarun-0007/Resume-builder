
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./components/App.css";
import Login from "./components/login";
import Register from "./components/register";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import Admin from "./components/Admin";
import Form from "./components/Form";
import Team from "./components/Team";
import ContactLola from "./components/ContactLola";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="Homepage" element={<Homepage />} />
          <Route path="Team" element={<Team />} />
          <Route path="admin" element={<Admin />} />
          <Route path="ContactUs" element={<ContactLola />} />
          <Route path="form" element={<Form />} /> {/* Add this route */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
