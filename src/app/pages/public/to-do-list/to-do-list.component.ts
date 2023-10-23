import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent {
  listOfTask: any[] = [];

  listForm: FormGroup;

  constructor() {
    this.listForm = new FormGroup({
      task: new FormControl(''),
    });
  }

  submit() {
    this.listOfTask.push(this.listForm.value.task);
  }

  delete(indexNumber: number) {
    this.listOfTask.splice(indexNumber, 1);
  }
}
