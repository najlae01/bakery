import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private data: DataService) { }
  user = new User();
  ngOnInit(): void {
  }

  insertData(){
    console.log("Bonjour - Insertion test")
    this.data.register(this.user).subscribe(res =>{
      //console.log(res);
    })
  }
}
