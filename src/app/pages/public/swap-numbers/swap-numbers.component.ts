import { Component } from '@angular/core';

@Component({
  selector: 'app-swap-numbers',
  templateUrl: './swap-numbers.component.html',
  styleUrls: ['./swap-numbers.component.scss'],
})
export class SwapNumbersComponent {
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 111];
  swapNumbers: number[] = [];

  transfer(indexNumber: number) {
    this.swapNumbers.push(this.numbers[indexNumber]);
    this.numbers.splice(indexNumber, 1);
  }
}
