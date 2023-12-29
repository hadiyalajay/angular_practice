import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-data-receive',
  templateUrl: './data-receive.component.html',
  styleUrls: ['./data-receive.component.scss'],
})
export class DataReceiveComponent {
  @Input() item = '';
}
