import { Component } from '@angular/core';
import { UserDataService } from '../../services/user-data/user-data.service';
import { IUserDetailList } from '../../interface/user-list';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  userDetails: IUserDetailList[] = [];
  constructor(private userDataService: UserDataService) {
    this.userDetails = this.userDataService.userDetail;
  }
}
