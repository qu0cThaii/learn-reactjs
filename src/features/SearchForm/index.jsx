import React, { useState } from "react";

import { PropTypes } from "prop-types";

FillterForm.propTypes = {
  onSubmit: PropTypes.func,
};

function FillterForm(props) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={handleChange} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default FillterForm;
