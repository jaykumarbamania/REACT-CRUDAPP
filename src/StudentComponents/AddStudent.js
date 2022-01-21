import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { addStudent } from '../actions';
import { Student } from '../classes/Student';

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function AddStudent() {
    let mystyles = {
        inputStyle:{
            marginBottom:"10px",
            minWidth:"300px"
        }
    }
    let [flag,setFlag] = useState(false)
    let [student, setRegisterStudent] = useState(new Student());

    function handleChange(e){
        const{name,value} = e.target;
        console.log(name+" = "+value)
        setRegisterStudent({...student,[name]:value})
    }

    let dispatch = useDispatch();
    
   
    function onSubmit(e){
        e.preventDefault();
        console.log(student)
        dispatch(addStudent(student));
        setFlag(true);
        // setUserArr([...userDataArr, userRegister])
        // setUserArr({...userRegister,[e.target.name]:e.target.value})
        // setFinal(userRegister)
    }
    
    
  return ( 
      <>
        {!flag ? 
             <form  onSubmit={onSubmit} method="post">
                <Grid container alignItems="center" style={{marginBottom:"10px"}} justify="center" direction="column">
                    <Grid item>
                        <TextField
                            id="id-input"
                            name="id"
                            label="Student ID"
                            type="text"
                            value={student.id}
                            onChange={handleChange}
                            style={mystyles.inputStyle}
                            focused
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="name-input"
                            name="name"
                            label="Student Name"
                            type="text"
                            value={student.name}
                            onChange={handleChange}
                            style={mystyles.inputStyle}
                            focused
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="department-input"
                            name="department"
                            label="Student Department"
                            type="text"
                            value={student.department}
                            onChange={handleChange}
                            style={mystyles.inputStyle}
                            focused
                              
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="standard-input"
                            name="standard"
                            label="Student Standard"
                            type="text"
                            value={student.standard}
                            onChange={handleChange}
                            style={mystyles.inputStyle}
                            focused
                        />
                    </Grid>
                    <Button variant="outlined" color="primary" type="submit">
                        Submit
                    </Button>
                </Grid>
             {/* <table border="1">
                 <tr>
                     <th>Id : </th>
                     <td><input type="number" name="id" value={student.id} onChange={handleChange} /></td>
                 </tr>
                 <tr>
                     <th>Name : </th>
                     <td><input type="text" name="name" value={student.name} onChange={handleChange} /></td>
                 </tr>
                 <tr>
                     <th>Department : </th>
                     <td><input type="text" name="department" value={student.department} onChange={handleChange} /></td>
                 </tr>
                 <tr>
                     <th>Standard : </th>
                     <td><input type="text" name="standard" value={student.standard} onChange={handleChange} /></td>
                 </tr>
                 <tr>
                     <th></th>
                     <td><input type="submit" /></td>
                 </tr>
             </table> */}
         </form>:
         <Navigate to={"/students"} />    
    }
      </>
  );
}

export default AddStudent;
