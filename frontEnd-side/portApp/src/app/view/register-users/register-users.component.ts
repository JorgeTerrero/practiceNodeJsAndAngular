import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-users',
  templateUrl: './register-users.component.html',
  styleUrls: ['./register-users.component.css']
})
export class RegisterUsersComponent implements OnInit {

  user: any = {};

  constructor(private uService: UserService) { }

  ngOnInit() {
  }

  onregisterUser(){
    this.uService.registerUsers(this.user).subscribe(res =>{
      console.log('works');
    });
    this.user = {};
  }

}
