import { Component, OnInit } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'The good Angular programmer';

  userList: User[] = this.userService.list;
  currentUser?: User;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
  }

  onSelect(user: User): void {
    this.currentUser = user;
  }

  onUpdate(user: User): void {
    this.userService.updateUser(user);
  }
 
  onDelete(user: User): void {
    this.userService.removeUser(user);
  }


}
