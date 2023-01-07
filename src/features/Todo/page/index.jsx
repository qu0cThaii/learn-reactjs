import PropTypes from "prop-types";
import React from "react";

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
};

//

function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit);

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
  // function Items({currentPage}){
  //   return {currentPage.map((item))}
  // }
  return (
    <>
      <button disabled={_page <= 1} onClick={() => handlePageChange(_page - 1)}>
        Trang truoc
      </button>

      <button
        disabled={_page >= totalPages}
        onClick={() => handlePageChange(_page + 1)}
      >
        Trang sau
      </button>
    </>
  );
}

export default Pagination;
