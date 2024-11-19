import { ErrorMessage, FastField } from "formik";
import React, { useState } from "react";
import PersonalErr from "./PersonalErr";

export default function Input({ name, label, type, placeholder, Icon }) {  

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
          type={type}
          className="w-full pr-4 pl-8 py-2 border rounded-md focus:outline-none focus:border-blue-400 dark:text-black"
          id={name}
          name={name}
          placeholder={placeholder}
        />
        <Icon className="w-5 h-5 absolute top-0 bottom-0 my-auto left-2 text-gray-500" />
      </div>

      <ErrorMessage name={name} component={PersonalErr} />
    </div>
  );
}
