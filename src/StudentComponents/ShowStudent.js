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
import { 
    ArrowDownward, 
    ArrowUpward, 
    SearchOutlined 
  } from '@material-ui/icons';

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
    let [idSort, setIdSort] = useState(true)
    let OnIdSorting = () =>{
      setIdSort(!idSort);
      !idSort ? stuArr.sort((a, b) => a.id > b.id ? 1 : -1):
      stuArr.sort((a, b) => a.id < b.id ? 1 : -1)
    }

    let [nameSort, setNameSort] = useState(true)
    let OnNameSorting = () =>{
      setNameSort(!nameSort);
      !nameSort ? stuArr.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())):
      stuArr.sort((a, b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()))
    }

    let [departmentSort, setDepartmentSort] = useState(true)
    let OnDepartmentSorting = () =>{
      setDepartmentSort(!departmentSort);
      !departmentSort ? stuArr.sort((a, b) => a.department.toLowerCase().localeCompare(b.department.toLowerCase())):
      stuArr.sort((a, b) => b.department.toLowerCase().localeCompare(a.department.toLowerCase()))
    }

    let [standardSort, setStandardSort] = useState(true)
    let OnStandardSorting = () =>{
      setStandardSort(!standardSort);
      !standardSort ? stuArr.sort((a, b) => a.standard.toLowerCase().localeCompare(b.standard.toLowerCase())):
      stuArr.sort((a, b) => b.standard.toLowerCase().localeCompare(a.standard.toLowerCase()))
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
              <TableCell align="center">
                  <Button size='small' onClick={OnIdSorting}>
                    Id {idSort ? <ArrowUpward /> : <ArrowDownward/>}
                  </Button> 
              </TableCell>  
              <TableCell align="center">
                <Button size='small' onClick={OnNameSorting}>
                  Name {nameSort ? <ArrowUpward /> : <ArrowDownward/>}
              </Button>
              </TableCell> 
              <TableCell align="center">
                <Button size='small' onClick={OnDepartmentSorting}>
                  Department {departmentSort ? <ArrowUpward /> : <ArrowDownward/>}
              </Button>
              </TableCell>   
              <TableCell align="center">
                <Button size='small' onClick={OnStandardSorting}>
                  Standard {standardSort ? <ArrowUpward /> : <ArrowDownward/>}
              </Button>
              </TableCell>   
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
