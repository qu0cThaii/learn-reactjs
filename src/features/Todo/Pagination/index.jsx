import PropTypes from "prop-types";
import React from "react";
import "./style.css";

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
};

//

function Pagination(props) {
  const { pagination, onPageChange, onDetailPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit);
  const pageNumber = [];
  //totalCount =tổng số data trong source,
  //totalPage = tổng số data/data mỗi trang

  //currentPage
  //pageSize
  //onPageChange

  function handlePageChange(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }
  function handleDetailPageChange(detailPage) {
    onDetailPageChange(detailPage);
  }
  // function Items({currentPage}){
  //   return {currentPage.map((item))}
  // }

  //viet 1 function khac cho viec hien thi so page o giua

  for (let i = 1; i <= totalPages; i++) {
    pageNumber.push(i);
  }

  return (
    <div className="page">
      <button
        className="previous_page"
        disabled={_page <= 1}
        onClick={() => handlePageChange(_page - 1)}
      >
        Trang truoc
      </button>

      <div>
        <ul className="showPageNumber">
          {pageNumber.map((detailPage) => (
            <li
              className="detailpage"
              key={detailPage}
              onClick={() => handleDetailPageChange(detailPage)}
            >
              {detailPage}
            </li>
          ))}
        </ul>
      </div>

      <button
        className="next_page"
        disabled={_page >= totalPages}
        onClick={() => handlePageChange(_page + 1)}
      >
        Trang sau
      </button>
    </div>
  );
}

export default Pagination;
