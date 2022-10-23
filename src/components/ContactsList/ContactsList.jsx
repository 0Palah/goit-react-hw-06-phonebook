import React from 'react';
import css from './ContactsList.module.css';
import { deleteContactAction } from 'redux/constants/slice.contacts';
import { useDispatch, useSelector } from 'react-redux';

// Видаляємо зі Стейту по ID

const ContactsList = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleDeleteUser = userId => dispatch(deleteContactAction(userId));

  // Фільтруємо за наявністю підрядка з Фільтру в іменах Контактів
  const applyFilters = () => {
    return contacts.filter(({ name }) => {
      if (filter && !name.toLowerCase().includes(filter.toLowerCase()))
        return false;
      return true;
    });
  };

  return (
    <ul className={css.contListWrapper}>
      {applyFilters().map(el => (
        <li key={el.id}>
          {el.name}: {el.number}
          <button
            type="button"
            className={css.button}
            onClick={() => handleDeleteUser(el.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
