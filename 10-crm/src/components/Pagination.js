import React, { useState } from "react";
import { Pagination as BootstrapPagination } from "react-bootstrap";

const Pagination = ({ page, itemsPerPage, count, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(page);

  const pagesCount = Math.ceil(count / itemsPerPage);

  const pages = Array(pagesCount)
    .fill("_")
    .map((e, i) => i + 1);

  const handlePageChange = (page) => {
    setCurrentPage(page);

    const start = (page - 1) * itemsPerPage;
    const end = page * itemsPerPage;

    console.log(start, end, page);

    onPageChange({
      page,
      start,
      end,
    });
  };

  return (
    <BootstrapPagination>
      <BootstrapPagination.Prev
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      />
      {pages.map((page) => (
        <BootstrapPagination.Item
          key={page}
          onClick={() => handlePageChange(page)}
          active={page === currentPage}
        >
          {page}
        </BootstrapPagination.Item>
      ))}
      <BootstrapPagination.Next
        disabled={currentPage === pagesCount}
        onClick={() => handlePageChange(currentPage + 1)}
      />
    </BootstrapPagination>
  );
};

export default Pagination;
