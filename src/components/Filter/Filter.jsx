import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ onChangeSearch, filter }) => {
  return (
    <div className={css.filterWrapper}>
      <label htmlFor="filter">Find contacts by name</label>
      <input type="text" value={filter} id="filter" onChange={onChangeSearch} />
    </div>
  );
};

Filter.propTypes = {
  onChangeSearch: PropTypes.func,
};

export default Filter;
