import React, { useContext, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Header from "./components/Header.jsx";
import { ThemeContext } from "./contexts/ThemeContext.jsx";
import { ProductContext } from "./contexts/ProductContext.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import { Toaster } from "react-hot-toast";
import ChangePassword from "./pages/ChangePassword.jsx";
import Page404 from "./pages/Page404.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";
import LoadingAnimate from "./components/LoadingAnimate.jsx";
import Cart from "./pages/Cart.jsx";

function App() {
  const { products } = useContext(ProductContext);
  const { theme } = useContext(ThemeContext);

  return !products.length ? (
    <div className="fixed inset-1/2">
      <LoadingAnimate />
    </div>
  ) : (
    <div className={`${theme === "dark" ? "dark" : ""}`}>
      <div className={`dark:text-white dark:bg-gray-700 pt-16 min-h-screen`}>
        <Header />
        <Toaster position="top-center" reverseOrder={false} />
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/changepassword" element={<ChangePassword />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
