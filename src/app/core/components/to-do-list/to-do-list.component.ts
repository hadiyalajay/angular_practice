import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss'],
})
export class ToDoListComponent {
  listArray: any[] = [];
  toDoListForm: FormGroup;

  constructor() {
    this.toDoListForm = new FormGroup({
      task: new FormControl(''),
    });
  }

  toDoListValue() {
    this.listArray.push(this.toDoListForm.value.task);
  }

  removeValue(indexNumber: number) {
    this.listArray.splice(indexNumber, 1);
  }
}
