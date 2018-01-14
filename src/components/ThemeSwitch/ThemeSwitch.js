import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { changeTheme } from 'actions/ThemeActions';


const ThemeSwitch = props => (
  <div>
    <button onClick={props.changeTheme('blue')}> Blue </button>
    <button onClick={props.changeTheme('teal')}> Teal </button>
  </div>
);

ThemeSwitch.propTypes = {
  changeTheme: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeTheme: themeName => () => {
    dispatch(changeTheme(themeName));
  },
});

export default connect(null, mapDispatchToProps)(ThemeSwitch);
