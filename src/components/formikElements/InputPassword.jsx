import { ErrorMessage, FastField } from "formik";
import React, { useEffect, useRef, useState, useTransition } from "react";
import PersonalErr from "./PersonalErr";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export default function InputPassword({ name, label, placeholder, formik }) {
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = useRef();

  function changeShowPasswordHandler(e) {

    setShowPassword(!showPassword);
    if (showPassword == false) {
      passwordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
    }
  }
  return (
    <div className="mb-2">
      <label
        htmlFor={name}
        className="block font-medium text-sm text-gray-700 mr-1 mb-1 dark:text-white"
      >
        {label}
      </label>
      <div className="relative">
        <FastField
          innerRef={passwordRef}
          type="password"
          className="w-full pr-4 pl-8 py-2 border rounded-md focus:outline-none focus:border-blue-400 dark:text-black"
          id={name}
          name={name}
          placeholder={placeholder}
        />

        {/* we heve problem to first click on icon because we change state in input onBlur event and
        we can use on mousedown event instead onclick for fix it */}
        <div
          className="w-5 h-5 absolute top-0 bottom-0 my-auto left-2 cursor-pointer text-gray-500"
          onMouseDown={changeShowPasswordHandler}
        >
          {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
        </div>
      </div>
      <ErrorMessage name={name} component={PersonalErr} />
    </div>
  );
}
