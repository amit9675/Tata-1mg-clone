import React from "react";
import { Route, Routes } from "react-router-dom";

import SinglePage from "./SinglePage";
import Medicines from "./Medicines";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Medicines />} />;
      <Route path="/medicines/:id" element={<SinglePage />} />
      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
};

export default MainRoutes;
