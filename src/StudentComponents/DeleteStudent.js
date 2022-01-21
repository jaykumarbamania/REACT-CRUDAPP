import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useParams } from 'react-router-dom';
import { delStudent } from '../actions';

export default function DeleteStudent() {
    let {id} = useParams();

    let dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(delStudent(parseInt(id)))
    },[]);
  return ( 
      <>
        <h1>MessaStudent Deleted Successfullyge</h1>

        <Navigate to="/students"></Navigate>
      </>
  );
}
