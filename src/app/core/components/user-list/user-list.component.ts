import { Component } from '@angular/core';
import { IUserDetailList } from 'src/app/core/interface/user-list';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  userDetail: IUserDetailList[] = [
    {
      name: 'Hadiyal Jaydip',
      number: 9899786543,
      dep: 'Account Manager',
      age: 23,
      email: 'jaydip@gmail.com',
    },
    {
      name: 'Hadiyal Sanjay',
      number: 9993456343,
      dep: 'Finance Manager',
      age: 25,
      email: 'sanjay112@gmail.com',
    },
    {
      name: 'Lakum Kuldip',
      number: 9090988776,
      dep: 'C.E.O',
      age: 26,
      email: 'lakumkuldip777@gmail.com',
    },
    {
      name: 'Dabhi Mahesh',
      number: 9876543210,
      dep: 'Driver',
      age: 27,
      email: 'dabhimahesh55@gmail.com',
    },
    {
      name: 'Chauhan Devrang',
      number: 7778886665,
      dep: 'MIS ( HR.Department )',
      age: 24,
      email: 'devrang4516@gmail.com',
    },
  ];
}
