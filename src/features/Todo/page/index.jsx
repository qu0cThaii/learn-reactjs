import PropTypes from "prop-types";
import React from "react";

Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
};

//

function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { _page, totalCount } = pagination;
  const totalPage = Math.ceil(totalCount / 10);

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
      {/* <div>
        {curentPage}
      </div> */}

      <button
        disabled={_page >= totalPage}
        onClick={() => handlePageChange(_page + 1)}
      >
        Trang sau
      </button>
    </>
  );
}

export default Pagination;
