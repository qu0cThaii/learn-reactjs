import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList/index";
import PostList from "./../PostList/index";
import Pagination from "./Pagination/index";
import Clock from "../Clock";
import queryString from "query-string";
import FillterForm from "../FillterForm/index";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const [filterStatus, setFilterStatus] = useState("all");
  const todoList = [
    {
      id: 1,
      title: "eat",
      status: "completed",
    },
    {
      id: 2,
      title: "code",
      status: "new",
    },
    {
      id: 3,
      title: "sleep",
      status: "new",
    },
  ];
  //function của button, dùng arrow funtion cập nhậ
  const handleClickAll = () => {
    setFilterStatus("all");
  };
  const handleClickCompleted = () => {
    setFilterStatus("completed");
  };
  const handleClickNew = () => {
    setFilterStatus("new");
  };
  //filter mảng ban đầu thành các todo.status
  const changeStatus = todoList.filter(
    (todo) => filterStatus === "all" || filterStatus === todo.status
  );
  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRow: 1,
  });

  const [currentPage, setCurrenPage] = useState({
    _limit: 10,
    _page: 1,
  });

  useEffect(() => {
    async function fetchPostList() {
      const paramString = queryString.stringify(currentPage);
      const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;

      const response = await fetch(requestUrl);
      const responseJSON = await response.json();
      const { data, pagination } = responseJSON;
      setPostList(data);
      setPagination(pagination);
    }
    fetchPostList();
  }, [currentPage]);

  function handlePageChange(newPage) {
    console.log("New Page:", newPage);
    setCurrenPage({
      ...currentPage,
      _page: newPage,
    });
  }
  function handleDetailPageChange(detailpage) {
    console.log(detailpage);
    setCurrenPage({
      ...currentPage,
      _page: detailpage,
    });
  }
  function handleFormSubmit(searchTerm) {
    setCurrenPage({
      ...currentPage,
      _page: 1,
      title_like: searchTerm,
    });
  }
  return (
    <>
      <div>
        <h3>TodoList</h3>
        {/* TodoList = components con có nhiệm vụ render
        todoList = props
        changeStatus = mảng dữ liệu được truyền vào, mảng này đã được lọc qua status của từng todo thông qua mảng ban đầu todoList
         */}
        <TodoList todoList={changeStatus} />
      </div>
      <div>
        <button onClick={handleClickAll}>All</button>
        <button onClick={handleClickCompleted}>Completed</button>
        <button onClick={handleClickNew}>New</button>
      </div>
      <hr />
      <div>fetch api using useEffect Hook</div>
      <PostList posts={postList} />
      <div>
        {/* {/* <button onClick={() => changePage(1)}>1</button> */}
        {/* <button onClick={() => changePage(2)}>2</button> */}
        {/* <button onClick={}></button>  */}
        {/* totalPage => render ra button */}
      </div>
      <div>
        <Pagination
          pagination={pagination}
          onPageChange={handlePageChange}
          onDetailPageChange={handleDetailPageChange}
        />
        <Clock />
        <FillterForm onSubmit={handleFormSubmit} />
      </div>
    </>
  );
}

export default TodoFeature;
