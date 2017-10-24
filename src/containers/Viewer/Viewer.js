import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Header from 'components/Header/Header';

class Viewer extends React.Component {
  render() {
    const todoList = this.props.todos
      .map(({ id, text }) => <li key={id}> {text} </li>);

    return (
      [
        <Header />,
        <ul>
          {todoList}
        </ul>,
      ]
    );
  }
}

Viewer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Viewer);
