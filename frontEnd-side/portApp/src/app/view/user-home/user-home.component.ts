import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  users: any[] = [];
  _status ='';

  constructor(private uService: UserService) { }

  ngOnInit() {

    this.onGetAllUsers();
    
  }


  onGetAllUsers(){
    this.uService.getAllUsers().subscribe( (res: any[]) => {
         this.users = res;
         console.log('users?' , this.users);
    });
  }

  

}
