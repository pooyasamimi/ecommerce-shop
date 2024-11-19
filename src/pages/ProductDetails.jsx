import React, { useContext } from "react";
import Title from "../components/Title";
import { useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";
import LoadingAnimate from "../components/LoadingAnimate";
import { CartContext } from "../contexts/CartContext";

const ProductDetails = () => {
  const { products } = useContext(ProductContext);
  const { addProduct } = useContext(CartContext);
  const { id } = useParams();
  const product = products.find((product) => product.id == id);

  return (
    <>
      <Title>{product.title}</Title>
      {!product ? (
        <LoadingAnimate />
      ) : (
        <>
          <div
            style={{ direction: "ltr" }}
            className="flex flex-col 2xl:flex-row mt-12 pb-6 max-w-[85%] mx-auto gap-x-11 gap-y-8"
          >
            <div className="basis-2/6 rounded-xl shadow-md overflow-hidden">
              <img
                src={product.image}
                alt="لطفا رشکن روشن کنید"
                className="tracking-tighter text-center font-vazirRegular text-slate-700 w-full h-full max-h-[550px] object-contain bg-white"
              />
            </div>

            <div className="basis-4/6 flex flex-col gap-y-3 justify-center">
              <h4 className="">{product.title}</h4>
              <div className="flex gap-2">
                <div className="flex gap-3">
                  <div className="">
                    <div className="text-base flex items-end">
                      price :
                      {product.discount ? (
                        <>
                          <span className="mr-1 text-xs line-through pl-2 text-zinc-400 dark:text-zinc-200">
                            {product.price}
                          </span>
                          <span className="text-green-500">$</span>
                          {product.discountPrice}
                        </>
                      ) : (
                        <div className="">
                          &nbsp;
                          <span className="text-green-500">$</span>
                          {product.price}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {product.discount ? (
                  <div className="flex items-center gap-[2px]">
                    <span className="bg-red-500 text-white text-xs rounded-full flex items-center justify-center py-[3px] px-1.5">
                      {product.discount}%
                    </span>
                    <span className="text-xs font-semibold">off</span>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <p className="">color :{product.color}</p>
              <p className="">brand :{product.brand}</p>
              <p className="">model : {product.model}</p>
              <p className="">category : {product.category}</p>
              <p className="text-justify">{product.description}</p>
              <div className="w-full flex gap-3 lg:w-[60%] xl:w-[60%] max-1300:mx-auto relative h-8 mt-2 justify-center">
                <button className="p-1 bg-[#3F4E4F] hover:bg-[#2C3639] dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors flex items-center gap-1 text-white px-3 text-sm rounded-full shadow-md absolute inset-0">
                  <div
                    className="absolute inset-0 flex justify-center items-center gap-2"
                    onClick={() => addProduct(product, id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5 mb-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    <span className="whitespace-nowrap">
                      افزودن به سبد خرید
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;
