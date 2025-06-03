// Example: NewsList.js
import React, { useState } from "react";

const NewsList = ({ news }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 12;

  // Calculate indexes for slicing
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);

  // Calculate total pages
  const totalPages = Math.ceil(news.length / newsPerPage);

  return (
    <div>
      <ul>
        {currentNews.map((item, idx) => (
          <li key={idx}>{item.title}</li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          {" "}
          Page {currentPage} of {totalPages}{" "}
        </span>
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default NewsList;
