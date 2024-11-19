import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";

export default function Page404() {
  return (
    <>
    <Title>404</Title>
      <main className="grid h-[calc(100vh-4rem)] place-items-center bg-white dark:bg-inherit px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-vazirSemiBold text-indigo-600  dark:text-inherit">404</p>
          <h1 className="mt-4 text-3xl font-vazirBlack tracking-tight text-gray-900 dark:text-inherit sm:text-5xl">
            صفحه پیدا نشد
          </h1>
          <p className="mt-6 font-vazirSemiBold leading-7 text-gray-600 dark:text-inherit">
            متاسفم ! ما نتونستیم این صفحه که دنبالشی پیدا کنیم لطفا دوباره برسی
            کن
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to={"/"}
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-vazirSemiBold text-white shadow-sm hover:bg-indigo-500 dark:hover:bg-indigo-700 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              برگشت به صفحه اصلی
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
