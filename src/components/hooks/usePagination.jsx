import React, { useContext, useEffect, useState } from "react";

export default function usePagination(data, pageSize = 50) {
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pagesCount = Math.ceil(data.length / pageSize);

  function currentData() {
    const endIndex = currentPage * pageSize;
    const startIndex = endIndex - pageSize;
    setPaginatedProducts(data.slice(startIndex, endIndex));
  }

  function next() {
    setCurrentPage((currentPage) => Math.min(currentPage + 1, pagesCount));
  }

  function prev() {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  }

  function pageNumbers() {
    const numbersArray = Array.from(Array(pagesCount).keys(), (x) => ++x);
    return numbersArray;
  }

  useEffect(() => {
    currentData();
  }, [data, currentPage]);

  return {
    currentPage,
    setCurrentPage,
    next,
    prev,
    currentData,
    pageNumbers,
    paginatedProducts,
  };
}
