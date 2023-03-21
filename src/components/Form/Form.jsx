import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import userEvent from '@testing-library/user-event';

export class Form extends Component {
  state = {
    name: '',
    // number: '',
  };

  // Function to catch every change
  handleChange = event => {
    // console.log(event.target.value);
    const { name, value } = event.target;
    // console.log(event.target.value);
    // console.log(event.target.name);

    this.setState({
      [name]: value,
    });
  };

  // Function to submit change to storage
  onSubmit = event => {
    event.preventDefault();
    // console.log(event);

    const { handleSubmit } = this.props;

    // console.log(this.state);

    const contact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    handleSubmit(contact);
  };

  render() {
    const { name, contacts } = this.props;
    // console.log(contacts);
    contacts.map(contact => {
      // console.log(contact.name);
      // console.log(this.state.name);
      if (this.state.name) {
        contact.name.toLowerCase() === this.state.name.toLowerCase()
          ? console.log('Found', contact.name)
          : console.log('Can not found this name');
      } else {
        console.log('Please enter name');
      }
    });
    return (
      <>
        <form>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChange}
            value={name}
            required
          />
          <button type="submit" onClick={this.onSubmit}>
            Add contact
          </button>
        </form>
      </>
    );
  }
}
