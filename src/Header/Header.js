import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, createMuiTheme, TextField } from '@material-ui/core';

import styled from "styled-components";
import { StylesProvider, useTheme } from "@material-ui/core/styles";
import { ThemeProvider } from 'styled-components';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  customColor: {
    // or hex code, this is normal CSS background-color
    backgroundColor: "aqua"
  },
  customHeight: {
    minHeight: 200
  },
  offset: theme.mixins.toolbar
}));



export default function Header() {
  const theme = useTheme();

  const MyProfileAvatar = styled(Avatar)`
  ${({ size, theme }) => `
    width: ${theme.spacing(size)}px; 
    height: ${theme.spacing(size)}px; 
  `};
`;
  // return (
  //   <div className="header">
  //       <div className='leftSide'>
  //       <NavLink to="/">Home</NavLink>
  //       <NavLink to="/students">Students</NavLink>
  //       <NavLink to="/add/student">Add</NavLink>
  //       </div>
  //       <div className='rightSide'>
  //       <NavLink to="/">Login</NavLink>
  //       <NavLink to="/">Register</NavLink>
  //       </div>
  //   </div>
  // );
  const navigate = useNavigate()
  const classes = useStyles();
  const [example, setExample] = useState("primary");
  console.log(example)
  // const colorTheme = createMuiTheme({
  //   palette: {
  //      primary: {
  //         main: example// This is an orange looking color
  //                },
  //      secondary: {
  //         main: "#ffcc80" //Another orange-ish color
  //                 }
  //            } // as an aside, highly recommend importing roboto font for Material UI projects! Looks really nice
  // });

  return (
    <React.Fragment>
      {/* <ThemeProvider theme={colorTheme}> */}
      <AppBar
        color={example=="primary" ? "primary" : `${example}`}
       
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <TextField
              id="id-input"
              name="id"
              label="Choose Color"
              type="color"
              value={example}
              onChange={(e) => setExample(e.target.value) }
              // style={mystyles.inputStyle}
              focused
          />
          <Typography variant="h5" className={classes.title}>
            CRUDAPP
          </Typography>
 
          <IconButton color="inherit" onClick={() => navigate(`/`)}>
            Home
          </IconButton>
          <IconButton color="inherit" onClick={() => navigate(`/students`)}>
            Students
          </IconButton>
          <IconButton color="inherit" onClick={() => navigate(`/add/student`)}>
            Add
          </IconButton>
          {/* <IconButton color="inherit" onClick={() => navigate(``)}>
            4
          </IconButton>
          <IconButton color="inherit" >
            5
          </IconButton> */}
          <ThemeProvider theme={theme}>
            <MyProfileAvatar
              size={7}
              alt="Jaykumar Bamania"
              src="/assets/jaykumarhb.jpg"
            >
            </MyProfileAvatar>
            </ThemeProvider>
        </Toolbar>
      </AppBar>
      {/* </ThemeProvider> */}
      <Toolbar />
  
    </React.Fragment>
  );
}
