import React, { useState } from 'react'
import SwipeableViews from 'react-swipeable-views'

import {
  AppBar,
  Box,
  Button,
  FormControl,
  Grid,
  makeStyles,
  Paper,
  Tab,
  Tabs,
  TextField,
  Typography,
  useTheme,
} from '@material-ui/core'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  )
}

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({}))

const Login = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = useState(0)
  const [loginValues, setLoginValues] = useState({
    email: '',
    password: '',
  })
  const [signupValues, setSignupValues] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phone: '',
  })

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  const handleChangeIndex = index => {
    setValue(index)
  }

  const handleLoginInput = e => {
    console.log(e.target.name)
    setLoginValues({
      ...loginValues,
      [e.target.name]: e.target.value,
    })
  }
  const handleSignupInput = e => {
    console.log(e.target.name)
    setSignupValues({
      ...signupValues,
      [e.target.name]: e.target.value,
    })
  }
  return (
    <Paper elevation={2}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor='primary'
        textColor='primary'
        variant='fullWidth'
        aria-label='full width tabs example'
      >
        <Tab label='Login' {...a11yProps(0)} />
        <Tab label='Signup' {...a11yProps(1)} />
      </Tabs>

      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <form className={classes.root} noValidate autoComplete='off'>
            <FormControl fullWidth className={classes.margin}>
              <TextField
                name='email'
                label='email'
                value={loginValues.email}
                onChange={handleLoginInput}
              />
              <TextField
                name='password'
                label='password'
                type='password'
                value={loginValues.password}
                onChange={handleLoginInput}
              />
            </FormControl>
          </form>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <form className={classes.root} noValidate autoComplete='off'>
            <FormControl fullWidth className={classes.margin}>
              <TextField
                name='firstName'
                label='firstName'
                value={signupValues.email}
                onChange={handleSignupInput}
              />
              <TextField
                name='lastName'
                label='lastName'
                value={signupValues.email}
                onChange={handleSignupInput}
              />
              <TextField
                name='email'
                label='email'
                value={signupValues.email}
                onChange={handleSignupInput}
              />
              <TextField
                name='phone'
                label='phone'
                value={signupValues.email}
                onChange={handleSignupInput}
              />
              <TextField
                name='password'
                label='password'
                type='password'
                value={signupValues.password}
                onChange={handleSignupInput}
              />
            </FormControl>
          </form>
        </TabPanel>
      </SwipeableViews>
    </Paper>
  )
}

export default Login
