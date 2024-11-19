import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const { id, image, title, price, discount, discountPrice } = product;
  return (
    <article className="">
      <Link to={`/product/${id}`}>
        <div className="h-60 rounded-xl shadow-md overflow-hidden bg-white">
          <img
            src={image}
            alt="فیلترشکن روشن کنید"
            className="tracking-tighter text-center font-vazirRegular text-slate-700 w-full h-full object-contain cursor-pointer hover:scale-105 transition duration-300"
            draggable={false}
          />
        </div>
        <div className="mt-3 px-2">
          <h4 className="truncate text-sm">{title}</h4>
          <div className="flex gap-2 justify-evenly">
            <div className="flex gap-3">
              <div className="">
                <div className="text-base">
                  {discount ? (
                    <>
                      <span className="mr-1 text-xs line-through pl-2 text-zinc-400 dark:text-zinc-200">
                        {price}
                      </span>
                      <span className="text-green-500">$</span>
                      {discountPrice}
                    </>
                  ) : (
                    <div className="">
                      <span className="text-green-500">$</span>
                      {price}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {discount ? (
              <div className="flex items-center gap-[2px]">
                <span className="bg-red-500 text-white text-xs rounded-full flex items-center justify-center py-[3px] px-1.5">
                  {discount}%
                </span>
                <span className="text-xs font-semibold">off</span>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </Link>
    </article>
  );
}
