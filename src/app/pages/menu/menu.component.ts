import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private dataservice: DataService) { }
  productData:any;
  ngOnInit(): void {
    this.productData = this.dataservice.productData;
  }

}
