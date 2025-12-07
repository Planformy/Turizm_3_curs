"use client";

type PaginationProps = {
  totalPages: number;
  currentPage: number;
  onPageChange?: (page: number) => void;
};

export default function Pagination({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleClick = (page: number) => {
    if (onPageChange) onPageChange(page);
  };

  return (
    <div className="flex gap-2 justify-center mt-8">
      {/* Prev */}
      <button
        disabled={currentPage === 1}
        onClick={() => handleClick(currentPage - 1)}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        {"<"}
      </button>

      {/* Pages */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => handleClick(page)}
          className={`px-3 py-1 border rounded ${
            currentPage === page
              ? "bg-blue-600 text-white border-blue-600"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => handleClick(currentPage + 1)}
        className="px-3 py-1 border rounded disabled:opacity-50"
      >
        {">"}
      </button>
    </div>
  );
}
