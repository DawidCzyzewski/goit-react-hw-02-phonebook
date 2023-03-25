import { Component } from 'react';

export class DeleteContact extends Component {
  static propTypes = {
    key: PropTypes.number.isRequired,
    removeItem: PropTypes.func.isRequired,
  };
  render() {
    const { key, removeItem } = this.props;
    return (
      <>
        <button
          key={key}
          type="button"
          onClick={() => {
            removeItem(key);
          }}
        >
          Delete contact
        </button>
      </>
    );
  }
}

// --------------------------------------Clear code up------------------------------
// --------------------------------------Uncomment one side-------------------------
// --------------------------------------Code with coments under and tests----------

// import { Component } from 'react';

// export class DeleteContact extends Component {
//   render() {
//     const { key, removeItem } = this.props;
//     console.log(key);
//     return (
//       <>
//         <button
//           key={key}
//           type="button"
//           onClick={() => {
//             // console.log(key);
//             removeItem(key);
//           }}
//         >
//           Delete contact
//         </button>
//       </>
//     );
//   }
// }
