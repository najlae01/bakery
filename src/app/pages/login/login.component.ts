import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private data: DataService) { }
  email: any;
  password: any;
  ngOnInit(): void {
  }

  insertData(){
    console.log("Bonjour - Insertion test")
    this.data.login(this.email, this.password).subscribe(res =>{
      //console.log(res);
    })
  }
}
