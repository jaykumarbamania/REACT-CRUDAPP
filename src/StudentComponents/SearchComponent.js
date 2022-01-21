import { Button, TableBody, TableCell, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { showStudents } from '../actions';
import { useNavigate } from 'react-router-dom';

export default function SearchComponent({searchText}) {
    let dispatch = useDispatch();
    let navigate = useNavigate();

    let [stuArr,setStudentArr] = useState([])
    let studentArr = useSelector((reducer) => reducer.StudReducer)
    searchText = searchText.toLowerCase();
    console.log(searchText)
    useEffect(() => {
        dispatch(showStudents());
        setStudentArr(studentArr)
    },[])
  return (
    <TableBody>
        {
            stuArr.map((stu,index) => ( stu.name.toLowerCase().includes(searchText) || stu.id.toString().includes(searchText) || stu.department.toLowerCase().includes(searchText) || stu.standard.toLowerCase().includes(searchText)) 
            && 
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
                <Button variant="outlined" color="secondary" onClick={() => navigate(`/delete/${stu.id}`) }  startIcon={<DeleteIcon />} >
                    Delete
                </Button>
            </TableCell>   
            </TableRow>
            )
        }
</TableBody>
  );
}
