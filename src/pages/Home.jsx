import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaGreaterThan, FaLessThan, FaMinus } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";
import HotSaleProductCart from "../components/HotSaleProductCart";
import { Link, useNavigate } from "react-router-dom";
import HotSelerCard from "../components/HotSelerCard";
import { hotSaleSlides, hotSeleProducts, HotSelers } from "../utils/datas";
import { UserContext } from "../contexts/UserContext";
import Header from "../components/Header";
import Sidebar from "../components/CategorySidebar";
import Title from "../components/Title";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import usePagination from "../components/hooks/usePagination";
import { IoCloseOutline } from "react-icons/io5";
import LoadingAnimate from "../components/LoadingAnimate";

const Home = () => {
  const { products } = useContext(ProductContext);
  const { userIsLoginH } = useContext(UserContext);
  const [filterProducts, setFilterProducts] = useState([...products]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");
  const sliderRef = useRef();

  const {
    paginatedProducts,
    currentPage,
    setCurrentPage,
    pageNumbers,
    next,
    prev,
  } = usePagination(filterProducts);

  const nextHandler = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const prevHandler = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  useEffect(() => {
    userIsLoginH();
  }, []);
  useEffect(() => {
    setCurrentPage(1);
    if (activeFilter == "all") setFilterProducts([...products]);
    else if (activeFilter == "onSale" || activeFilter == "popular")
      setFilterProducts(products.filter((product) => product[activeFilter]));
    else if (activeFilter == "cheap")
      setFilterProducts(products.filter((product) => product.price <= 200));
    else if (activeFilter == "expensive")
      setFilterProducts(products.filter((product) => product.price > 600));

    if (activeCategory != "all")
      setFilterProducts((prev) =>
        prev.filter((product) => product.category == activeCategory)
      );
  }, [activeFilter, activeCategory, products]);

  return (
    <>
      <Title>Home</Title>
      <Sidebar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      <div className="px-6 py-5 sm:pr-[184px]">
        {/* start header section */}

        <div className="">
          <h4 className="text-center md:text-start text-slate-700 dark:text-slate-200 pb-3 text-sm ml-1">
            محصولات هات
          </h4>
          {/* start swiper */}
          <div className="flex flex-col xl:flex-row gap-y-12 xl:gap-5 text-sm">
            <div className="flex gap-5 w-full flex-col md:flex-row">
              <div className="flex-1">
                <div className="h-52 md:h-full xl:h-60 rounded-xl relative overflow-hidden">
                  <div className="absolute w-full h-full overflow-hidden">
                    <Swiper
                      ref={sliderRef}
                      navigation={true}
                      className="w-full h-full"
                      autoplay
                      modules={[Autoplay, Navigation]}
                    >
                      {hotSaleSlides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                          <Link to={slide.to}>
                            <img
                              src={slide.img}
                              alt="فیلترشکن روشن کنید لطفا"
                              className="tracking-tighter text-center font-vazirRegular selection:bg-none w-full h-full dark:text-slate-700 bg-gray-300 cursor-pointer"
                            />
                          </Link>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <button
                      className="swiper-button-prev after:content-none bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-md text-black group rounded-sm"
                      onClick={nextHandler}
                    >
                      <FaLessThan className="!w-auto !h-auto group-hover:scale-125 transition-transform active:translate-x-[3px]" />
                    </button>
                    <button
                      className="swiper-button-next after:content-none bg-white/20 hover:bg-white/30 transition-colors backdrop-blur-md text-black group rounded-sm"
                      onClick={prevHandler}
                    >
                      <FaGreaterThan className="!w-auto !h-auto group-hover:scale-125 transition-transform active:translate-x-[3px]" />
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex-1 max-h-full px-2 rounded-xl block">
                <div className="grid grid-cols-2 gap-3 justify-between h-full">
                  {hotSeleProducts.map((product) => (
                    <HotSaleProductCart key={product} id={product} />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap xl:flex-col flex-grow gap-4 flex-row justify-between items-start xl:items-stretch xl:justify-normal pr-5 relative text-xs">
              <span className="absolute right-0 rounded-full inline-block h-[1px] w-full -bottom-2 xl:h-full xl:w-[1px] bg-gradient-to-b from-transparent dark:via-zinc-100 via-zinc-500 to-transparent opacity-50"></span>
              <h5 className="hidden xl:block text-[10px] text-zinc-400 dark:text-zinc-200 whitespace-nowrap">
                بهترین فروشندگان
              </h5>
              {HotSelers.map((seler) => (
                <HotSelerCard key={seler.id} {...seler} />
              ))}
            </div>
          </div>
          {/* end swiper */}
        </div>

        {/* end header section */}

        {/* start products section */}

        <div className="mt-8">
          {/* start filter buttons */}
          <div className="">
            <ul className="flex gap-2 mb-3 flex-wrap text-sm justify-center xl:justify-normal">
              <li
                className={`px-3 py-1.5 transition-colors cursor-pointer duration-500 ease-in-out rounded-full ${
                  activeFilter == "all" ? "bg-orange-500 text-white dark:bg-zinc-900" : ""
                }`}
                data-name="all"
                onClick={() => setActiveFilter("all")}
              >
                همه
              </li>
              <li
                className={`px-3 py-1.5 transition-colors cursor-pointer duration-500 ease-in-out  rounded-full ${
                  activeFilter == "popular"
                    ? "bg-orange-500 text-white dark:bg-zinc-900"
                    : ""
                }`}
                data-name="popular"
                onClick={() => setActiveFilter("popular")}
              >
                محبوب
              </li>
              <li
                className={`px-3 py-1.5 transition-colors cursor-pointer duration-500 ease-in-out  rounded-full ${
                  activeFilter == "cheap" ? "bg-orange-500 text-white dark:bg-zinc-900" : ""
                }`}
                data-name="cheap"
                onClick={() => setActiveFilter("cheap")}
              >
                ارزان
              </li>
              <li
                className={`px-3 py-1.5 transition-colors cursor-pointer duration-500 ease-in-out  rounded-full ${
                  activeFilter == "onSale" ? "bg-orange-500 text-white dark:bg-zinc-900" : ""
                }`}
                data-name="onSale"
                onClick={() => setActiveFilter("onSale")}
              >
                فروش
              </li>
              <li
                className={`px-3 py-1.5 transition-colors cursor-pointer duration-500 ease-in-out  rounded-full ${
                  activeFilter == "expensive"
                    ? "bg-orange-500 text-white dark:bg-zinc-900"
                    : ""
                }`}
                data-name="expensive"
                onClick={() => setActiveFilter("expensive")}
              >
                گران
              </li>
            </ul>
            <div
              className={`text-sm rounded-full px-2 p-[2px] shadow-md dark:bg-gray-600 transition-colors w-fit cursor-pointer flex items-center gap-[1px] group ${
                activeCategory == "all" ? "hidden" : ""
              }`}
              onClick={() => {
                setActiveCategory("all");
                setActiveFilter("all");
              }}
            >
              {activeCategory != "all" && activeCategory}
              <IoCloseOutline className="w-4 h-4 group-hover:text-red-500 transition-colors" />
            </div>
          </div>

          {/* end filter buttons */}

          {!filterProducts.length && <LoadingAnimate />}

          <div
            style={{ direction: "ltr" }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-x-5 gap-y-8 mt-6 relative"
          >
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}

            <span className="absolute h-[1px] w-full -bottom-12 from-transparent via-black/20 dark:via-white/20 to-transparent bg-gradient-to-r"></span>
          </div>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            next={next}
            prev={prev}
            pageNumbers={pageNumbers}
          />
        </div>

        {/* end products section */}
      </div>
    </>
  );
};

export default Home;
