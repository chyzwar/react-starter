import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { addTodo } from 'actions/TodoActions';
import Header from 'components/Header/Header';

class Create extends React.Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.addTodo(this.input.value);
    this.input.value = '';
  }

  render() {
    return (
      <div>
        <Header />
        <form onSubmit={this.onSubmit}>
          <input ref={(node) => { this.input = node; }} />
          <button type="submit"> Add Todo </button>
        </form>
      </div>
    );
  }
}

Create.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addTodo: (text) => {
    dispatch(addTodo(text));
  },
});

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);
