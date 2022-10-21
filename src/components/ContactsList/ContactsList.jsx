import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

const ContactsList = ({ contacts, onDeleteUser }) => {
  return (
    <ul className={css.contListWrapper}>
      {contacts.map(el => (
        <li key={el.id}>
          {el.name}: {el.number}
          <button
            type="button"
            className={css.button}
            onClick={() => onDeleteUser(el.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ),
  onDeleteUser: PropTypes.func.isRequired,
};

export default ContactsList;
