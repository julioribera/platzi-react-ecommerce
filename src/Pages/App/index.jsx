import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "../../Components/Layout";
import AppRoutes from "./AppRoutes";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
