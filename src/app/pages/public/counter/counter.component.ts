import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  count = 0;

  counter(type: string) {
    type == 'plus' ? this.count++ : this.count--;
  }
}
