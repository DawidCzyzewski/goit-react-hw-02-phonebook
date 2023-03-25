import PropTypes from 'prop-types';
import { Component } from 'react';

export class Contacts extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    remove: PropTypes.func,
    filter: PropTypes.string,
  };
  render() {
    const { contacts, remove, filter } = this.props;

    return (
      <>
        <ul>
          {contacts.map(({ number, name, id }) =>
            name.toLowerCase().includes(filter.toLowerCase()) ? (
              <li key={id}>
                {name}: {number}
                <button
                  key={id}
                  type="button"
                  onClick={() => {
                    remove(id);
                  }}
                >
                  Delete contact
                </button>
              </li>
            ) : null
          )}
        </ul>
      </>
    );
  }
}

// --------------------------------------Clear code up------------------------------
// --------------------------------------Uncomment one side-------------------------
// --------------------------------------Code with coments under and tests----------

// import { Component } from 'react';

// export class Contacts extends Component {
//   render() {
//     // console.log(this.props);
//     const { contacts, remove, filter } = this.props;

//     // return (
//     //   <>
//     //     <ul>
//     //       {contacts.forEach(({ number, name, id }) => {
//     //         if (name.toLowerCase().includes(filter.toLowerCase())) {
//     //           return (
//     //             <li>
//     //               <li key={id}>
//     //                 {name}: {number}
//     //               </li>
//     //               <button
//     //                 key={id}
//     //                 type="button"
//     //                 onClick={() => {
//     //                   //   console.log(contact.id);
//     //                   remove(id);
//     //                 }}
//     //               >
//     //                 Delete contact
//     //               </button>
//     //             </li>
//     //           );
//     //         }
//     //       })}
//     //     </ul>
//     //   </>
//     // );

//     return (
//       <>
//         <ul>
//           {contacts.map(({ number, name, id }) =>
//             name.toLowerCase().includes(filter.toLowerCase()) ? (
//               <li key={id}>
//                 {name}: {number}
//                 <button
//                   key={id}
//                   type="button"
//                   onClick={() => {
//                     //   console.log(contact.id);
//                     remove(id);
//                   }}
//                 >
//                   Delete contact
//                 </button>
//               </li>
//             ) : null
//           )}
//         </ul>
//       </>
//     );
//   }
// }
