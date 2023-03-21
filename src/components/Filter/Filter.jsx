import { Component } from 'react';
import { DebounceInput } from 'react-debounce-input';

export class Filter extends Component {
  searchContact = e => {
    // console.log(e.target.value);
    this.props.onChange(e.target.value);
  };
  render() {
    return (
      <>
        <h3>Search in your contacts</h3>
        <DebounceInput
          debounceTimeout={1000}
          type="text"
          name="filter"
          title="filter"
          onChange={this.searchContact}
        />
      </>
    );
  }
}
