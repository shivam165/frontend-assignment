import React from "react";

const Pagination = ({ totalRecords, rowsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalRecords / rowsPerPage);
  
    return (
      <div className="pagination">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
  };
export default Pagination;
