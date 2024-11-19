import React, { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";

function CategorySidebar({activeCategory,setActiveCategory}) {
  // const [activeTab, setActiveTab] = useState("");
  const [showMenu, setShowMenu] = useState(false);


  function activeTabHandler(event) {
    setActiveCategory(event.target.dataset.name);
  }

  function showMenuHandler() {
    setShowMenu(!showMenu);
  }

  return (
    <div>
      <div className="fixed top-16 bottom-0 right-0 w-40 bg-black hidden sm:dark:block"></div>
      <div className="fixed bg-rose-400 w-40 h-[30%] opacity-30 rounded-full top-5 right-0 sm:block hidden"></div>
      <div className="fixed bg-blue-400 w-40 h-[60%] opacity-20 rounded-full -bottom-20 right-0 sm:block hidden"></div>
      <div className="fixed right-0 top-16 z-30 w-40 h-screen backdrop-blur-3xl sm:block hidden">
        <div className="mt-5">
          <h1 className="font-vazirBlack text-center dark:text-white">
            دسته بندی ها
          </h1>
          <ul className=" mt-2 relative dark:text-white">
            <li
              className={`px-10 hover:bg-white/50 dark:hover:bg-white/10 transition-colors cursor-pointer py-3 relative ${
                activeCategory=== "tv"
                  ? "text-orange-500 dark:text-yellow-500 border-l-4 border-orange-500 dark:border-yellow-500 rounded-full"
                  : ""
              }`}
              data-name="tv"
              onClick={activeTabHandler}
            >
              تلوزیون
            </li>
            <li
              className={`px-10 hover:bg-white/50 dark:hover:bg-white/10 transition-colors cursor-pointer py-3 relative ${
                activeCategory=== "audio"
                  ? "text-orange-500 dark:text-yellow-500 border-l-4 border-orange-500 dark:border-yellow-500 rounded-full"
                  : ""
              }`}
              data-name="audio"
              onClick={activeTabHandler}
            >
              صوتی
            </li>
            <li
              className={`px-10 hover:bg-white/50 dark:hover:bg-white/10 transition-colors cursor-pointer py-3 relative ${
                activeCategory=== "laptop"
                  ? "text-orange-500 dark:text-yellow-500 border-l-4 border-orange-500 dark:border-yellow-500 rounded-full"
                  : ""
              }`}
              data-name="laptop"
              onClick={activeTabHandler}
            >
              لپتاپ
            </li>
            <li
              className={`px-10 hover:bg-white/50 dark:hover:bg-white/10 transition-colors cursor-pointer py-3 relative ${
                activeCategory=== "mobile"
                  ? "text-orange-500 dark:text-yellow-500 border-l-4 border-orange-500 dark:border-yellow-500 rounded-full"
                  : ""
              }`}
              data-name="mobile"
              onClick={activeTabHandler}
            >
              موبایل
            </li>
            <li
              className={`px-10 hover:bg-white/50 dark:hover:bg-white/10 transition-colors cursor-pointer py-3 relative ${
                activeCategory=== "gaming"
                  ? "text-orange-500 dark:text-yellow-500 border-l-4 border-orange-500 dark:border-yellow-500 rounded-full"
                  : ""
              }`}
              data-name="gaming"
              onClick={activeTabHandler}
            >
              گیمینگ
            </li>
            <li
              className={`px-10 hover:bg-white/50 dark:hover:bg-white/10 transition-colors cursor-pointer py-3 relative ${
                activeCategory=== "apliances"
                  ? "text-orange-500 dark:text-yellow-500 border-l-4 border-orange-500 dark:border-yellow-500 rounded-full"
                  : ""
              }`}
              data-name="appliances"
              onClick={activeTabHandler}
            >
              لوازم خانگی
            </li>
          </ul>
        </div>
      </div>

      {/* mobile menu */}

      <button
        className="fixed right-2 top-5 sm:hidden z-50 dark:text-white"
        onClick={showMenuHandler}
      >
        <HiMenuAlt3 className="h-6 w-6" />
      </button>
      <div
        className={`bg-black/50 fixed inset-0 z-20 sm:hidden transition-opacity ${
          showMenu ? "opacity-100" : "opacity-0 invisible"
        }`}
        onClick={() => setShowMenu(false)}
      >
        <div
          className={`fixed right-0 top-16 z-30 w-fit h-screen bg-blue-100 dark:bg-zinc-800 dark:text-white transition-transform ${
            showMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mt-5">
            <h1 className="font-vazirBlack text-center">دسته بندی ها</h1>
            <ul className=" mt-2 relative dark:text-white">
              <li
                className={`px-10 hover:bg-white/50 dark:hover:bg-white/10 transition-colors cursor-pointer py-3 relative ${
                  activeCategory=== "tv"
                    ? "text-orange-500 dark:text-yellow-500 border-l-4 border-orange-500 dark:border-yellow-500 rounded-full"
                    : ""
                }`}
                data-name="tv"
                onClick={activeTabHandler}
              >
                تلوزیون
              </li>
              <li
                className={`px-10 hover:bg-white/50 dark:hover:bg-white/10 transition-colors cursor-pointer py-3 relative ${
                  activeCategory=== "audio"
                    ? "text-orange-500 dark:text-yellow-500 border-l-4 border-orange-500 dark:border-yellow-500 rounded-full"
                    : ""
                }`}
                data-name="audio"
                onClick={activeTabHandler}
              >
                صوتی
              </li>
              <li
                className={`px-10 hover:bg-white/50 dark:hover:bg-white/10 transition-colors cursor-pointer py-3 relative ${
                  activeCategory=== "laptop"
                    ? "text-orange-500 dark:text-yellow-500 border-l-4 border-orange-500 dark:border-yellow-500 rounded-full"
                    : ""
                }`}
                data-name="laptop"
                onClick={activeTabHandler}
              >
                لپتاپ
              </li>
              <li
                className={`px-10 hover:bg-white/50 dark:hover:bg-white/10 transition-colors cursor-pointer py-3 relative ${
                  activeCategory=== "mobile"
                    ? "text-orange-500 dark:text-yellow-500 border-l-4 border-orange-500 dark:border-yellow-500 rounded-full"
                    : ""
                }`}
                data-name="mobile"
                onClick={activeTabHandler}
              >
                موبایل
              </li>
              <li
                className={`px-10 hover:bg-white/50 dark:hover:bg-white/10 transition-colors cursor-pointer py-3 relative ${
                  activeCategory=== "gaming"
                    ? "text-orange-500 dark:text-yellow-500 border-l-4 border-orange-500 dark:border-yellow-500 rounded-full"
                    : ""
                }`}
                data-name="gaming"
                onClick={activeTabHandler}
              >
                گیمینگ
              </li>
              <li
                className={`px-10 hover:bg-white/50 dark:hover:bg-white/10 transition-colors cursor-pointer py-3 relative ${
                  activeCategory=== "apliances"
                    ? "text-orange-500 dark:text-yellow-500 border-l-4 border-orange-500 dark:border-yellow-500 rounded-full"
                    : ""
                }`}
                data-name="apliances"
                onClick={activeTabHandler}
              >
                لوازم خانگی
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategorySidebar;
