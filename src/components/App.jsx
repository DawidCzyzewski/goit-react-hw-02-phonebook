import { Component } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';
import { Filter } from './Filter/Filter';
import { Contacts } from './Contacts/Contacts';
import { Notify } from 'notiflix';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleSubmit = contact => {
    const { id, name, number } = contact;
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      Notify.failure(`Name ${contact.name} is in book.`);
      return;
    } else {
      this.setState(prevState => ({
        contacts: [
          ...prevState.contacts,
          { id: id, name: name, number: number },
        ],
      }));
    }
  };

  filterSearch = elem => this.setState({ filter: elem });

  deleteObj = obj => {
    const objectToDelete = this.state.contacts.find(
      ({ id }) => id === obj
    ).name;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== obj),
    }));
    Notify.success(`Contact "${objectToDelete}" was deleted.`);
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
        </Section>
      </>
    );
  }
}

// --------------------------------------Clear code up------------------------------
// --------------------------------------Uncomment one side-------------------------
// --------------------------------------Code with coments under and tests----------

// import { Component } from 'react';
// import { Section } from './Section/Section';
// import { Form } from './Form/Form';
// import { Filter } from './Filter/Filter';
// import { Contacts } from './Contacts/Contacts';
// import { Notify } from 'notiflix';

// export class App extends Component {
//   state = {
//     contacts: [],
//     filter: '',
//   };

//   handleSubmit = contact => {
//     // console.log(contact);
//     const { id, name, number } = contact;
//     // console.log(name, id, number);

//     // console.log(this.state.contacts);
//     // this.state.contacts = []
//     //   ? this.setState({
//     //       contacts: [{ id: id, name: name, number: number }],
//     //     })
//     //   :

//     // if (name.toLowerCase() === this.state.contacts[name].toLowerCase()) {
//     //   Notify.failure(`Contact with number "${contact.number}" is in book.`);
//     // }

//     if (
//       this.state.contacts.find(
//         contact => contact.name.toLowerCase() === name.toLowerCase()
//       )
//     ) {
//       Notify.failure(`Name ${contact.name} is in book.`);
//       return;
//     } else {
//       this.setState(prevState => ({
//         contacts: [
//           ...prevState.contacts,
//           { id: id, name: name, number: number },
//         ],
//       }));
//     }
//   };

//   filterSearch = elem => this.setState({ filter: elem });

//   deleteObj = obj => {
//     const objectToDelete = this.state.contacts.find(
//       ({ id }) => id === obj
//     ).name;
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== obj),
//     }));
//     Notify.success(`Contact "${objectToDelete}" was deleted.`);
//   };

//   render() {
//     const { contacts, filter } = this.state;

//     return (
//       <>
//         <Section title="Add contact">
//           <Form contacts={contacts} handleSubmit={this.handleSubmit}></Form>
//         </Section>
//         <Section title="Address book">
//           <Filter onChange={this.filterSearch}></Filter>
//           <Contacts
//             contacts={contacts}
//             filter={filter}
//             remove={this.deleteObj}
//           ></Contacts>

//           {/* {console.log(contacts)} */}
//           {/* {this.filter(contacts)} */}
//         </Section>
//       </>
//     );
//   }
// }
