import React, { useContext, useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { ProductContext } from "../contexts/ProductContext";
import SearchProductCart from "./SearchProductCart";
import { useLocation, useNavigate } from "react-router-dom";

export default function Search() {
  const { products } = useContext(ProductContext);
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setSearchList(products);
  }, [search]);

  function searchHandler() {
    if (search.length >= 2) {
      const filterProducts = [...searchList].filter((product) =>
        product.title.toLowerCase().includes(search)
      );
      setSearchList(filterProducts);
    }
  }

  function navigateH(id) {
    navigate(`/product/${id}`);
    setSearchList([]);
    setSearch("");
  }
  return (
    <div className="sm:w-[42%] md:w-[55%] 378:mx-6 mx-2 relative">
      <div className="h-full flex">
        <input
          type="text"
          placeholder="جستجو در محصولات حداقل دو کاراکتر"
          className="placeholder:text-xs md:placeholder:text-base pl-12 pr-5 w-full border rounded-xl outline-orange-300 dark:outline-slate-800 dark:border-none outline-offset-1 dark:bg-gray-800"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          onKeyUp={() => searchHandler()}
        />
        <IoSearchOutline className="w-6 h-6 absolute left-2 top-[10px] transition-transform" />
      </div>

      {search ? (
        <div className="fixed inset-0 top-[54px] bg-black/50 backdrop-blur-sm"></div>
      ) : (
        ""
      )}
      <div className="absolute top-[54px] bg-black/50 backdrop-blur-sm rounded-xl overflow-hidden ">
        <div className=" pb-14 h-screen backdrop-blur-lg overflow-auto">
          {search.length >= 2
            ? searchList.map((product) => (
                <div key={product.id} onClick={() => navigateH(product.id)}>
                  <SearchProductCart product={product} />
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}
