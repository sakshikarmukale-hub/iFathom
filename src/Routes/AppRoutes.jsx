import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Products from "../pages/Products.jsx";
import Services from "../pages/Services.jsx";
import FacilityManagementServices from "../pages/FacilityManagementServices.jsx";
import NetworkIntegrationServices from "../pages/NetworkIntegrationServices.jsx";
import Careers from "../pages/career/Careers.jsx";
import PythonDeveloper from "../pages/career/PythonDeveloper.jsx";
import JavaScriptDeveloper from "../pages/career/JavaScriptDeveloper.jsx";
import JavaDeveloper from "../pages/career/JavaDeveloper.jsx";
import GoDeveloper from "../pages/career/GoDeveloper.jsx";
import IOSSwiftDeveloper from "../pages/career/IOSSwiftDeveloper.jsx";
import CPPDeveloper from "../pages/career/CPPDeveloper.jsx";
import VerilogDeveloper from "../pages/career/VerilogDeveloper.jsx";
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
      <Route path="/careers/python-developer" element={<PythonDeveloper />} />
      <Route path="/careers/javascript-developer" element={<JavaScriptDeveloper />} />
      <Route path="/careers/java-developer" element={<JavaDeveloper />} />
      <Route path="/careers/go-developer" element={<GoDeveloper />} />
      <Route path="/careers/ios-swift" element={<IOSSwiftDeveloper />} />
      <Route path="/careers/cpp-developer" element={<CPPDeveloper />} />
      <Route path="/careers/verilog-developer" element={<VerilogDeveloper />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
