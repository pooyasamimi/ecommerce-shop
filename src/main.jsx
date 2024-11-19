import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ProductProvider from "./contexts/ProductContext.jsx";
import ThemeProvider from "./contexts/ThemeContext.jsx";
import { StrictMode } from "react";
import UserProvider from "./contexts/UserContext.jsx";
import CartProvider from "./contexts/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ProductProvider>
      <ThemeProvider>
        <UserProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </UserProvider>
      </ThemeProvider>
    </ProductProvider>
  </BrowserRouter>
);
