import DetailPage from "pages/Detail";
import HomePage from "pages/Home";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="detail" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Application;
