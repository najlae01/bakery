import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private data: DataService) { }
 //userId: any;
  courses: any;
  productData: any;
  ngOnInit(): void {
    this.courses = [1, 2];
    //this.userId = this.data.getUser()
    this.productData = this.data.productData;
  }

}
