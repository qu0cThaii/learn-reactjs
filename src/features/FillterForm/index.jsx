import { PropTypes } from "prop-types";
import React, { useRef, useState } from "react";

FillterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function FillterForm(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const searchTime = useRef(null);
  const { onSubmit } = props;
  //version 1
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   props.onSubmit(searchTerm);
  //   e.target.reset();
  // }

  // function handleChange(e) {
  //   console.log(e.target.value);
  //   setSearchTerm(e.target.value);
  // }

  // version 2
  function handleSearchTermChange(e) {
    console.log(e.target.value);
    setSearchTerm(e.target.value);

    if (!onSubmit) return;
    onSubmit(searchTerm);
  }

  ///////////////////DEBOUNCE///////////////////////////
  // DEBOUNCE VER.1 - setTimeout

  searchTime.current = setTimeout(() => {
    onSubmit(searchTerm);
  }, 500);
  if (searchTime.current) {
    clearTimeout(searchTime.current);
  }
  return (
    // version 1
    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <input type="text" value={searchTerm} onChange={handleChange} />
    //     <input type="submit" />
    //   </form>
    // </div>

    //version 2
    <div>
      <form>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </form>
    </div>
  );
}

export default FillterForm;
