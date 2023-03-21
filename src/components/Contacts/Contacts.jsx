import { Component } from 'react';

export class Contacts extends Component {
  render() {
    // console.log(this.props);
    const { contacts, remove, filter } = this.props;

    return (
      <>
        <ul>
          {contacts.forEach(({ number, name, id }) => {
            if (name.toLowerCase().includes(filter.toLowerCase())) {
              return (
                <li>
                  <li key={id}>
                    {name}: {number}
                  </li>
                  <button
                    key={id}
                    type="button"
                    onClick={() => {
                      //   console.log(contact.id);
                      remove(id);
                    }}
                  >
                    Delete contact
                  </button>
                </li>
              );
            }
          })}
        </ul>
      </>
    );
  }
}
