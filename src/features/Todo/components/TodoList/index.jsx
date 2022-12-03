import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./style.scss";

TodoList.propTypes = {
  todoList: PropTypes.array,
};
TodoList.defaultProps = {
  todoList: [],
};
//tao 1 state gom todolist da completed va the hien ra .

function TodoList(props) {
  const { todoList } = props;
  // const todoList = props.todoList;
  const [completedTodo, setCompletedTodo] = useState(
    todoList.filter((todo) => todo.status === "completed")
  );

  function handleClick(id) {
    const newtodo = completedTodo.filter((todo) => todo.id !== id);
    setCompletedTodo(newtodo);
  }

  function changeTodo(todo) {
    //kiểm tra điều kiện todo: todo đã có trong state completed? && todo.status === new

    if (
      todo.status === "new" &&
      !completedTodo.find((thisTodo) => {
        return thisTodo.id === todo.id;
      })
    ) {
      const newTodo = { ...todo };
      newTodo.status = "completed";

      const newTodoList = [...completedTodo, newTodo];
      setCompletedTodo(newTodoList);
    }

    //push 1 item vo mang todoList thoa dieu kien
  }

  return (
    <>
      <ul className="todo__list">
        {todoList.map((todo) => (
          <li
            key={todo.id}
            className={classNames({ completed: todo.status === "completed" })}
            onClick={() => changeTodo(todo)}
          >
            {todo.title}
          </li>
        ))}
      </ul>
      <br></br>
      <br></br>

      <ul className="todo__list">
        {completedTodo.map((todo) => (
          <li
            key={todo.id}
            className={classNames({ completed: todo.status === "completed" })}
            onClick={() => handleClick(todo.id)} //khi dùng hàm onclick nếu muốn truyền vào param thì phải gọi hàm
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
