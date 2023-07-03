import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Student from "../pages/Student";

const AppRouter = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="students" element={<Student />} />
        {/* <Route path="department/:name" element={<DetailTable />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
