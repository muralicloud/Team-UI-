import { Component, OnInit } from '@angular/core';
import { StudentsService } from './students.service';
import { Students } from './students';
import { clone } from 'lodash';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Students[];
  studentForm: boolean = false;
  editStudentForm: boolean = false;
  isNewForm: boolean;
  newStudent: any = {};
  editedStudent: any = {};

  constructor(private _studentsService: StudentsService) { }

  ngOnInit() {
    this.getStudents();
  }

  getStudents() {
    this.students = this._studentsService.getStudentsFromData();
  }

  showEditStudentForm(students: Students) {
    if(!students) {
      this.studentForm = false;
      return;
    }
    this.editStudentForm = true;
    this.editedStudent = clone(students);
  }

  showAddStudentForm() {
    // resets form if edited product
    if(this.students.length) {
      this.newStudent = {};
    }
    this.studentForm = true;
    this.isNewForm = true;
  }

  saveStudent(students: Students) {
    if(this.isNewForm) {
      // add a new product
      this._studentsService.addStudent(students);
    }
    this.studentForm = false;
  }

  removeStudent(students: Students) {
    var answer = confirm('Deleting student from the table');
    if(answer){
    this._studentsService.deleteStudent(students);
  }}

  updateStudent() {
    this._studentsService.updateStudent(this.editedStudent);
    this.editStudentForm = false;
    this.editedStudent = {};
  }

  cancelNewStudent() {
    this.newStudent = {};
    this.studentForm = false;
  }

  cancelEdits() {
    this.editedStudent = {};
    this.editStudentForm = false;
  }


}
