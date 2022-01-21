import {Student} from './Student'

export class StudentController{

    stuSet = new Set();

    constructor(){
        this.stuSet.add(new Student(101,'Jaykumar','CE','BE'))
        this.stuSet.add(new Student(102,'Devang','CE','BE'))
    }

    getAllStudents(){
        return [...this.stuSet];
    }

    addStudents(student){
        let newStu = new Student(parseInt(student.id),student.name,student.department,student.standard)
        this.stuSet.add(newStu);
        return [...this.stuSet];
    }

    getStudentById(id){
        return [...this.stuSet].find(stu => stu.id===id)
    }

    deleteStudent(id){
        let student = this.getStudentById(id)
        this.stuSet.delete(student)
        return [...this.stuSet];
    }

    updateStudent(student){
        console.log("Controller "+student)
        console.log("Controller "+this.stuSet)
        this.deleteStudent(student.id)
        let newStu = new Student(parseInt(student.id),student.name,student.department,student.standard)
        this.stuSet.add(newStu);
        return [...this.stuSet];
    }
}
