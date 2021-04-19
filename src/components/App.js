import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
  // componentDidMount() {
  //   const localHistiry = localStorage.getItem('contacts');
  //   if (localHistiry !== null) {
  //     this.setState({ contacts: JSON.parse(localHistiry) });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }
  // addContact = newContact => {
  //   const { contacts } = this.state;
  //   const contactItem = {
  //     id: uuidv4(),
  //     name: newContact.name,
  //     number: newContact.number,
  //   };
  //   if (
  //     contacts
  //       .map(contact => contact.name.toLowerCase())
  //       .includes(newContact.name.toLowerCase())
  //   ) {
  //     alert(`${newContact.name} is already in contacts`);
  //   } else {
  //     this.setState(prevState => ({
  //       contacts: [contactItem, ...prevState.contacts],
  //     }));
  //   }
  // };
  // deleteContact = contactId => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== contactId),
  //   }));
  // };

  // filtercontact = () => {
  //   const { filter, contacts } = this.state;
  //   const filterLowerCase = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filterLowerCase),
  //   );
  // };
  // changeFilter = e => {
  //   this.setState({ filter: e.currentTarget.value });
  // };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    );
  }
}

export default App;
