import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};

  constructor(private uService: UserService) { }

  ngOnInit() {
  }

  onLoginUser(){
    this.uService.loginUser(this.user).subscribe(res =>{
      console.log('resp' , res);
    })
  }

}
