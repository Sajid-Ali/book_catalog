import React from "react";
import { ThemeProvider } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "pages/Home";
import Layout from "components/Layout";
import DetailPage from "pages/Detail";
import AddBookPage from "pages/AddBook";
import EditBookPage from "pages/EditBook";

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book/:id" element={<DetailPage />} />
            <Route path="/book/add" element={<AddBookPage />} />
            <Route path="/book/edit/:id" element={<EditBookPage />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </ThemeProvider>
  );
};

export default Application;
