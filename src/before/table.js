import React from 'react';

import Button from './button';

class TableRow extends React.Component {
  render() {
    return React.createElement('tr', { className: 'row' },
      React.createElement('td', { className: 'cell' }, this.props.title),
      React.createElement('td', { className: 'cell' }, React.createElement(Button)),
    );
  }
};

export default class Table extends React.Component {
  render() {
    return React.createElement(
      'table',
      { className: 'table' },
      React.createElement(
        'tbody',
        { className: 'body' },
        this.props.rows.map(({ id, title }) => React.createElement(TableRow, { key: id, title }))
      )
    );
  }
};
