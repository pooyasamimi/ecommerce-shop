import React from "react";
import { Link } from "react-router-dom";

export default function FormLink({ text, linkText, linkTo, text2 = "" }) {
  return (
    <p className="text-center mt-2.5">
      {text}
      <Link
        to={linkTo}
        className="text-blue-700 dark:bg-white rounded-md p-[1px] font-vazirRegular inline-block mx-[1.7px]"
      >
        {linkText}
      </Link>
      {text2}
    </p>
  );
}
