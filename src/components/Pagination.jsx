import React, { useContext, useEffect } from "react";
export default function Pagination({
  currentPage,
  setCurrentPage,
  next,
  prev,
  pageNumbers,
}) {
  return (
    <>
      <div
        className="flex justify-center items-center gap-x-1 mt-20 mb-6"
        aria-label="Pagination"
      >
        <button
          type="button"
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          aria-label="Previous"
          onClick={() => prev()}
        >
          <svg
            aria-hidden="true"
            className="hidden shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span>قبلی</span>
        </button>
        <div className="flex items-center gap-x-1 font-perNumBold">
          {pageNumbers().map((num) => (
            <button
              key={num}
              type="button"
              className={` min-h-[38px] min-w-[38px] flex justify-center items-center hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10 ${
                num == currentPage ? "!text-blue-400" : ""
              }`}
              aria-current="page"
              onClick={() => setCurrentPage(num)}
            >
              {num}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          aria-label="Next"
          onClick={() => next()}
        >
          <span>بعدی</span>
          <svg
            aria-hidden="true"
            className="hidden shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
    </>
  );
}
