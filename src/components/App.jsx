// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import css from './App.module.css';
// import { addContactAction } from 'redux/constants/slice.contacts';
// import { addFilterAction } from 'redux/filter/slice.filter';

const App = () => {
  // const [contacts, setContacts] = useState([]);
  // const [filter, setFilter] = useState('');
  // const { contacts } = useSelector(state => state.contacts);
  // const { filter } = useSelector(state => state.filter);
  // const dispatch = useDispatch();

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

  return (
    <div className={css.appWrapper}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactsList />
      </Section>
    </div>
  );
};

export default App;
