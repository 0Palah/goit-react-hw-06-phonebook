import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFilterAction } from 'redux/filter/slice.filter';
import css from './Filter.module.css';

const Filter = () => {
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  // // Записуємо пошуковий рядок у Стейт
  const handleChangeSearch = evt => {
    dispatch(addFilterAction(evt.target.value));
  };

  return (
    <div className={css.filterWrapper}>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        value={filter}
        id="filter"
        onChange={handleChangeSearch}
      />
    </div>
  );
};

export default Filter;
