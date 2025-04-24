/* eslint-disable react/prop-types */


const Pagination = ({ productsForPage, totalProducts, currentPage, setCurrentPage, }) => {
  
  const totalPages = Math.max(1, Math.ceil(totalProducts / productsForPage));

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    const sidePages = 2;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);

      const start = Math.max(2, currentPage - sidePages);
      const end = Math.min(totalPages - 1, currentPage + sidePages);

      if (start > 2) {
        pageNumbers.push("...");
      }

      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }

      if (end < totalPages - 1) {
        pageNumbers.push("...");
      }
      pageNumbers.push(totalPages);
    }
    return pageNumbers;
  };

  const pageNumbers = generatePageNumbers();

  const onPreviusPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const onNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePageChange = (n) => {
    if (n !== "...") setCurrentPage(n);
  };


   
  return (
    <div className="pagination-content">
      <nav className="pagination is-centered" role="navigation" aria-label="pagination">
        <a
          className={`pagination-previous ${currentPage === 1 ? "is-disabled" : ""}`}
          onClick={onPreviusPage}
        >
          Anterior
        </a>
        <a
          className={`pagination-next ${currentPage === totalPages ? "is-disabled" : ""}`}
          onClick={onNextPage}
        >
          Siguiente
        </a>
        <ul className="pagination-list">
          {pageNumbers.map((page, index) =>
            page === "..." ? (
              <li key={index}>
                <span className="pagination-ellipsis">…</span>
              </li>
            ) : (
              <li key={page}>
                <a
                  className={`pagination-link ${page === currentPage ? "is-current" : ""}`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
