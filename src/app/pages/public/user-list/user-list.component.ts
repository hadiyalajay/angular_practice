import { Component } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  usersdetail = [
    {
      name: 'Jaydip',
      number: 9898989898,
      email: 'jaydip@7112',
      age: 22,
      dep:'Account Manager'
    },
    {
      name: 'Pradip',
      number: 7878787878,
      email: 'pradip@777',
      age: 25,
      dep:'Designer'
    },
    {
      name: 'Kuldip',
      number: 7373737373,
      email: 'kuldip@7226',
      age: 26,
      dep:'C.E.O'
    },
    {
      name: 'Sanjay',
      number: 9955605560,
      email: 'sanjay@5560',
      age: 24,
      dep:'Finance Manager'
    },
    {
      name: 'Ashok',
      number: 9999998888,
      email: 'ashok@9999',
      age: 23,
      dep:'Business Man'
    },
  ];
}
