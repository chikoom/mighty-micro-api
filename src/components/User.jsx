import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const User = (props) => {
  const { userData } = props;
  const classes = useStyles();

  return (
    <Card style={{ margin: '12px' }} className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {`Name:`}
        </Typography>
        <Typography variant="h5" component="h2">
          {` ${userData.firstName} ${userData.lastName}`}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {`${userData.email}`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Update</Button>
        <Button size="small">Remove</Button>
      </CardActions>
    </Card>
  );
};

export default User;
