import React from 'react';

const Filter = ({ handleFilter, search, showFilter }) => {
  return (
    <div>
      filter like in google
      <input type="text" placeholder=" searching..." onChange={handleFilter} />
      {search.trim() !== '' ? showFilter : null}
    </div>
  );
};

export default Filter;
