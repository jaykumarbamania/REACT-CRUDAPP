import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { getStudent, showStudents, updateStudent } from '../actions';

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { InputAdornment, Typography } from '@material-ui/core';
import { Book, LocalLibrary, PermIdentity, Person, Update } from '@material-ui/icons';

// import AttributionIcon from '@mui/icons-material/Attribution';


export default function EditStudent() {
    let mystyles = {
        inputStyle:{
            marginBottom:"10px",
            minWidth:"300px"
        },
        editstudent:{
            marginTop:"20px",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-around"
        },
        icons:{
            color:"#3f51b5"
        }
    }
    let {id} = useParams();
    let studentArr = useSelector((reducer) => reducer.StudReducer)
    let [flag,setFlag] = useState(false)
    let student = studentArr.find((element) => {
        return element.id === parseInt(id);
      })
    let [editStudent,setEditStudent] = useState(student);
    console.log(editStudent);

    function handleChange(e){
        const{name,value} = e.target;
        console.log(name+" = "+value)
        setEditStudent({...editStudent,[name]:value})
    }

    let dispatch = useDispatch();

    function onSubmit(e){
        e.preventDefault();
        console.log(editStudent)
        dispatch(updateStudent(editStudent));
        setFlag(true);
        // setUserArr([...userDataArr, userRegister])
        // setUserArr({...userRegister,[e.target.name]:e.target.value})
        // setFinal(userRegister)
    }
    
    useEffect(() => {
        
        dispatch(showStudents())
    },[dispatch]);
    // useEffect(() => {
    //     setEditStudent(new Student(student.id,student.name,student.department,student.standard))
    // },[student])
  return (
    <>
    {!flag ? 
        <div style={mystyles.editstudent}>
        <Typography variant='h4' color="primary" >
            Edit Student 
        </Typography>
         <form onSubmit={onSubmit} method="post">
         <Grid container alignItems="center" style={{marginBottom:"10px"}} justify="center" direction="column">
                    <Grid item>
                        <TextField
                            id="id-input"
                            name="id"
                            label="Student ID"
                            type="text"
                            value={editStudent.id}
                            onChange={handleChange}
                            style={mystyles.inputStyle}
                            focused
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <PermIdentity style={mystyles.icons} />
                                  </InputAdornment>
                                ),
                              }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="name-input"
                            name="name"
                            label="Student Name"
                            type="text"
                            value={editStudent.name}
                            onChange={handleChange}
                            style={mystyles.inputStyle}
                            focused
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <Person style={mystyles.icons} />
                                  </InputAdornment>
                                ),
                              }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="department-input"
                            name="department"
                            label="Student Department"
                            type="text"
                            value={editStudent.department}
                            onChange={handleChange}
                            style={mystyles.inputStyle}
                            focused
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <LocalLibrary style={mystyles.icons} />
                                  </InputAdornment>
                                ),
                              }}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="standard-input"
                            name="standard"
                            label="Student Standard"
                            type="text"
                            value={editStudent.standard}
                            onChange={handleChange}
                            style={mystyles.inputStyle}
                            focused
                            InputProps={{
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <Book style={mystyles.icons} />
                                  </InputAdornment>
                                ),
                              }}
                        />
                    </Grid>
                    <Button variant="outlined" color="primary" type="submit" startIcon={<Update />}>
                        Update
                    </Button>
                </Grid>
     </form> <div /> </div>:
     <Navigate to={"/students"} />    
}
  </>
  );
}
