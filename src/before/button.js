import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return React.createElement(
      'button',
      {
        onClick: this.handleIncrement,
        className: 'button'
      },
      `Count: ${this.state.count}`
    );
  }
}
