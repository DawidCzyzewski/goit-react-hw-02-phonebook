import { Component } from 'react';
import PropTypes from 'prop-types';

export class Section extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  render() {
    const { title, children } = this.props;
    return (
      <>
        <h3>{title}</h3>
        <div>{children}</div>
      </>
    );
  }
}
