export const delStudent=(id)=>{
    return{
        type:'DELETESTUDENTS',
        payload:id
    }
}

export const showStudents=()=>{
    return{
        type:'SHOWSTUDENTS'
    }
}

export const addStudent=(student)=>{
    return{
        type:'ADDSTUDENT',
        payload:student
    }
}

export const updateStudent=(student)=>{
    return{
        type:'UPDATESTUDENT',
        payload:student
    }
}