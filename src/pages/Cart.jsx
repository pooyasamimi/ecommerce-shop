import React, { useContext } from "react";
import Header from "../components/Header";
import { CartContext } from "../contexts/CartContext";
import { FiMinus, FiPlus } from "react-icons/fi";
import { MdDelete, MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

import { UserContext } from "../contexts/UserContext";

export default function Cart() {
  const {
    cart,
    price,
    totalPrice,
    discount,
    removeProduct,
    changeCountHandler,
  } = useContext(CartContext);
  
  const { isLogin } = useContext(UserContext);

  return (
    <>
      {!isLogin ? (
        <div className="fixed inset-0 flex flex-col justify-center items-center">
          ‌<p className="font-vazirBold text-3xl">لطفا وارد شوید</p>
          <Link
            to={"/login"}
            className="border block mt-2 px-2 py-[5px] bg-slate-800 hover:bg-slate-900 text-white rounded-md transition-colors"
          >
            ورود
          </Link>
        </div>
      ) : (
        <>
          {" "}
          <div className="">
            <div className="sticky top-16 h-28 p-8 mb-5 shadow-sm backdrop-blur-md bg-[#dddddd3f] dark:bg-black/40 dark:text-white rounded-b">
              <h1 className="flex justify-center items-end gap-1 sm:flex-row text-3xl">
                سبد خرید
                <span className="text-sm mb-[3px]">
                  ( <span className="font-perNumBold">{cart.length}</span> کالا
                  )
                </span>
              </h1>
            </div>
            {!cart.length ? (
              <div className="text-center">
                <img
                  src="/assets/img/empty-cart.svg"
                  alt="cart is empty"
                  className="w-72 h-72 inline-block"
                  draggable="false"
                />
                <p className="text-2xl -mt-5 dark:text-white">
                  سبد خرید خالیه متاسفانه
                </p>

                <div className="mt-6 group">
                  <Link
                    to={"/"}
                    className="border px-2 py-[5px] bg-slate-800 hover:bg-slate-900 text-sm text-white rounded-md transition-colors gap-0.5 items-center inline-flex"
                  >
                    <MdOutlineArrowRightAlt className="w-6 h-6 group-hover:-translate-x-[-2px] transition-transform" />
                    رفتن به صفحه اصلی
                  </Link>
                </div>
              </div>
            ) : (
              <>
                <div className="p-8 flex flex-col sm:flex-row gap-7">
                  <div className="w-full">
                    {cart.map((product, index) => (
                      <div
                        key={index}
                        className="bg-white dark:bg-black/20 dark:text-white shadow-md mb-3 flex max-[1020px]:flex-col gap-6 py-3 px-5"
                      >
                        <div className="min-h-[200px] min-w-[200px] max-h-[200px] max-w-[200px] cursor-pointer rounded-xl overflow-hidden">
                          <img
                            src={product.image}
                            draggable="false"
                            alt="فیلترشکن روشن کنید لطفا"
                            className="h-full w-full object-contain"
                          />
                        </div>

                        <div className="py-2 flex flex-col gap-[2px] justify-center w-full">
                          <h1 className="line-clamp-2 cursor-pointer">
                            {product.title}
                          </h1>
                          <span className="font-vazirRegular text-zinc-400">
                            رنگ : {product.color}
                          </span>
                          <div className="text-base">
                            قیمت :<span className="text-orange-500"> $</span>
                            <span className="mr-1 text-xs line-through pl-2 text-zinc-400 dark:text-zinc-200">
                              {product.price}
                            </span>
                            {product.discountPrice}
                          </div>
                          <span className="text-green-400 text-xs">
                            موجود در انبار
                          </span>
                          <div className="flex items-center gap-7 mt-1.5 justify-between">
                            <div className="flex items-center gap-5">
                              <span className="font-vazirRegular">تعداد :</span>
                              <div className="flex">
                                <button
                                  className="border border-zinc-300 p-[1px]"
                                  onClick={() =>
                                    changeCountHandler(product.id, "minus")
                                  }
                                >
                                  <FiMinus className="w-5 h-5" />
                                </button>
                                <span className="border border-zinc-300 font-perNumBold px-2">
                                  {product.amount}
                                </span>
                                <button
                                  className="border border-zinc-300 p-[1px]"
                                  onClick={() =>
                                    changeCountHandler(product.id, "plus")
                                  }
                                >
                                  <FiPlus className="w-5 h-5" />
                                </button>
                              </div>
                            </div>
                            <button
                              className="flex group hover:text-red-500 font-vazirRegular text-sm transition-colors ml-3"
                              onClick={() => removeProduct(product.id)}
                            >
                              <MdDelete className="w-4 h-4" />
                              حذف محصول
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col h-fit whitespace-nowrap shrink-0 basis-1/4 bg-[#dddddd3f] dark:bg-black/20 dark:text-white shadow-md sticky top-[185px] px-5 py-3">
                    <div className="text-center font-semibold text-xl pb-3 border-b dark:border-white/30">
                      <span>خلاصه خرید</span>
                    </div>
                    <div className="flex mt-3 gap-4 text-sm">
                      <div className="flex-1 flex flex-col">
                        <span>مجموع بدون تخفیف :</span>
                        <span>هزینه ارسال :</span>
                        <span>تخفیف :</span>
                      </div>
                      <div className="flex-1 flex flex-col">
                        <span className="line-through">${price}</span>
                        <span className="text-green-500">مفتی</span>
                        <span className="text-red-500">${discount}</span>
                      </div>
                    </div>
                    <div className="flex my-2 py-1 relative items-center gap-4 shrink-0">
                      <div className="absolute h-[1px] w-full top-0 left-0 from-transparent via-black/20 dark:via-white/30 to-transparent bg-gradient-to-r"></div>
                      <span className="flex-1" >مجموع با تخفیف :</span>
                      <span className="flex-1" >
                        ${totalPrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="text-center">
                      <button className="mt-[5px]text-sm bg-slate-700 dark:bg-green-500 dark:hover:bg-green-600 text-white p-2 rounded-md hover:bg-slate-800 transition-colors">
                        تسویه حساب
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
}
