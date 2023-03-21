import { Component } from 'react';

export class Contacts extends Component {
  render() {
    // console.log(this.props);
    const { contacts, remove, filter } = this.props;

    return (
      <>
        <ul>
          {contacts.map(contact => {
            if (contact.name.toLowerCase().includes(filter.toLowerCase())) {
              return (
                <>
                  <li key={contact.id}>
                    {contact.name}: {contact.number}
                  </li>
                  <button
                    key={contact.id}
                    type="button"
                    onClick={() => {
                      console.log(contact.id);
                      remove(contact.id);
                    }}
                  >
                    Delete contact
                  </button>
                </>
              );
            }
          })}
        </ul>
      </>
    );
  }
}
