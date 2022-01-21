
import { StudentController } from '../classes/StudentController';
let studImpl=new StudentController();
export const StudReducer=(state=[...studImpl.stuSet],action)=>{
        switch(action.type){
                case 'SHOWSTUDENTS': {
                        state= studImpl.getAllStudents();
                        return state;
                }
                case 'DELETESTUDENTS': {
                        state= studImpl.deleteStudent(action.payload);                
                        return state;
                }
                case 'ADDSTUDENT': {
                        state= studImpl.addStudents(action.payload);                
                        return state;
                }
                case 'UPDATESTUDENT': {
                        state= studImpl.updateStudent(action.payload);                
                        return state;
                }
                default: return state;
        }
}