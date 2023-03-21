import { Component } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = contact => {
    // console.log(contact);
    const { id, name, number } = contact;
    // console.log(name, id, number);

    // console.log(this.state.contacts);
    // this.state.contacts = []
    //   ? this.setState({
    //       contacts: [{ id: id, name: name, number: number }],
    //     })
    //   :
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: id, name: name, number: number }],
    }));
  };

  filterSearch = elem => this.setState({ filter: elem });

  deleteObj = obj => {
    const objectToDelete = this.state.contacts.find(
      ({ id }) => id === obj
    ).name;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== obj),
    }));
    Notify.success(`${this.objectToDelete} was deleted.`);
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <Section title="Add contact">
          <Form contacts={contacts} handleSubmit={this.handleSubmit}></Form>
        </Section>
        <Section title="Address book">
          <Filter onChange={this.filterSearch}></Filter>
          <Contacts
            contacts={contacts}
            filter={filter}
            remove={this.deleteObj}
          ></Contacts>

          {/* {console.log(contacts)} */}
          {/* {this.filter(contacts)} */}
        </Section>
      </>
    );
  }
}
