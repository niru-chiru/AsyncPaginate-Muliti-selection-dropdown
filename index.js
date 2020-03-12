import React, { useState } from "react";

import AsyncPaginate from "react-select-async-paginate";

import loadOptions from "./selectOptions";

const MultiSelectDropdown = () => {
  const [value, onChange] = useState([]);

  return (
    <div style={{width:"20%"}}>
      <h2>Multi select dropdown</h2>
      <AsyncPaginate
        value={value}
        loadOptions={loadOptions}
        isMulti
        closeMenuOnSelect={false}
        onChange={onChange}
      />
    </div>
  );
};

export default MultiSelectDropdown;