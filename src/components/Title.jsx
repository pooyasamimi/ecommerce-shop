import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Title({ children }) {
  return (
    <HelmetProvider>
      <Helmet>
        <title>PooyaSamimi | {children || "not exist"}</title>
      </Helmet>
    </HelmetProvider>
  );
}
