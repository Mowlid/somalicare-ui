import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    backgroundColor:'#f2f2f2',
    color:'#fff',
    borderRadius:0,
    boxShadow:'none',
  },

  typography:{
      color:'#666363',
      //margin:20,
      marginBottom:0,
  }
});

function Banner(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h4" component="h3" className={classes.typography} >
          Welcome to Somali Blood Donor
        </Typography>
        <Typography component="p" className={classes.typography}>
          we are looking forward to see you
        </Typography>
      </Paper>
    </div>
  );
}

Banner.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Banner);