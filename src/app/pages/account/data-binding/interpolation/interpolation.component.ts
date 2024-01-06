import { Component } from '@angular/core';
import { IEmp } from '../../../../core/interface/employee';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss'],
})
export class InterpolationComponent {
  projectName: string = 'Angular Practice';
  personName: string = 'Ajay';
  price: number = 100;
  quantity: number = 3;
  editMode: boolean = true;

  emp: IEmp = {
    name: 'Sanjay Hadiyal',
    position: 'UI / UX',
  };

  finalTotal() {
    return this.price * this.quantity;
  }
}
