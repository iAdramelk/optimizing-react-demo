import React from 'react';

import Table from './table';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rows: [
        {
          id: 0,
          title: 'Title 0',
        },
      ]
    };

    this.handleAddRow = this.handleAddRow.bind(this);
  }

  handleAddRow() {
    const { rows } = this.state;

    this.setState({ rows: rows.concat([ { id: rows.length, title: `Title ${rows.length}` } ]) });
  }

  render() {
    return React.createElement('div', { className: 'app' },
      React.createElement('button', { onClick: this.handleAddRow, className: 'button' }, 'Add row'),
      React.createElement('br'),
      React.createElement('br'),
      React.createElement(Table, { rows: this.state.rows })
    );
  }
}
