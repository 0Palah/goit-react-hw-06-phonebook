import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Filter from './Filter/Filter';
import css from './App.module.css';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts && parsedContacts.length) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = ({ name, number }) => {
    const namesArr = contacts.map(el => el.name.toLocaleLowerCase());

    if (!namesArr.includes(name.toLocaleLowerCase())) {
      setContacts(prev => [
        ...prev,
        { id: nanoid(10), name: name, number: number },
      ]);
    } else {
      alert(`${name} is already in contact.`);
    }
  };

  const handleDeleteUser = userId =>
    setContacts(prev => prev.filter(user => user.id !== userId));

  const handleChangeSearch = evt => {
    setFilter(evt.target.value);
  };

  const applyFilters = () => {
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
