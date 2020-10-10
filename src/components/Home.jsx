import React from 'react';
import { Grid, makeStyles, Typography, useTheme } from '@material-ui/core';
import Login from './Login';

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    minHeight: '100vh',
  },
}));

const Home = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid
      container
      justify="center"
      alignContent="center"
      alignItems="center"
      className={classes.mainContainer}
    >
      <Grid item>
        <Grid item container direction="column">
          <Grid item>
            <Typography variant="h1">Welcome To Mighty-Micro API</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              This is a simple demonstration of a serverless app, using Lambda
              functions
            </Typography>
          </Grid>
          <div style={{ margin: theme.spacing(5) }}></div>
          <Grid item>
            <Login />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
