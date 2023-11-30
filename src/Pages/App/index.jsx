import "./App.css";
import { ShoppingCartProvider } from "../../Context";
import Layout from "../../Components/Layout";
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
import React from "react";

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
