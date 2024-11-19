import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { FaBell } from "react-icons/fa6";
import { TfiShoppingCart } from "react-icons/tfi";
import { FiUser } from "react-icons/fi";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { ThemeContext } from "../contexts/ThemeContext";
import { UserContext } from "../contexts/UserContext";
import { CartContext } from "../contexts/CartContext";
import Search from "./Search";

function Header() {
  const { theme, setTheme, changeThemeLocalStorageHandler } =
    useContext(ThemeContext);
  const { cart } = useContext(CartContext);

  const { notifications, removeNotif, signOut } = useContext(UserContext);

  const { isLogin, userIsLoginH } = useContext(UserContext);

  const [showNotif, setShowNotif] = useState(false);
  const [showUser, setShowUser] = useState(false);

  function themeIconClickHandler(event) {
    setTheme(event.currentTarget.dataset.theme);
    changeThemeLocalStorageHandler(event.currentTarget.dataset.theme);
  }

  function showNotifHandler(event) {
    event.stopPropagation();
    setShowNotif(!showNotif);
  }

  function showMoreHandler(event) {
    ["h-0", "opacity-0"].map((item) =>
      event.target.nextElementSibling.classList.toggle(item)
    );
    event.target.innerHTML === "بیشتر"
      ? (event.target.innerHTML = "کمتر")
      : (event.target.innerHTML = "بیشتر");
  }

  function dismisNotifHandler(id) {
    removeNotif(id);
  }

  function showUserHandler(event) {
    event.stopPropagation();
    setShowUser(!showUser);
  }

  document.addEventListener("click", () => {
    setShowNotif(false);
    setShowUser(false);
  });

  return (
    <header className="bg-white dark:bg-gray-900 dark:text-white fixed top-0 left-0 z-40 w-full h-16 flex items-center shadow-md">
      <div className="flex justify-between w-[min(100%-6rem,1380px)] mx-auto h-[70%]">
        <div className="flex items-end gap-1 text-sm mb-2">
          <Link to={"/"}>
            <span className="inline-block w-8 h-8">
              <svg viewBox="0 0 44.36 48.82">
                <g data-name="Layer 2" fill="#000000">
                  <g data-name="Layer 1" fill="#000000">
                    <path
                      fill="#ff491f"
                      d="M37.17 48.82H0L3.77 12.5H33.4l.6 6.06Z"
                    ></path>
                    <path
                      fill="#ed3618"
                      d="M19.09 24.24h20.59l2.62 24.58H16.47Z"
                    ></path>
                    <path
                      fill="#ffe14d"
                      d="M21.15 24.24h20.59l2.62 24.58H18.53Z"
                    ></path>
                    <path
                      fill="currentColor"
                      d="M26.58 16.79a.74.74 0 0 1-.74-.74V8.73a7.26 7.26 0 1 0-14.51 0v7.33a.74.74 0 1 1-1.47 0V8.73a8.73 8.73 0 0 1 17.46 0v7.33a.74.74 0 0 1-.74.73zM31.45 39a5.51 5.51 0 0 1-5.51-5.51v-4.76a.74.74 0 1 1 1.47 0v4.77a4 4 0 0 0 8.07 0v-4.77a.74.74 0 0 1 1.47 0v4.77a5.51 5.51 0 0 1-5.5 5.5z"
                      className="dark:text-white text-slate-700 "
                    ></path>
                  </g>
                </g>
              </svg>
            </span>
          </Link>
        </div>
        <Search />
        <div className="flex items-center gap-4 sm:gap-10 relative">
          <button
            className="relative transition-transform active:scale-[.85]"
            onClick={showNotifHandler}
          >
            <FaBell className="h-6 w-6 outline-none cursor-pointer text-[#FFD066]" />
            {notifications.length ? (
              <span className="bg-red-500 absolute right-[3px] top-1 h-[6px] w-[6px] rounded-full"></span>
            ) : null}
          </button>
          <div
            className={`absolute left-[60%] top-[122%] backdrop-blur-md bg-black/5 dark:bg-black/40 overflow-hidden shadow-md w-[150%] rounded-b-sm selection:bg-none transition-all ${
              showNotif
                ? "h-auto opacity-100 translate-y-0"
                : "h-0 opacity-0 -translate-y-full"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            {notifications.length ? (
              <ul className="px-5 divide-y-2">
                {notifications.map((notif) => {
                  return (
                    <li
                      key={notif.id}
                      className="text-sm py-3 relative leading-5"
                    >
                      {notif.title}{" "}
                      <span
                        className="text-xs font-medium bg-slate-800 dark:bg-red-500 py-[6px] px-2 rounded-sm text-white absolute left-0 cursor-pointer"
                        onClick={() => dismisNotifHandler(notif.id)}
                      >
                        بیخیال
                      </span>
                      <button
                        className="text-[10px] text-blue-900 dark:text-orange-500"
                        onClick={showMoreHandler}
                      >
                        بیشتر
                      </button>
                      <p className="text-sm opacity-0 h-0 break-words w-4/5">
                        {notif.body}
                      </p>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-center py-4">موردی وجود ندارد</p>
            )}
          </div>
          <button className="relative">
            <Link to={"/cart"} draggable="false">
              <TfiShoppingCart className="h-6 w-6 active:scale-[.85]" />
              {cart.length && isLogin ? (
                <span className="bg-red-400 w-5 h-5 rounded-full text-white text-xs flex items-center justify-center absolute -top-2 -right-2 pointer-events-none">
                  {cart.length}
                </span>
              ) : (
                ""
              )}
            </Link>
          </button>
          <div className="flex items-center" onClick={showUserHandler}>
            <button className="relative active:scale-[.85]">
              <FiUser className="h-6 w-6 outline-none cursor-pointer" />
              {isLogin && (
                <span className="w-[5px] h-[5px] bg-green-500 rounded-full inline-block absolute top-1 -left-[2px]"></span>
              )}
            </button>
            <div
              className={`absolute right-[40%] top-[122%] backdrop-blur-md bg-black/5 overflow-hidden shadow-md w-1/2 rounded-b-sm selection:bg-none ${
                showUser
                  ? "h-auto opacity-100 translate-y-0"
                  : "h-0 opacity-0 -translate-y-full"
              }`}
            >
              {isLogin ? (
                <button
                  className="text-sm p-3 text-center font-medium w-full dark:hover:bg-black/40 hover:bg-white/50 transition-colors duration-100 dark:bg-black/30"
                  onClick={() => {
                    signOut();
                    userIsLoginH();
                  }}
                >
                  خروج
                </button>
              ) : (
                <>
                  <Link
                    to={"/login"}
                    className="block text-sm p-3 text-center font-medium w-full dark:hover:bg-black/40 hover:bg-white/50 transition-colors duration-100 dark:bg-black/30"
                  >
                    ورود
                  </Link>

                  <Link
                    to={"/register"}
                    className="block text-sm p-3 text-center font-medium w-full dark:hover:bg-black/40 hover:bg-white/50 transition-colors duration-100 dark:bg-black/30"
                  >
                    ثبت نام
                  </Link>
                </>
              )}
            </div>
          </div>

          {theme === "light" && (
            <button
              className="relative active:scale-[.85]"
              onClick={themeIconClickHandler}
              data-theme="dark"
            >
              {" "}
              <MdOutlineDarkMode className="h-6 w-6 outline-none cursor-pointer" />
            </button>
          )}
          {theme === "dark" && (
            <button
              className="relative active:scale-[.85]"
              onClick={themeIconClickHandler}
              data-theme="light"
            >
              <MdOutlineLightMode className="h-6 w-6 outline-none cursor-pointer" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
