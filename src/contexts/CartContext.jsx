import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import supabase from "../../utils/supabase/config";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const CartContext = createContext();

function CartProvider({ children }) {
  const { user, isLogin } = useContext(UserContext);
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  async function getCart() {
    if (isLogin) {
      const { data } = await supabase
        .from("carts")
        .select("cart")
        .eq("userId", user.id);
      const [first] = data;
      if (first?.cart) {
        setCart(first.cart.map((item) => JSON.parse(item)));
        // setCart([...data[0]?.cart].map((item) => JSON.parse(item)));
      }
    }
  }

  async function updateSupabase(column, data) {
    if (isLogin) {
      const { error } = await supabase
        .from("carts")
        .update({ [column]: data })
        .eq("userId", user.id);
      if (error) {
        toast.error(
          `تغییر سبد خرید در دیتابیس با ارور مواجه شد اینترنت یا فیلترشکن چک کنید`
        );
      }
    }
  }
  useEffect(() => {
    updateSupabase("cart", cart);
    updateSupabase("price", price);
    priceH();
  }, [cart]);
  useEffect(() => {
    getCart();
  }, [user]);

  function addProduct(product, id) {
    if (isLogin) {
      const newItem = { ...product, amount: 1 };

      const cartItem = cart.find((product) => product.id == id);
      if (cartItem) {
        const newCart = [...cart].map((product) => {
          if (product.id == id)
            return { ...product, amount: cartItem.amount + 1 };
          else return product;
        });
        setCart(newCart);
        toast.success("به تعداد این محصول در سبد خرید یکی اضافه شد");
      } else {
        setCart([...cart, newItem]);
        toast.success("به سبد خرید اضافه شد");
      }
    } else {
      toast.error("لطفا اول وارد شوید");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }
  }

  function removeProduct(id) {
    const filterCart = [...cart].filter((product) => product.id != id);
    setCart(filterCart);
    toast.error("محصول از سبد خرید حذف شد");
  }

  function changeCountHandler(id, operator) {
    const oldProduct = cart.find((item) => item.id == id);
    const newCart = [...cart].map((product) => {
      if (product.id == id) {
        if (product.amount == 1 && operator == "minus") {
          toast.error("تعداد محصول نمیشه کمتر ۱ باشه");
          return product;
        }
        let newItem = {
          ...oldProduct,
          amount:
            operator == "plus" ? ++oldProduct.amount : --oldProduct.amount,
        };
        return newItem;
      } else return product;
    });
    setCart(newCart);
  }

  function priceH() {
    setPrice(0);
    setTotalPrice(0);
    cart.forEach((item) => setPrice((prev) => prev + item.price));
    cart.forEach((item) => setTotalPrice((prev) => prev + item.discountPrice));
    setDiscount((price - totalPrice).toFixed(2));
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        price,
        discount,
        totalPrice,
        addProduct,
        removeProduct,
        changeCountHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
