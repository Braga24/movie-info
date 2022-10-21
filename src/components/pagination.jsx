import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageChange }) => {
  const handleChange = (e) => {
    pageChange(e.event.target.innerText);
  }
  return (
    <div className="ml-6 mb-7 md:ml-8">

      <ReactPaginate
        breakLabel=".."
        nextLabel=">>"
        className="text-sky-600 px-1 rounded w-72 bg-white text-xl flex gap-2"
        pageRangeDisplayed={0}
        pageClassName="mx-auto hover:bg-sky-600 hover:text-white"
        pageCount={20}
        previousLabel="<<"
        onClick={handleChange}
      />

    </div>

  );
}

export default Pagination;