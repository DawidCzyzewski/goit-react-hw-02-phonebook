import { Component } from 'react';

export class DeleteContact extends Component {
  render() {
    const { key, removeItem } = this.props;
    console.log(key);
    return (
      <>
        <button
          key={key}
          type="button"
          onClick={() => {
            // console.log(key);
            removeItem(key);
          }}
        >
          Delete contact
        </button>
      </>
    );
  }
}
