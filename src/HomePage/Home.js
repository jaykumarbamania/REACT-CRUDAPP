import { Paper, Typography } from '@material-ui/core';
import React from 'react';

export default function Home() {
  return <>
      <Paper style={{padding:'10px'}}>
      <Typography variant='h2' color="primary">
          This Application is created using React js + Material UI.
      </Typography>
      <br></br>
      <Typography variant='h4' color="primary">
          In this Application User can perform CRUD Operations like Creating the Student,Updating the Student Details, Deleting the Student, Searching the Student on the base of Every Field and user can also perform Sorting on the bases of every field in ascending as well as descending order. 
      </Typography>
      <br></br>
      <Typography variant='h3' color="primary">
        Created By @JayKumar Hitendra Bamania.....
      </Typography>
      </Paper>

  </>;
}
