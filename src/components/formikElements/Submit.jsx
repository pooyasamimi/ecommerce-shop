import React from "react";
import Loading from "../Loading";

export default function Submit({ text, loading = false, formik }) {
  return (
    <button
      type="submit"
      className={`w-full bg-orange-primary hover:bg-[rgb(255,60,31)] text-white h-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 mt-2 transition-colors ${
        formik.isSubmitting
          ? "cursor-not-allowed"
          : ""
      }`}
      disabled={formik.isSubmitting}
    >
      {loading ? <Loading /> : text}
    </button>
  );
}
