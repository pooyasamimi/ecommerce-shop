import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Link } from "react-router-dom";

export default function HotSaleProductCart({ id }) {
  const { products } = useContext(ProductContext);

  const filterOnSaleProducts = products
    .filter((product) => product.onSale)
    .find((product) => product.id == id);

  let { image, title, price, discount } = filterOnSaleProducts || "";

  return (
    <>
      <article style={{ direction: "ltr" }}>
        <Link to={`/product/${id}`}>
          <div className="flex gap-3 xl:flex-row flex-col items-center overflow-hidden cursor-pointer group">
            <div className="bg-slate-100 shrink-0 md:w-[110px] rounded-xl shadow-md overflow-hidden relative">
              <img
                src={image}
                alt="فیلترشکن روشن کنید"
                className="tracking-tighter text-center font-vazirRegular text-slate-700 w-full h-full object-cover transition duration-300 group-hover:scale-105"
                draggable={false}
              />
            </div>
            <div className="flex-grow">
              <h3 className="line-clamp-2 text-xs">{title}</h3>
              <div className="flex xl:flex-col xl:gap-0 gap-2">
                <div className="flex gap-3">
                  <div className="">
                    <div className="text-base">
                      <span className="mr-1 text-xs line-through pl-2 text-zinc-400 dark:text-zinc-200">
                        {price}
                      </span>
                      <span className="text-green-500">$</span>
                      {filterOnSaleProducts.discountPrice}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-[2px]">
                  <span className="bg-red-500 text-white text-xs rounded-full flex items-center justify-center py-[3px] px-1.5">
                    {discount}%
                  </span>
                  <span className="text-xs font-semibold">off</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </article>
    </>
  );
}
