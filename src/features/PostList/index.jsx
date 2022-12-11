import PropTypes from "prop-types";
import React from "react";

PostList.propTypes = {
  posts: PropTypes.array,
  //posts = mảng danh sách các post
  //PostList = props , components cha truyền dữ liệu cho components con thông qua props
};

function PostList(props) {
  const posts = props.posts;
  PostList.defaultProps = {
    posts: [],
  };
  //step1: tạo 1 useState để lưu trữ dữ liệu khi call từ api về

  //step 2: dùng useEffect call api

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default PostList;
