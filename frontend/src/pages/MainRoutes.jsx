import React from "react";
import { Route, Routes } from "react-router-dom";
import Signupmodal from "../components/Signupmodal"

import SinglePage from "./SinglePage";
import Medicines from "./Medicines";
import Loginmodal from "../components/Loginmodal";
import Homepage from "./Homepage";
import Admin from "../Admin/Admin";
import CartPage from "./Cart";



const MainRoutes = () => {
  return (
    <Routes>
       <Route path="/" element={<Homepage/>} />;
      <Route path="/getdata" element={<Medicines />} />;
      <Route path="/getdata/:id" element={<SinglePage />} />
      <Route path="/signup" element={< Signupmodal/>} />;
      <Route path="/login" element={<Loginmodal/>} />;
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/cart' element={<CartPage/>}/>
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default MainRoutes;
