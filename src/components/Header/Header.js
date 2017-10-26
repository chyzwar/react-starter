import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';

const styles = ({ palette }) => ({
  nav: {
    background: palette.primary[500],
    display: 'flex',
    height: '30px',
  },
  link: {
    margin: '5px',
  },
});

const Header = ({ classes }) =>
  (
    <nav className={classes.nav}>
      <Link className={classes.link} to="/">Home</Link>
      <Link className={classes.link} to="/create">Create</Link>
      <Link className={classes.link} to="/topics">Topics</Link>
      <ThemeSwitch />
    </nav>
  );

Header.propTypes = {
  classes: PropTypes.shape({
    nav: PropTypes.string,
  }).isRequired,
};

export default injectSheet(styles)(Header);
