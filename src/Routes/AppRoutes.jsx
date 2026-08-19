import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Products from "../pages/Products.jsx";
import Services from "../pages/Services.jsx";
import FacilityManagementServices from "../pages/FacilityManagementServices.jsx";
import NetworkIntegrationServices from "../pages/NetworkIntegrationServices.jsx";
import Careers from "../pages/Careers.jsx";
import Contact from "../pages/Contact.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/services" element={<Services />} />
      <Route
        path="/facility-management-services"
        element={<FacilityManagementServices />}
      />
      <Route
        path="/network-integration-services"
        element={<NetworkIntegrationServices />}
      />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
