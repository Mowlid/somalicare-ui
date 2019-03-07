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
    backgroundColor:'#ddd',
    color:'#fff',
    borderRadius:0,
    borderTop: '1px solid #bcbcbc',
    boxShadow:'none',
  },

  typography:{
      color:'#666363',
  }
});

function Footer(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3" className={classes.typography} >
          Blood Donation
        </Typography>
        <Typography component="p" className={classes.typography}>
          Save life today
        </Typography>
      </Paper>
    </div>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);