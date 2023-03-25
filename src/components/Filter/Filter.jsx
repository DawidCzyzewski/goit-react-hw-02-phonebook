import { Component } from 'react';
import { DebounceInput } from 'react-debounce-input';
import PropTypes from 'prop-types';

export class Filter extends Component {
  static propTypes = {
    onChange: PropTypes.func,
  };
  searchContact = e => {
    // console.log(e.target.value);
    this.props.onChange(e.target.value);
  };
  render() {
    return (
      <>
        <h3>Search in your contacts</h3>
        <DebounceInput
          debounceTimeout={300}
          type="text"
          name="filter"
          title="filter"
          onChange={this.searchContact}
        />
      </>
    );
  }
}

// --------------------------------------Clear code up------------------------------
// --------------------------------------Uncomment one side-------------------------
// --------------------------------------Code with coments under and tests----------

// import { Component } from 'react';
// import { DebounceInput } from 'react-debounce-input';

// export class Filter extends Component {
//   searchContact = e => {
//     // console.log(e.target.value);
//     this.props.onChange(e.target.value);
//   };
//   render() {
//     return (
//       <>
//         <h3>Search in your contacts</h3>
//         <DebounceInput
//           debounceTimeout={300}
//           type="text"
//           name="filter"
//           title="filter"
//           onChange={this.searchContact}
//         />
//       </>
//     );
//   }
// }
