import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import { addTodo } from '../../actions/TodoActions';
import Header from '../../components/Header/Header';

const styles = ({ palette }) => ({
  button: {
    background: palette.primary[50],
  },
  label: {
    fontWeight: 'bold',
  },
});

class Create extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    event.preventDefault();

    this.setState({
      input: event.target.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.addTodo(this.state.input);
    this.setState({
      input: '',
    });
  }

  render() {
    const {
      classes: {
        button,
      },
    } = this.props;

    return (
      <div>
        <Header />
        <h1> Create Todo </h1>
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.input}
            onChange={this.onChange}
          />
          <button type="submit" className={button}> Add Todo </button>
        </form>
      </div>
    );
  }
}

Create.propTypes = {
  addTodo: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    button: PropTypes.string,
  }).isRequired,
};

const mapDispatchToProps = dispatch => ({
  addTodo: (text) => {
    dispatch(addTodo(text));
  },
});

const StyledCreate = injectSheet(styles)(Create);

export default connect(undefined, mapDispatchToProps)(StyledCreate);
