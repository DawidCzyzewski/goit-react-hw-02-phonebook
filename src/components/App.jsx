import { Component } from 'react';
import { Section } from './Section/Section';
import { Form } from './Form/Form';

export class App extends Component {
  state = {
    contacts: [],
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

  render() {
    const { contacts } = this.state;

    return (
      <>
        <Section title="Add contact">
          <Form
            contacts={this.state.contacts}
            handleSubmit={this.handleSubmit}
          ></Form>
        </Section>
        <Section title="Address book"></Section>
      </>
    );
  }
}
