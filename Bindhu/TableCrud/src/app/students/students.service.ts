import { Injectable } from '@angular/core';
import { Students } from './students';
import { STUDENTS } from './students-data';
import { findIndex } from 'lodash';

@Injectable()
export class StudentsService {
  private students = STUDENTS;

  getStudentsFromData(): Students[] {
    console.log(this.students);
    return this.students;
  }

  addStudent(student: Students) {
    this.students.push(student);
    console.log(this.students);
  }

  updateStudent(student: Students) {
    let index = findIndex(this.students, (p: Students) => {
      return p.id === student.id;
    });
    this.students[index] = student;
  }

  deleteStudent(student: Students) {
    this.students.splice(this.students.indexOf(student), 1);
    console.log(this.students);
  }

}

