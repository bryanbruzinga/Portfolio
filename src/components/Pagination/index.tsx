import React from "react";
import { GrNext, GrFormPrevious } from "react-icons/gr";
import styles from "./styles.module.scss";

const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

export default function Pagination({
  amountProjectsPerPage,
  total,
  currentPage,
  setCurrentPage,
}) {
  const current = currentPage
    ? Math.ceil(currentPage / amountProjectsPerPage)
    : 1;
  const pages = Math.ceil(total / amountProjectsPerPage);
  const first = Math.max(current - MAX_LEFT, 1);

  function previousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage < total) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className={styles.paginationContainer}>
      <button disabled={currentPage === 1} onClick={previousPage}>
        <GrFormPrevious />
      </button>

      <ul>
        {Array.from({ length: pages })
          .map((i, index) => index + first)
          .map((page) => (
            <li key={page}>
              <button
                type="button"
                onClick={() => setCurrentPage(page)}
                className={page === currentPage ? styles.active : ""}
              >
                {page}
              </button>
            </li>
          ))}
      </ul>

      <button disabled={currentPage >= pages} onClick={nextPage}>
        <GrNext />
      </button>
    </div>
  );
}
