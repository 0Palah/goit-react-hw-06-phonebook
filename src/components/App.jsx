// import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import css from './App.module.css';
import {
  addContactAction,
  deleteContactAction,
} from 'redux/constants/slice.contacts';
import { addFilterAction } from 'redux/filter/slice.filter';

const App = () => {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);

  const dispatch = useDispatch();

  // // записуємо з ЛокалСтореджа в Стейт
  // useEffect(() => {
  //   const contacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts && parsedContacts.length) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  // // записуємо в ЛокалСторедж зі Стейт, при зміні Стейту
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // Перевіряємо на унікальність, якщо true додаємо ID і записуємо в Стейт
  const handleAddContact = ({ name, number }) => {
    const namesArr = contacts.map(el => el.name.toLocaleLowerCase());

    if (!namesArr.includes(name.toLocaleLowerCase())) {
      dispatch(addContactAction())(prev => [
        ...prev,
        { id: nanoid(10), name: name, number: number },
      ]);
    } else {
      alert(`${name} is already in contact.`);
    }
  };

  // Видаляємо зі Стейту по ID
  const handleDeleteUser = userId => dispatch(deleteContactAction(userId));

  // // Записуємо пошуковий рядок у Стейт
  const handleChangeSearch = evt => {
    dispatch(addFilterAction(evt.target.value));
  };

  // Фільтруємо за наявністю підрядка з Фільтру в іменах Контактів
  const applyFilters = () => {
    console.log(contacts);
    return contacts.filter(({ name }) => {
      if (filter && !name.toLowerCase().includes(filter.toLowerCase()))
        return false;
      return true;
    });
  };

  return (
    <div className={css.appWrapper}>
      <Section title="Phonebook">
        <ContactForm onAddContact={handleAddContact} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onChangeSearch={handleChangeSearch} />
        <ContactsList
          contacts={applyFilters()}
          onDeleteUser={handleDeleteUser}
        />
      </Section>
    </div>
  );
};

export default App;
