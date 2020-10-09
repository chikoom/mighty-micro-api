import React from 'react'
import { Button, Grid, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  mainContainer: {
    minHeight: '100vh',
  },
}))

const Home = () => {
  const classes = useStyles()
  return (
    <Grid
      container
      justify='center'
      alignContent='center'
      alignItems='center'
      className={classes.mainContainer}
    >
      <Grid item>
        <Grid item container direction='column'>
          <Grid item>
            <Typography variant='h1'>Welcome To Mighty-Micro API</Typography>
          </Grid>
          <Grid item>BUTTON</Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Home
