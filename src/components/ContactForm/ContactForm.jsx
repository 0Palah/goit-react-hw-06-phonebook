import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const stateMap = {
    name: setName,
    number: setNumber,
  };

  const handleChange = evt => {
    const { name, value } = evt.target;
    stateMap[name](value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    onAddContact({ name: name, number: number });

    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.wrapper}>
        <div>
          {' '}
          <label htmlFor="inputName">Name</label>
          <input
            id="inputName"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="inputTel">Number</label>
          <input
            id="inputTel"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </div>
    </form>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func,
};

export default ContactForm;
