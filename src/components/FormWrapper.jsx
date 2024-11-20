import React from "react";
import { Link } from "react-router-dom";

export default function FormWrapper({ children }) {
  return (
    <div className="bg-slate-50 dark:bg-gray-700 flex justify-center h-fit mt-9">
      <div className="dark:text-white w-[94%] max-w-[28rem] border border-slate-700 dark:border-slate-300 rounded-md p-5 lg:p-8 flex flex-col items-start">
        <div className="mx-auto w-24">
          <Link to={"/"}>
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
          </Link>
        </div>
        <h1 className="text-2xl font-vazirBold mt-4 mb-3 text-center">ورود</h1>
        <p className="mb-6">سلام دوست من :) لطفا اطلاعات زیرو پر کن 💜</p>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
}
