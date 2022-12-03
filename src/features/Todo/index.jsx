import React from "react";
import TodoList from "./components/TodoList/index";

TodoFeature.propTypes = {};

function TodoFeature(props) {
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

  return (
    <div>
      <h3>TodoList</h3>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default TodoFeature;
