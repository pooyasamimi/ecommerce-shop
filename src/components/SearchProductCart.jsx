import React from "react";

export default function SearchProductCart({ product }) {
  return (
    <div
      style={{ direction: "ltr" }}
      className="w-full flex gap-2 items-center cursor-pointer hover:bg-black/30 group transition-colors relative py-2 px-5"
    >
      <img
        src={product.image}
        alt="فیلترشکن روشن کنید"
        className="w-[10%] min-w-[80px] group-hover:scale-[1.03] transition-transform"
      />
      <div className="flex flex-col text-sm text-white">
        <span className="line-clamp-1">{product.title}</span>
        <span className="text-xl">
          <span className="text-green-500">$</span>
          {product.price}
        </span>
        <span className="absolute h-[1px] w-full bottom-0 left-0 from-transparent via-white/50 to-transparent bg-gradient-to-r"></span>
      </div>
    </div>
  );
}
