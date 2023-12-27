import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  data = 100;

  updateValue() {
    this.data = Math.floor(Math.random() * 100);
  }
}
