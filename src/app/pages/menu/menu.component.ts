import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
@Component({
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  products:any;
  imageDirectorypathProducts: any = 'http://127.0.0.1:8000/storage/products/'
  
  constructor(private dataservice: DataService) { }
  ngOnInit(): void {
    this.getProductData();
  }

  getProductData(){
    console.log("Products list")
    this.dataservice.listProduct().subscribe(res =>{
      console.log(res);
      this.products = res;
    })
  }
}
