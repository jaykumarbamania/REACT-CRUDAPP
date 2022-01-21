import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import { showStudents } from '../actions';


//
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow'; 
import { Button, Icon, Paper, TextField } from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { SearchOutlined } from '@material-ui/icons';
import SearchComponent from './SearchComponent';

export default function ShowStudent() {
    // let [displayForm, setDisplayForm] = useState(false);
    // console.log(displayForm)
    let navigate = useNavigate();
    let dispatch = useDispatch();
    

    let [stuArr,setStudentArr] = useState([])
    let studentArr = useSelector((reducer) => reducer.StudReducer)
    useEffect(() => {
        dispatch(showStudents());
        setStudentArr(studentArr)
    },[])

    const [searchText, setSearchText] = useState("");
    const [searching, setSearchingState] = useState(false);
    let searchSubmit = (e) =>{
        e.preventDefault();
        
        setSearchingState(true);
    }
  return (

    <>
    <TableContainer component={Paper}>  
    <div style={{"margin":"auto"}}>
    <form onSubmit={searchSubmit} method="post" >
    <TextField
    id="id-input"
    name="search"
    label="Search"
    type="text"
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
    focused
    color='secondary'
/>
    {/* <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} /> */}

    <Button variant="outlined" color="secondary"        startIcon={<SearchOutlined />} type='submit'>
                             Search
                            </Button>
    </form>
    </div>
        <Table stickyHeader  aria-label="sticky table">  
          <TableHead>              
            <TableRow>  
              {/* <TableCell>Id</TableCell>   */}
              <TableCell align="center">Id</TableCell>  
              <TableCell align="center">Name</TableCell>  
              <TableCell align="center">Department</TableCell>  
              <TableCell align="center">Standard</TableCell>  
              <TableCell  align="center">Edit</TableCell>  
              <TableCell  align="center">Delete</TableCell>  
            </TableRow>            
            </TableHead>
            { searching ? <SearchComponent searchText={searchText} /> :
            <TableBody>  
            {  
                stuArr.map((stu, index) => {  
                return(
                <TableRow key={index}>  
                        <TableCell component="th" scope="row">  
                        {stu.id}  
                        </TableCell>  
                        <TableCell align="center">{stu.name}</TableCell>  
                        <TableCell align="center">{stu.department}</TableCell>        
                        <TableCell align="center">{stu.standard}</TableCell>  
                        <TableCell align="center">
                            <Button variant="outlined" color="secondary"  onClick={() => navigate(`/edit/${stu.id}`) } startIcon={<EditIcon />} >
                                Edit
                            </Button>
                        </TableCell>  
                        <TableCell align="center">
                            <Button variant="outlined" color="secondary" onClick={() => navigate(`/delete/${stu.id}`) }startIcon={<DeleteIcon />} >
                             Delete
                            </Button>
                        </TableCell>   
                </TableRow> 
                ) 
              })  
            }  
          </TableBody>  
            }
        </Table>        
    </TableContainer> 
    </>
  );
}
