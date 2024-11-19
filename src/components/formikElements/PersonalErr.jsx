import React from "react";

export default function PersonalErr({ children }) {
  return <small className="text-red-700 dark:bg-red-700 dark:text-white dark:p-1 dark:rounded-md font-vazirRegular">{children}</small>;
}
