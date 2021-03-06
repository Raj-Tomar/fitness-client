import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user.service';
import { UserListComponent } from '../user-list/user-list.component';
import { User } from '../user';

@Component({
  selector: 'user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user: User;

  constructor(private userService: UserService, private listComponent: UserListComponent) { }

  ngOnInit() {
  }

  deleteUser() {
    this.userService.deleteUserById(this.user.userId)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }

}
