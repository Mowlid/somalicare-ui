import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
    borderBottom: '5px solid #ff1515',
  },
  grow: {
    flexGrow: 1,
    margin:0,
  },
  link:{
    textDecorationLine:'none',
    color:'#fff'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
    backgroundColor: '#fff'
  },
  AppBar:{
    backgroundColor: '#c61010',
    color: '#fff',
    borderWidth:0,
    boxShadow:'none',
    margin:0
  },
  MenuIcon:{
    backgroundColor: '#fff'
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar>
          <IconButton className={classes.menuButton} aria-label="Menu">
            <MenuIcon className={classes.MenuIcon}/>
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            <Link to='/' className={classes.link}>
              Somali Blood Donation
            </Link>
          </Typography>
         
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);