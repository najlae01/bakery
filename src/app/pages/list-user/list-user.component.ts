import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

    users: any;
    constructor(private dataservice: DataService) { }
  
    ngOnInit(): void {
      this.getUserData();
    }
  
    getUserData(){
      console.log("Users list")
      this.dataservice.listUser().subscribe(res =>{
        console.log(res);
        this.users = res;
      })
    }


}
