import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./../../../styles.css']
})
export class HomeComponent implements OnInit {

  constructor(private data: DataService) { }
 //userId: any;
  courses: any;
  ngOnInit(): void {
    this.courses = [1, 2];
    //this.userId = this.data.getUser()
  }

}
